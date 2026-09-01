import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.role = user.role;
          }
          return token;
        },
        async session({ session, token }) {
          session.user.role = token.role;
          return session;
        },
      },
      authorize: async (creds) => {
        const user = await prisma.user.findUnique({
          where: { username: creds.username as string },
        });
        if (!user) return null;

        const valid = await bcrypt.compare(
          creds.password as string,
          user.passwordHash,
        );
        if (!valid) return null;
        return {
          id: user.id.toString(),
          name: user.username,
          role: user.role,
        };
      },
    }),
  ],
});
