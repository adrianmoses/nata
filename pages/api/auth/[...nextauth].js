// @ts-nocheck
import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        if (account.provider && !token[account.provider]) {
          token[account.provider] = {};
        }

        if (account.oauth_token) {
          token[account.provider].oauth_token = account.oauth_token;
        }

        if (account.oauth_token_secret) {
          token[account.provider].oauth_token_secret =
            account.oauth_token_secret;
        }

        if (user.id) {
          token[account.provider].user_id = user.id;
        }
      }
      return token;
    },
  },
});
