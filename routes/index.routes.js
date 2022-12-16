import { Router } from "express";
import {
  getAllUsers,
  addUser,
  getUserById,
  updateUserById,
  transferCash,
} from "../controllers/users.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";
export const indexRoute = Router();

indexRoute.get("/allusers", getAllUsers);
indexRoute.get("/:id", getUserById);
indexRoute.post("/adduser", addUser);
indexRoute.post("/:id", updateUserById);
indexRoute.post("/transfercash/:firstId/:secondId", transferCash);
