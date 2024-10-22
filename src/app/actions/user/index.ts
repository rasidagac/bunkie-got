"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getUsersByHomeId(homeId: number) {
  return prisma.user.findMany({
    cacheStrategy: { swr: 60, ttl: 60 },
    include: {
      expenses: {
        select: {
          amount: true,
        },
      },
    },
    where: { homeId },
  });
}

export async function getUserByHomeId(id: string, homeId: number) {
  return prisma.user.findUnique({ where: { homeId, id } });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    cacheStrategy: { swr: 60, ttl: 60 },
    where: { id },
  });
}

export async function createUser({ createdAt, email, id, name }: User) {
  return prisma.user.create({
    data: {
      createdAt,
      email,
      id,
      name,
    },
  });
}

export async function joinHome({ code }: { code: string }) {
  const user = await currentUser();

  const homeId = await prisma.home.findUnique({
    select: { id: true },
    where: { code },
  });

  if (!homeId) throw new Error(`Home with code: '${code}' not found`);

  await prisma.user.update({
    data: { homeId: homeId.id },
    where: { id: user?.id },
  });

  redirect(`/home/${homeId.id}`);
}
