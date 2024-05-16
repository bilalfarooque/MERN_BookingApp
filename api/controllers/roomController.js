import Room from "../models/Rooms.js";
import Hotel from "../models/Hotel.js";

// create Room
export const createRoomController = async (req, res, next) => {
  const HotelID = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(HotelID, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }

    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};


//update
export const updateRoomController = async (req, res) => {
    try {
      // Use findByIdAndUpdate with options to return the updated document
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true, // This option returns the updated document
          runValidators: true, // This option ensures that the update runs validation
        }
      );
  
      if (!updatedRoom) {
        // If no Room is found, return a 404 status
        return res.status(404).json({
          status: false,
          message: "No Room Found",
        });
      }
  
      // If the Room is found and updated, return a success response
      res.status(200).json({
        status: true,
        message: "Room Updated Successfully",
        data: updatedRoom,
      });
    } catch (err) {
      next(err);
    }
  };

  //updateRoomAvailController
//update
export const updateRoomAvailController = async (req, res) => {
  try {
    await Room.updateOne({"roomNumbers._id": req.params.id},{
      $push :{
        "roomNumbers.$.unavailableDates": req.body.dates
      }
    })


    // If the Room is found and updated, return a success response
    res.status(200).json({message:"updated"})
  } catch (err) {
    next(err);
  }
};

  
  //delete
  export const deleteRoomController = async (req, res) => {
    const HotelID = req.params.hotelId;

    try {
      // Use findByIdAndDelete with options
      const deleteRoom = await Room.findByIdAndDelete(req.params.id);

      try {
        await Hotel.findByIdAndUpdate(HotelID, {
          $pull: { rooms: deleteRoom },
        });
      } catch (error) {
        next(error);
      }
  
  
      if (!deleteRoom) {
        // If no Room is found, return a 404 status
        return res.status(404).json({
          status: false,
          message: "No Room Found",
        });
      }
  
      res.status(200).json({
        status: true,
        message: "Room deleted Successfully",
      });
    } catch (err) {
      next(err);
    }
  };
  
  //get Room
  export const getRoomController = async (req, res) => {
    try {
      // Use findById
      const getRoom = await Room.findById(req.params.id);
  
      if (!getRoom) {
        // If no Room is found, return a 404 status
        return res.status(404).json({
          status: false,
          message: "No Room Found",
        });
      }
  
      res.status(200).json({
        status: true,
        message: "Room found Successfully",
        data: getRoom,
      });
    } catch (err) {
      next(err);
    }
  };
  
  //get all Rooms
  export const getRoomsController = async (req, res) => {
    try {
      const getRooms = await Room.find();
  
      if (!getRooms) {
        // If no Room is found, return a 404 status
        return res.status(404).json({
          status: false,
          message: "No Rooms Found",
        });
      }
  
      res.status(200).json({
        status: true,
        message: "Rooms data found Successfully",
        data: getRooms,
      });
    } catch (err) {
      next(err);
    }
  };
  