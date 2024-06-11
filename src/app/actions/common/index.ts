"use server";

import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function uploadImage(base64: string, name: string) {
  const file = await fetch(base64)
    .then((res) => res.blob())
    .then((blob) => new File([blob], name, { type: "image/*" }));

  const blob = await put(name, file, {
    access: "public",
  });

  revalidatePath("/");
  return blob;
}
