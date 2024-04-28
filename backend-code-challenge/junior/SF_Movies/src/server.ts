import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import router from "./route/movies.route";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server running successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
