import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from '../utils/error.js'


// signup Or register
export const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      return res.json({
        status: false,
        message: "Missing fields",
      });

    // encrypting user password
    // generating salt
    const salt = await bcrypt.genSaltSync(10);

    // hashing password
    const hashPassword = await bcrypt.hashSync(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(200).json({
      status: true,
      message: "User Registered Successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

//login
export const loginController = async (req, res, next) => {
  try {
    //check missing fields
    // if (!req.body.email || !req.body.password)
    //   return res.status(404).json({
    //     status: false,
    //     message: "Missing Fields",
    //   });

    const user = await User.findOne({ username: req.body.username });
    console.log("====>>> user data", user);

    if (!user) return next(createError(404, "User not found"));
    //decrypt password to check and match
    const validPass = await bcrypt.compare(req.body.password, user.password);
    console.log("validPass >>>", validPass);

    if (!validPass) return next(createError(400, "Invalid Credentials"));

    const { password, isAdmin, ...otherDetails } = user._doc;

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "uganda");

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        status: true,
        message: "Login Successful",
        data: ({ details: { ...otherDetails }, isAdmin })
      });
  } catch (error) {
    next(error);
  }
};
