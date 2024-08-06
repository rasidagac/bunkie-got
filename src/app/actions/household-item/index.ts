"use server";

import prisma from "@/lib/prisma";

export async function getHouseholdItemsByHomeId(homeId: number) {
  return prisma.householdItem.findMany({
    include: {
      expense: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: { expenseId: "desc" },
    where: { homeId },
  });
}

export async function getNotBoughtByHomeId(homeId: number) {
  return prisma.householdItem
    .findMany({
      where: { expenseId: null, homeId },
    })
    .then((items) =>
      items.map((item) => ({ label: item.name, value: item.id.toString() })),
    );
}

export async function updateManyByExpense(
  expenseId: number,
  itemIds: number[],
) {
  return prisma.householdItem.updateMany({
    data: {
      expenseId,
    },
    where: { id: { in: itemIds } },
  });
}
