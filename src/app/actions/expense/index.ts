"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getExpensesByHomeId(homeId: number) {
  return prisma.expense.findMany({
    cacheStrategy: { swr: 60, ttl: 60 },
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

export async function getTotalExpensesAmountByHomeId(
  homeId: number,
): Promise<number> {
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
  const expense = await prisma.expense.create({
    data: {
      amount,
      date,
      homeId,
      imageUrl,
      userId,
    },
  });

  revalidatePath(`home/${homeId}`);

  return expense;
}
