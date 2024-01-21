import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  secret: "647484hjr",
  providers: [CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    type: "credentials",
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      console.log("authorized");
      console.log(credentials);

      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      if(credentials?.username==="hamdani.etik@gmail.com"&& credentials.password==="123"){

      }

      return null;

      // if (user) {
      //   // Any object returned will be saved in `user` property of the JWT
      //   return user
      // } else {
      //   // If you return null then an error will be displayed advising the user to check their details.
      //   return null

      //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      // }
    }
  })
  ]
  ,
  callbacks: {
    async jwt({ token, account, user }: any) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      console.log("jwt cllback");

      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
      }
      return token
    },
    async session({ session, token }: any) {
      console.log("session");

      // if('email' in token){
      //   session.token.email=  
      // }
      return session
    }
  },
  pages:{
    signIn:"/login"
  }

})

export { handler as GET, handler as POST }