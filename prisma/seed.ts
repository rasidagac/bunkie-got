import prisma from '../src/lib/prisma';

async function main() {
  const response = prisma.home.create({
    data: {
      name: 'Cebeci Home',
      resetDayOfMonth: 1,
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
