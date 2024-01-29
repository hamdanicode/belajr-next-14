import db from "@/lib/dbLib";
import { user } from "@/schemas/user";
import { compare } from "bcrypt";
import { eq } from "drizzle-orm";
import NextAuth, { User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    type: "credentials",
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials:any, req) {
      const rows=await db.select().from(user).where(eq(user.email,credentials?.username))
      console.log("authorize");
      // console.log(rows);
      const userData=rows[0];
      
      const passwordCorrect=await compare(credentials?.password,userData.password??'')
      if (passwordCorrect) {
        return {
          id:userData.id,
          username:userData.email,
        }
      }else{
        return null;
      }
      
    }
  })
  ]
  ,
  // callbacks: {
  //   async jwt({ token, account, user }: any) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin
  //     console.log("jwt cllback");

  //     if (account) {
  //       token.accessToken = account.access_token
  //       token.id = user.id
  //     }
  //     return token
  //   },
  //   async session({ session, token }: any) {
  //     console.log("session");

  //     // if('email' in token){
  //     //   session.token.email=  
  //     // }
  //     return session
  //   }
  // },
  pages:{
    signIn:"/login"
  }

})

export { handler as GET, handler as POST }