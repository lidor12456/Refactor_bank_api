import { addUserToMongo } from "../services/users.mongoose.js";
import { bankUsers } from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await bankUsers.find({});
    res.status(200).send(users);
  } catch {}
};

export const addUser = async (req, res) => {
  const body = req.body;
  // console.log(body);

  const newUser = await addUserToMongo(body);
  res.status(201).send(newUser);
};
