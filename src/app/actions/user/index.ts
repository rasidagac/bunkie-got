"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";

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

export async function joinHome({ code }: { code: string }) {
  const user = await currentUser();

  const homeId = await prisma.home.findUnique({
    select: { id: true },
    where: { code },
  });

  if (!homeId) throw new Error(`Home with id '${code}' not found`);

  await prisma.user.update({
    data: { homeId: homeId.id },
    where: { id: user?.id },
  });

  redirect(`/home/${homeId.id}`);
}
