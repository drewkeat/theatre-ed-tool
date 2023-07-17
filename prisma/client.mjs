import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const xprisma = new PrismaClient().$extends({
  model: {
    user: {
      async signUp(rawUserData) {
        const {firstName, lastName, email, password, passwordConfirmation} = rawUserData
        if (password === passwordConfirmation){
          const passwordDigest = await bcrypt.hash(password, 10)
          return await xprisma.user.create({
            data: {
              firstName,
              lastName,
              email,
              passwordDigest
            }
          })
        }
      },

      async getByEmail(email) {
        return await xprisma.user.findUnique({
          where: { email: email },
        })
      },

      async login({email, password}) {
        const {passwordDigest, ...user} = await xprisma.user.getByEmail(email);
        debugger
        const valid = await bcrypt.compare(password, passwordDigest)
        if(!!valid){return user}
        return("Invalid Login")
      }
    },
  },
})

export default xprisma