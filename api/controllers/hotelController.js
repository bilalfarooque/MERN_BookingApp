import Hotel from "../models/Hotel.js";

//create
export const createHotelController = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);

    const hotelData = await newHotel.save();
    !hotelData
      ? res.status(404).json({
          status: false,
          error: "post not saved",
        })
      : res.status(200).json(hotelData);
  } catch (error) {
    next(error);
  }
};

//update
export const updateHotelController = async (req, res, next) => {
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
  } catch (error) {
    next(error);
  }
};

//delete
export const deleteHotelController = async (req, res, next) => {
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
  } catch (error) {
    next(error);
  }
};

// //get hotel
export const getHotelController = async (req, res, next) => {
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
  } catch (error) {
    next(error);
  }
};

//get all hotels
export const getHotelsController = async (req, res, next) => {
  try {
    const getHotels = await Hotel.find();

    console.log("getHotels==> ", getHotels);

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
  } catch (error) {
    next(error);
  }
};

// get hotels count by city
export const getHotelscountByCity = async (req, res, next) => {
  // Check if 'cities' query parameter exists and is a string
  if (!req.query.cities || typeof req.query.cities !== "string") {
    return res.status(400).json({ error: "Invalid query parameter: cities" });
  }

  const cities = await req.query.cities.split(",").map((city) => city.trim());
  console.log("cities=>>>", cities);

  try {
    const list = await Promise.all(
      cities.map(async (city) => {
        const formattedCity = city.toLowerCase();
        return Hotel.countDocuments({ city: formattedCity });
      })
    );
    //countDocuments mongoDb function to count

    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
// get hotels count by Type
export const getHotelscountByType = async (req, res, next) => {
  try {
    //countDocuments mongoDb function to count
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const appartmentCount = await Hotel.countDocuments({
      type: "appartment",
    });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "appartment", count: appartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};
