import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async signUp(rawUserData) {
        const {firstName, lastName, email, password, passwordConfirmation} = rawUserData
        if (password === passwordConfirmation){
          const passwordDigest = await bcrypt.hash(password, 10)
          return prisma.user.create({
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
        return prisma.user.findUnique({
          where: { email: email },
        })
      },

      async login(email, password) {
        const user = prisma.user.getByEmail(email);
        const valid = bcrypt.compare(password, user.passwordDigest)
        if(!!valid){return user}
        return "Invalid Login"
      }
    },
  },
})