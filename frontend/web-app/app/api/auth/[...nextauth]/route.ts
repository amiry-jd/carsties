import NextAuth, { NextAuthOptions } from "next-auth"
import { authOptions } from "@/app/lib/authOptions";

const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST }