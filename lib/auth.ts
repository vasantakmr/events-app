import { AuthOptions } from "next-auth";
import { EmailProvider } from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const options: AuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
  },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      console.log(user, "Hurray you're signed in!");
    },
  },
} satisfies AuthOptions;
