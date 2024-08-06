"use client";

import { getExpensesByHomeId } from "@/app/actions/expense";
import ExpenseTable from "@/components/expense-table";
import { SkeletonTable } from "@/components/table-skeleton";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Expense, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Expenses = { user: Pick<User, "name"> } & Expense;

export default function Page({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(true);
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getExpensesByHomeId(Number(params.id)).then((value) => {
      setExpenses(value);
      setLoading(false);
    });
  }, [params.id]);

  if (!expenses) {
    return <div>No expenses found.</div>;
  }

  return (
    <Drawer onClose={() => router.back()} onOpenChange={setOpen} open={open}>
      <DrawerContent className="max-h-96">
        <DrawerHeader>
          <DrawerTitle>Monthly Expenses</DrawerTitle>
          <DrawerDescription>
            Recent transactions from your home.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          {loading ? (
            <SkeletonTable rowNumber={4} />
          ) : (
            <ExpenseTable data={expenses} />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
