import express from "express";
import router from "./controller/workoutController.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
export default app;
