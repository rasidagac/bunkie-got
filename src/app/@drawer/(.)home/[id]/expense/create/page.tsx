"use client";

import CreateExpense from "@/components/create-expense";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

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
          <CreateExpense />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
