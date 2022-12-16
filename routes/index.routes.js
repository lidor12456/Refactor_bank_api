import { Router } from "express";
import {
  getAllUsers,
  addUser,
  getUserById,
  updateUserById,
  transferCash,
  deleteUser,
  depotsCash,
} from "../controllers/users.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";
export const indexRoute = Router();

indexRoute.get("/allusers", getAllUsers);
indexRoute.get("/:id", getUserById);
indexRoute.post("/adduser", addUser);
indexRoute.put("/update/:id", updateUserById);
indexRoute.put("/depots/:id", depotsCash);
indexRoute.post("/transfercash/:firstId/:secondId", transferCash);
indexRoute.delete("delete/:id", deleteUser);
