import Hotel from "../models/Hotel.js";
import Room from "../models/Rooms.js";

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
    res.status(200).json(updatedHotel);
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

    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

//get all hotels
export const getHotelsController = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    const query = { ...others };
    if (min !== undefined && max !== undefined) {
      query.cheapestPrice = { $gt: +min, $lt: +max };
    }
    const limitNum = +limit || 10; // Default to 10 if limit is not provided or invalid
    const getHotels = await Hotel.find(query).limit(limitNum);

    if (getHotels.length == 0) {
      // If no hotel is found, return a 404 status
      return res.status(404).json({
        status: false,
        message: "No Hotels Found",
      });
    }

    res.status(200).json(getHotels);
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

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    console.log("hotelID", hotel);

    // Filter out any undefined or null room IDs before mapping over the array
    const validRoomIds = hotel.rooms.filter(
      (roomId) => roomId !== null && roomId !== undefined
    );
    const list = await Promise.all(
      validRoomIds.map((roomId) => {
        return Room.findById(roomId);
      })
    );

    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
