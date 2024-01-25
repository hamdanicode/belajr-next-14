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
      // console.log("authorized");
      // console.log(credentials);
      // const user = { id: "1", name: "Hamdani", email: "hamdani.etik@gmail.com",password:"12345" }
      // const url=new URL("http://localhost:3001/users")
      // url.searchParams.set('email',credentials?.username);
      // console.log(url);
      

      return null;

      // if(credentials?.username===user.email&& credentials.password===user.password){
      //   return user;
      // }else{
      //   return null;
      // }cre
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