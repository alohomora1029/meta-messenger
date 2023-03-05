import NextAuth from "next-auth"
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  session: { strategy : "jwt"},
  secret:process.env.NEXTAUTH_SECRET!,
  pages:{
    signIn:'/auth/signin',
  },
  callbacks: {
    async jwt({token,account,user}){
      if(account) {
        token.accessToken = account.access_token
        // token.id = profile.id
      }else if (user){
        token.id = user.id
      }
      return token
    },
    async session({session,token}:any){
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    }
  }
}

export default NextAuth(authOptions);


