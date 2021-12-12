/* eslint-disable import/no-anonymous-default-export */
import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { getFollowings } from "../../../client/twitter";

export default async (req, res) => {
  const session = await getSession({ req });
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("session", session);
  console.log("token", token);

  try {
    let followings = [];
    // @ts-ignore
    const results = await getFollowings(token.twitter.user_id);
    followings.push.apply(followings, results.data);
    // for await (const following of results) {
    //   followings.push(following);
    // }

    return res.status(200).json({
      status: "Ok",
      data: followings,
    });
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    });
  }
};
