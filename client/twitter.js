import { TwitterApi } from "twitter-api-v2";

const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

const client = twitterClient.readWrite;

export const getUser = async (username) => {
  try {
    return await client.v2.usersByUsernames([username]);
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const getFollowers = async (userId) => {
  console.log("[GET Followers with userId]", userId);
  try {
    return await client.v2.followers(userId);
  } catch (e) {
    console.error(e);
    return e;
  }
};
