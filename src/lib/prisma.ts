import { PrismaClient } from "../generated/prisma/client" // match your actual generated path
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ adapter }) //connects to the database and be able to use the prisma client to query the database(prisma.modelName)

export default prisma