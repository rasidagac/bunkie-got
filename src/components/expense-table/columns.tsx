"use client";

import { Expense, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export type ExpenseWithUser = { user: Pick<User, "name"> } & Expense;

export const columns: ColumnDef<ExpenseWithUser>[] = [
  {
    accessorKey: "user.name",
    header: "User",
  },
  {
    accessorFn: (row) =>
      row.date?.toLocaleString("tr-TR", { dateStyle: "short" }),
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
