import express from "express";
import "./db/mongoose.js";
import cors from "cors";
import { indexRoute } from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use("/api", indexRoute);

app.use(cors());

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
