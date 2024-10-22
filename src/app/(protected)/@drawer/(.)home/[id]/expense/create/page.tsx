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
import { useDialogAsRoute, useMediaQuery } from "@/hooks";

export default function Page() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { open, setOpen } = useDialogAsRoute(150);

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
