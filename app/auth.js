import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "/authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { signin, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {},
    }),
  ],
});
