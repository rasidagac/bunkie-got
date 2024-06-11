"use server";

import prisma from "@/lib/prisma";

export async function getHomeById(id: number) {
  return prisma.home.findUnique({
    where: { id },
  });
}
