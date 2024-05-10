import User from "../models/User.js";

//create
export const createUserController = async (req, res) => {
  try {
    const newUser = new User(req.body);

    const userData = await newUser.save();
    !userData
      ? res.status(404).json({
          status: false,
          error: "post not saved",
        })
      : res.status(200).json(userData);
  } catch (err) {
    next(err);
  }
};

//update
export const updateUserController = async (req, res) => {
  try {
    // Use findByIdAndUpdate with options to return the updated document
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // This option returns the updated document
        runValidators: true, // This option ensures that the update runs validation
      }
    );

    if (!updatedUser) {
      // If no User is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No User Found",
      });
    }

    // If the User is found and updated, return a success response
    res.status(200).json({
      status: true,
      message: "User Updated Successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteUserController = async (req, res) => {
  try {
    // Use findByIdAndDelete with options
    const deleteUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteUser) {
      // If no User is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No User Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "User deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};

//get User
export const getUserController = async (req, res) => {
  try {
    // Use findById
    const getUser = await User.findById(req.params.id);

    if (!getUser) {
      // If no User is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No User Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "User found Successfully",
      data: getUser,
    });
  } catch (err) {
    next(err);
  }
};

//get all Users
export const getUsersController = async (req, res) => {
  try {
    const getUsers = await User.find();

    if (!getUsers) {
      // If no User is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No Users Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Users data found Successfully",
      data: getUsers,
    });
  } catch (err) {
    next(err);
  }
};
