// This will run after migrations
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const event = await prisma.event.upsert({
    where: {
      email: "test@gmail.com",
    },
    update: {},
    create: {
      email: "test@gmail.com",
      name: "Event 101",
      description: "fun events all across the world",
    },
  });
};

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
