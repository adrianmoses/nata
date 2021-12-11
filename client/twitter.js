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
    return await client.v2.followers(userId, {
      // asPaginator: true,
      "user.fields": ["profile_image_url", "url"],
      max_results: 10,
    });
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const getFollowings = async (userId) => {
  console.log("[GET] Followings with user", userId);

  try {
    return await client.v2.following(userId, {
      // asPaginator: true,
      "user.fields": ["profile_image_url", "url"],
      max_results: 10,
    });
  } catch (e) {
    console.error(e);
    return e;
  }
};
