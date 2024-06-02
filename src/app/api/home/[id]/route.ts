import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.url.split("/").pop();

  const home = await prisma.home.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(home, { status: 201 });
}
