import { connection } from "mongoose";
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");

  // const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const user = await User.find({ username: { $regex: regex } });
    return user;
  } catch (error) {
    console.log(error);
    // throw new Error("Failed to fetch users!");
  }
};
