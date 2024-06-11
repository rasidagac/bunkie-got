import prisma from "../src/lib/prisma";

async function main() {
  const response = prisma.home.create({
    data: {
      code: "noxx672",
      name: "Cebeci Home",
    },
  });
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
