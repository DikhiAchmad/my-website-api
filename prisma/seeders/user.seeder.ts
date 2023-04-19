import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function userSeeder() {
  const hashedPassword = await bcrypt.hash("mypassword", 10);
  await prisma.user.createMany({
    data: [
      {
        id: '1d8ee894-1968-4ba3-bf85-96e71a678028',
        email: "dani@ilustiva.com",
        name: "dani",
        password: hashedPassword,
      },
    ],
    skipDuplicates: true,
  });
}

export default userSeeder;
