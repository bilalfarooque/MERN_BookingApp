import Hotel from "../models/Hotel.js";

//create
export const createHotelController = async (req, res) => {
  try {
    const newHotel = new Hotel(req.body);

    const hotelData = await newHotel.save();
    !hotelData
      ? res.status(404).json({
          status: false,
          error: "post not saved",
        })
      : res.status(200).json(hotelData);
  } catch (err) {
    next(err);
  }
};

//update
export const updateHotelController = async (req, res) => {
  try {
    // Use findByIdAndUpdate with options to return the updated document
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // This option returns the updated document
        runValidators: true, // This option ensures that the update runs validation
      }
    );

    if (!updatedHotel) {
      // If no hotel is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No Hotel Found",
      });
    }

    // If the hotel is found and updated, return a success response
    res.status(200).json({
      status: true,
      message: "Hotel Updated Successfully",
      data: updatedHotel,
    });
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteHotelController = async (req, res) => {
  try {
    // Use findByIdAndDelete with options
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!deleteHotel) {
      // If no hotel is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No Hotel Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Hotel deleted Successfully",
    });
  } catch (err) {
    next(err);
  }
};

//get hotel
export const getHotelController = async (req, res) => {
  try {
    // Use findById
    const getHotel = await Hotel.findById(req.params.id);

    if (!getHotel) {
      // If no hotel is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No Hotel Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Hotel found Successfully",
      data: getHotel,
    });
  } catch (err) {
    next(err);
  }
};

//get all hotels
export const getHotelsController = async (req, res) => {
  try {
    const getHotels = await Hotel.find();

    if (!getHotels) {
      // If no hotel is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No Hotels Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Hotels data found Successfully",
      data: getHotels,
    });
  } catch (err) {
    next(err);
  }
};
