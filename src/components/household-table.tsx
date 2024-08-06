import { getHouseholdItemsByHomeId } from "@/app/actions/household-item";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleUserRound } from "lucide-react";
import React from "react";

export async function HouseholdTable({ homeId }: { homeId: number }) {
  const householdItems = await getHouseholdItemsByHomeId(homeId);

  const rowRendered = householdItems.map((item) => {
    return (
      <TableRow key={item.id}>
        <TableCell>
          <Checkbox checked={!!item.expenseId} />
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>
          <Badge>{item.expense?.user?.name}</Badge>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-2/12">Bought?</TableHead>
          <TableHead className="w-7/12">Name</TableHead>
          <TableHead className="w-3/12">
            <div className="flex items-center gap-1">
              Buyer <CircleUserRound size={20} />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{rowRendered}</TableBody>
    </Table>
  );
}
