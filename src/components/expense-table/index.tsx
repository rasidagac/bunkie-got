import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Expense, User } from "@prisma/client";
import React from "react";

interface IProps {
  data: ReadonlyArray<{ user: Pick<User, "name"> } & Expense>;
}

export default function ExpenseTable({ data }: IProps) {
  let total = 0;

  const rowRendered = data.map((expense) => {
    total += expense.amount;

    return (
      <TableRow key={expense.id}>
        <TableCell>
          <div className="font-medium">{expense.user.name}</div>
        </TableCell>
        <TableCell className="hidden xl:table-cell">Sale</TableCell>
        <TableCell className="hidden xl:table-cell">
          <Badge className="text-xs" variant="outline">
            Approved
          </Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">
          2023-06-23
        </TableCell>
        <TableCell className="text-right">{expense.amount}</TableCell>
      </TableRow>
    );
  });

  return (
    <div className="mx-auto flex w-full max-w-md flex-col overflow-auto rounded-t-[10px]">
      <Table>
        <TableHeader className="sticky top-0 bg-white">
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead className="hidden xl:table-cell">Type</TableHead>
            <TableHead className="hidden xl:table-cell">Status</TableHead>
            <TableHead className="hidden xl:table-cell">Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{rowRendered}</TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="text-right">{total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
