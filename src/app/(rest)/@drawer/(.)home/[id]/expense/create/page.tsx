"use client";

import CreateExpense from "@/components/create-expense";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!open) {
      timeout = setTimeout(() => router.back(), 150);
    }

    return () => clearTimeout(timeout);
  }, [open, router]);

  if (isDesktop) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Monthly Expenses</DialogTitle>
            <DialogDescription>
              Recent transactions from your home.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <CreateExpense />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer onOpenChange={setOpen} open={open}>
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
