import NextAuth,{ DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user:{
      accessToken?:string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export default async (req, res) => {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req })
  if (token) {
    // Signed in
    console.log("JSON Web Token", JSON.stringify(token, null, 2))
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
