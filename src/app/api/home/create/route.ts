import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { code, name, resetDayOfMonth, user } = await request.json();

  const home = await prisma.home.create({
    data: {
      code,
      name,
      resetDayOfMonth: Number(resetDayOfMonth),
      users: {
        connectOrCreate: [
          {
            create: {
              email: user?.emailAddresses[0].emailAddress,
              id: user?.id,
              name: user?.username,
            },
            where: {
              id: user?.id, // Clerk user id as primary key
            },
          },
        ],
      },
    },
  });

  return NextResponse.json(home, { status: 201 });
}
