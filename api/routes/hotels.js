import express  from "express";
import { createHotelController, deleteHotelController, getHotelController, getHotelsController, updateHotelController } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//user API
const hotelRouter = express.Router()

//create a hotel
hotelRouter.post("/",verifyAdmin, createHotelController)
//update a hotel
hotelRouter.put("/:id",verifyAdmin, updateHotelController)
//delete a hotel
hotelRouter.delete("/:id",verifyAdmin, deleteHotelController)
//get a hotel
hotelRouter.get("/:id", getHotelController)
//get all hotels
hotelRouter.get("/", getHotelsController)


export default hotelRouter