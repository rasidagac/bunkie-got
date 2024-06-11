"use server";

import prisma from "@/lib/prisma";

export async function getHouseholdItemsByHomeId(homeId: number) {
  return prisma.householdItem.findMany({
    where: { homeId },
  });
}
