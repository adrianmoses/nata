/* eslint-disable import/no-anonymous-default-export */
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { getFollowers } from "../../../client/twitter";

export default async (req, res) => {
  const session = await getSession({ req });
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("session", session);
  console.log("token", token);

  try {
    // @ts-ignore
    const results = await getFollowers(token.twitter.user_id);
    return res.status(200).json({
      status: "Ok",
      data: results.data,
    });
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    });
  }
};
