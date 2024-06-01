import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            password: { label: "Password", type: "password" },
            email: { label: "Email", type: "email" },
          },
          authorize: async ({email,password}) =>{

            // Logic to confirm user with db
            return {}
          }
    })
  ],
  pages:{
    newUser: '/signup',
    signIn: '/login',
    signOut: '/',
    error:'/login'
  }
})