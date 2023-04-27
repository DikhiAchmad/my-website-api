import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function categoriesSeeder() {
  await prisma.categories.createMany({
    data: [
      {
        id: "3acd588d-22fa-4e54-9001-366f2d4245f4",
        nameCategories: "website"
      },
    ],
    skipDuplicates: true,
  });
}

export default categoriesSeeder;
