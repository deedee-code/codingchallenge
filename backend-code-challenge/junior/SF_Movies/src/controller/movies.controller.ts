import { Request, Response } from "express";
import axios from "axios";

async function getMovieLocations() {
  try {
    const response = await axios.get(
      "https://data.sfgov.org/resource/yitu-d5am.json"
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching movie locations:", error);
    return [];
  }
}

const filmedMovies = async (req: Request, res: Response) => {
  const movieLocations = await getMovieLocations();
  res.json(movieLocations);
};

export default filmedMovies;
