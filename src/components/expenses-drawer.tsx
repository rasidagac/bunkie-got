"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useDialogAsRoute } from "@/hooks";
import React from "react";

export default function ExpensesDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen } = useDialogAsRoute();

  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerContent className="max-h-96">
        <DrawerHeader>
          <DrawerTitle>Monthly Expenses</DrawerTitle>
          <DrawerDescription>
            Recent transactions from your home.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
