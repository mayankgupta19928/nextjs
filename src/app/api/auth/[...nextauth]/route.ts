import { authConfig } from "@/lib/authConfig";
import exp from "constants";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const GOOGLE_CLIENT_ID =
  "86010827649-nr32mqksjorrlfgivblathihd5s672si.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const handler: NextAuthOptions = NextAuth({
  // ...authConfig,

  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
