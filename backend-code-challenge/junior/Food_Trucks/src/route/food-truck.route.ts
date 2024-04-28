import express from "express";
import mapFoodTruck from "../controller/food-truck.controller";

const router = express.Router();

router.get("/foodtrucks/:latitude/:longitude", mapFoodTruck);

export default router;
