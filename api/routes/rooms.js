import express  from "express";
import { createRoomController, deleteRoomController, getRoomController, getRoomsController, updateRoomAvailController, updateRoomController } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//user API
const roomRouter = express.Router()

//create a Room
roomRouter.post("/:hotelId",verifyAdmin, createRoomController)
//update a Room
roomRouter.put("/:id",verifyAdmin, updateRoomController)
//update a Room availability
roomRouter.put("/availability/:id", updateRoomAvailController)
//delete a Room
roomRouter.delete("/:id/:hotelId",verifyAdmin, deleteRoomController)
//get a Room
roomRouter.get("/:id", getRoomController)
//get all Rooms
roomRouter.get("/", getRoomsController)


export default roomRouter