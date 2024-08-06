"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useMediaQuery } from "@/hooks";
import { User } from "@prisma/client";
import { ChevronsUpDown } from "lucide-react";
import { useMemo } from "react";

type UserWithExpenses = { expenses: { amount: number }[] } & User;

export function Liabilities({
  totalAmount,
  users,
}: {
  totalAmount: number;
  users: ReadonlyArray<UserWithExpenses>;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const userBalance = (user: UserWithExpenses) =>
    user.expenses?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  const userList = useMemo(
    () =>
      users.map((user) => (
        <div
          className="flex justify-between rounded-md border px-4 py-3 font-mono text-sm"
          key={user.id}
        >
          <div>{user.name}</div>
          <div>{userBalance(user) - totalAmount / users.length}</div>
        </div>
      )),
    [totalAmount, users],
  );

  if (isDesktop) {
    return <div className="space-y-2">{userList}</div>;
  }

  return (
    <Collapsible className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button className="w-full justify-between" size="sm" variant="outline">
          <h4 className="text-sm font-semibold">Liabilities</h4>
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">{userList}</CollapsibleContent>
    </Collapsible>
  );
}
