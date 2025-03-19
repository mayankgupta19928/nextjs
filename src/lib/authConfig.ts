export const authConfig = {
  debug: true, // Enable logs

  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.sub;
      return session;
    },
  },
  // secret: "p4Ubyq9492R5orfDQbLn/FtwGFjfII9eOxm/NEd4mb0=",
};
