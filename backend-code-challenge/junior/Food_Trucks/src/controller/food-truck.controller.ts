import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// Define a route to fetch food trucks near a specific location
const mapFoodTruck = async (req: Request, res: Response) => {
  try {
    const { latitude, longitude } = req.params;
    const response = await axios.get(
      `https://data.sfgov.org/resource/rqzj-sfat.json?$where=within_circle(location, ${latitude}, ${longitude}, 500)`,
      {
        headers: {
          "X-App-Token": process.env.DATASF_API_TOKEN,
        },
      }
    );

    const foodTrucks = response.data.map((truck: any) => ({
      name: truck.applicant,
      address: truck.address,
      cuisine: truck.fooditems,
      latitude: truck.location.latitude,
      longitude: truck.location.longitude,
    }));

    res.status(200).json(foodTrucks);
  } catch (error) {
    console.error("Error fetching food trucks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default mapFoodTruck;
