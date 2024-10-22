import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/upload:
 *   put:
 *     summary: Upload a file
 *     description: Upload a file to the Vercel Blob Storage
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               base64:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: The uploaded file
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 */
export async function PUT(request: Request) {
  const { base64, name } = await request.json();

  const file = await fetch(base64)
    .then((res) => res.blob())
    .then((blob) => new File([blob], name, { type: "image/*" }));

  const blob = await put(name, file, {
    access: "public",
  });

  return NextResponse.json(blob);
}
