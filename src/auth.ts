import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/prisma"
import bcrypt from "bcryptjs"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
  Credentials ({
    credentials: {
      username : {} ,
      password : {},

    },
    authorize: async(creds)=> {
      const user = await prisma.user.findUnique({ where: { username: creds.username as string }
       })
 if (!user) return null 
 
 const valid = await bcrypt.compare(creds.password as string, user.passwordHash)
 if (!valid) return null
 return {
  id: user.id.toString(),
  name: user.username,
}
  
      },
    
})
  ],
})