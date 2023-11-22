import { connection } from "mongoose";
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const user = await User.find();
    return user;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch users!");
  }
};
