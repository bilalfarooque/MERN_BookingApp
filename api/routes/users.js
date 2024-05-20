import express  from "express";
import { createUserController, deleteUserController, getUserController, getUsersController, updateUserController } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

//users API
const userRouter = express.Router()

userRouter.get("/checkToken", verifyToken, (req, res, next)=>{
    res.send("Authorized Token Success");
})
userRouter.get("/checkUser/:id", verifyUser, (req, res, next)=>{
    res.send("Authorized User Success");
})
userRouter.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("Authorized Admin Success");
})

//create a User
userRouter.post("/",verifyAdmin, createUserController)
//update a User
userRouter.put("/:id",verifyUser, updateUserController)
//delete a User
userRouter.delete("/:id",verifyUser, deleteUserController)
//get a User
userRouter.get("/:id",verifyUser, getUserController)
//get all Users
userRouter.get("/",verifyAdmin, getUsersController)


export default userRouter