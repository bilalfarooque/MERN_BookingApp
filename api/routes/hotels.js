import express  from "express";
import { createHotelController, deleteHotelController, getHotelController, getHotelsController, updateHotelController } from "../controllers/hotelControllers.js";

//user API
const hotelRouter = express.Router()

//create a hotel
hotelRouter.post("/", createHotelController)
//update a hotel
hotelRouter.put("/:id", updateHotelController)
//delete a hotel
hotelRouter.delete("/:id", deleteHotelController)
//get a hotel
hotelRouter.get("/:id", getHotelController)
//get all hotels
hotelRouter.get("/", getHotelsController)


export default hotelRouter