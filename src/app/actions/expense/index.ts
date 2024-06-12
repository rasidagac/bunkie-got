"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getExpensesByHomeId(homeId: number) {
  return prisma.expense.findMany({
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
    where: { homeId },
  });
}

export async function getTotalExpensesAmountByHomeId(homeId: number) {
  return prisma.expense
    .aggregate({
      _sum: {
        amount: true,
      },
      where: { homeId },
    })
    .then((value) => value._sum.amount || 0);
}

export async function createExpense({
  amount,
  date,
  homeId,
  imageUrl,
  userId,
}: Prisma.ExpenseCreateManyInput) {
  return prisma.expense.create({
    data: {
      amount,
      date,
      homeId,
      imageUrl,
      userId,
    },
  });
}
