import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: 828967536961-p0jde48s0q9m7ss9ce4k8a82pfajamor.apps.googleusercontent.com,
      clientSecret: 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,
    }),
  ],
});