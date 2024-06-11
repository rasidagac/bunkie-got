"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

export async function getUsersByHomeId(homeId: number) {
  return prisma.user.findMany({ where: { homeId } });
}

export async function getUserByHomeId(id: string, homeId: number) {
  return prisma.user.findUnique({ where: { homeId, id } });
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

export async function joinHome(formData: FormData) {
  const homeId = await prisma.home.findUnique({
    select: { id: true },
    where: { code: formData.get("code") as string },
  });

  const user = await currentUser();

  if (!homeId) {
    return Promise.reject(new Error("Home does not exist"));
  }

  return prisma.user.update({
    data: { homeId: homeId.id },
    where: { id: user?.id },
  });
}
