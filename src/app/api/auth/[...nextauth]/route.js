import NextAuth, { NextAuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import DBConnect from "../../../../lib/DBconnect";
import User from "../../../../model/User";
async function login(email, password) {
  await DBConnect();
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User is not registered. Please sign up.");
    }
    if (!user.approved) {
      throw new Error("User is not active. Please wait for admin approval.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Incorrect password.");
    }
    user.password = undefined;
    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error);
  }
}
export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        console.log(credentials);
        const user = await login(credentials.email, credentials.password);
        return user || null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.accountType = user.accountType;
        token.approved = user.approved;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user._id = token._id;
        session.user.email = token.email;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.accountType = token.accountType;
        session.user.approved = token.approved;
      }
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: "token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
