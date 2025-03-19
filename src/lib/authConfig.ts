export const authConfig = {
  debug: true, // Enable logs

  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({
      session,
      token,
    }: {
      session: { user: { id: number } };
      token: { sub: number };
    }) {
      session.user.id = token.sub;
      return session;
    },
  },
  // secret: "p4Ubyq9492R5orfDQbLn/FtwGFjfII9eOxm/NEd4mb0=",
};
