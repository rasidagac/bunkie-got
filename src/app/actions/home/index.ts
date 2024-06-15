"use server";

import prisma from "@/lib/prisma";

export async function getHomeById(id: number) {
  return prisma.home.findUnique({
    cacheStrategy: { swr: 60, ttl: 60 },
    where: { id },
  });
}
