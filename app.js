import express from "express";
import "./db/mongoose.js";
import cors from "cors";
import { indexRoute } from "./routes/index.routes.js";

const app = express();

app.use(express.json());

app.use("/api", indexRoute);

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
