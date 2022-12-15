import { bankUsers } from "../models/user.model.js";

export const addUserToMongo = async (userObj) => {
  const newUser = await bankUsers.create(userObj);
  //   const newUser = new User(userObj); // sync
  //   newUser.save(); //async
  // User.printSome();
  // newUser.instanceOf();
  return newUser;
};
