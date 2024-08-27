import {PrismaClient} from '@prisma/client'
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

async function main() {

  const password = bcrypt.hashSync("admin1234", 10);

  const userSeed = await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      name: "Admin",
      role: "ADMIN",
      password
    }
  })

  console.log(userSeed)
}

main()