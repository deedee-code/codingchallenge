import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import foodTruckRoute from "./route/food-truck.route";
import swaggerJsdoc, { OAS3Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));
app.use("/api", foodTruckRoute);

const swaggerOptions: OAS3Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Food Truck API",
      description:
        "A service that tells the user what types of food trucks might be found near a specific location on a map.",
      version: "1.0.0",
    },
    externalDocs: {
      description: "SF Food Truck Data",
      url: "https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat",
    },
    servers: [{ url: "http://localhost:3000/api" }],
    tags: [
      {
        name: "Food Trucks",
        description: "food trucks found near a specific location on the map",
      },
    ],
  },
  apis: ["src/server.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req: Request, res: Response) => {
  res.send("Server running successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * @swagger
 * /foodtrucks/{latitude}/{longitude}:
 *  get:
 *    summary: Get food trucks near a specific location
 *    parameters:
 *      - in: path
 *        name: latitude
 *        required: true
 *        description: Latitude coordinate of the location
 *        schema:
 *          type: number
 *      - in: path
 *        name: longitude
 *        required: true
 *        description: Longitude coordinate of the location
 *        schema:
 *          type: number
 *    responses:
 *      '200':
 *        description: A list of food trucks near the specified location
 */
