// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const handler: NextAuthOptions = NextAuth({
//   // ...authConfig,

import { NextResponse } from "next/server";

//   providers: [
//     GoogleProvider({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   // secret: process.env.NEXTAUTH_SECRET,
// });

export function GET() {
  return NextResponse.json({ message: "GET request" });
}
// export { handler as GET, handler as POST };
