import { Router } from "express";
import { getAllUsers, addUser } from "../controllers/users.controller.js";
import { userAuth } from "../middlewares/auth.middleware.js";
export const indexRoute = Router();

indexRoute.get("/index", getAllUsers);
indexRoute.post("/adduser", addUser);
