import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const { name, resetDayOfMonth, user, code } = await request.json();

  const home = await prisma.home.create({
    data: {
      code,
      name,
      resetDayOfMonth: Number(resetDayOfMonth),
      users: {
        connectOrCreate: [
          {
            create: { email: user?.email, id: user?.sub, name: user?.name },
            where: {
              id: user?.sub, // Auth0 user id as primary key
            },
          },
        ],
      },
    },
  });

  return NextResponse.json(home, { status: 201 });
}
