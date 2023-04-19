import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postsSeeder() {
  await prisma.posts.createMany({
    data: [
      {
        userId: "1d8ee894-1968-4ba3-bf85-96e71a678028",
        title: "dani",
        content: "hello world",
      },
    ],
    skipDuplicates: true,
  });
}

export default postsSeeder;
