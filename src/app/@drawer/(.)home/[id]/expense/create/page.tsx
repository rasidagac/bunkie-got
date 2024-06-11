"use client";

import type { CreateExpenseArgs } from "@/components/create-expense";

import { createExpense } from "@/app/actions/expense";
import CreateExpense from "@/components/create-expense";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

export default function Page({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { user } = useUser();
  const handleSubmit: SubmitHandler<CreateExpenseArgs> = async (formData) => {
    const { amount, date, imageUrl } = formData;

    await createExpense({
      amount: amount,
      date: date ? new Date(date) : new Date(),
      homeId: Number(params.id),
      imageUrl,
      userId: user?.id as string,
    });
  };

  return (
    <Drawer onClose={() => router.back()} onOpenChange={setOpen} open={open}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Monthly Expenses</DrawerTitle>
          <DrawerDescription>
            Recent transactions from your home.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <CreateExpense onSubmit={handleSubmit} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
