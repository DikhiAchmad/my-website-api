import { PrismaClient } from "@prisma/client";
import postsSeeder from "./seeders/posts.seeder";
import userSeeder from "./seeders/user.seeder";

const prisma = new PrismaClient();

Promise.all([userSeeder(), postsSeeder()])
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
