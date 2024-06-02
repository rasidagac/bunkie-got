"use client";

import ExpenseTable from "@/components/expense-table";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Drawer onClose={() => router.back()} onOpenChange={setOpen} open={open}>
      <DrawerContent className="max-h-96">
        <DrawerHeader>
          <DrawerTitle>Monthly Expenses</DrawerTitle>
          <DrawerDescription>
            Recent transactions from your home.
          </DrawerDescription>
        </DrawerHeader>
        <ExpenseTable data={[]} />
      </DrawerContent>
    </Drawer>
  );
}
