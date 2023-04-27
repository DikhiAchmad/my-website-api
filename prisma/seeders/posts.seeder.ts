import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function postsSeeder() {
  await prisma.posts.createMany({
    data: [
      {
        title: "dani",
        content: "hello world",
        createdBy: "1d8ee894-1968-4ba3-bf85-96e71a678028",
        category: "3acd588d-22fa-4e54-9001-366f2d4245f4",
      },
    ],
    skipDuplicates: true,
  });
}

export default postsSeeder;
