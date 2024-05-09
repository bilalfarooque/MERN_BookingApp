import express from "express";
import {signupController, loginController, logoutController, forgetPasswordController} from  '../controllers/authController.js';

//user register API

const authRouter = express.Router()

authRouter.post("/register", signupController)
authRouter.post("/login", loginController)
authRouter.post("/logout", logoutController)
authRouter.put("/forgetPassword", forgetPasswordController)

export default authRouter