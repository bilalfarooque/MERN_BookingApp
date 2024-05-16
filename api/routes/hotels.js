import express  from "express";
import { createHotelController, deleteHotelController,getHotelController, getHotelRooms, getHotelsController, getHotelscountByCity, getHotelscountByType, updateHotelController } from "../controllers/hotelController.js";
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
hotelRouter.get("/single/:id", getHotelController)
//get all hotels
hotelRouter.get("/", getHotelsController)
//get hotels by city
hotelRouter.get("/countByCity", getHotelscountByCity)
//get hotels by type
hotelRouter.get("/countByType", getHotelscountByType)
//get hotel room
hotelRouter.get("/find/:id", getHotelRooms)


export default hotelRouter