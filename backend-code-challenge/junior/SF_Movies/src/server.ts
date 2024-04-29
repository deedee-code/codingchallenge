import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./route/movies.route";
import swaggerJsdoc, { OAS3Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));
app.use("/api", router);

const swaggerOptions: OAS3Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "San Francisco Movies",
      description:
        "A service that shows on a map where movies have been filmed in San Francisco.",
      version: "1.0.0",
    },
    externalDocs: {
      description: "SF Movies Data",
      url: "https://data.sfgov.org/Arts-Culture-and-Recreation-/Film-Locations-in-San-Francisco/yitu-d5am",
    },
    servers: [{ url: "http://localhost:3000/api" }],
    tags: [
      {
        name: "Movies",
        description: "All endpoints related to movies in San Francisco",
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
 * /movies:
 *  get:
 *    summary: Get SF movies location
 *    responses:
 *      '200':
 *        description: A list of food trucks near the specified location
 */
