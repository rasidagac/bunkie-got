import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HouseholdItem } from "@prisma/client";
import React from "react";

export function HouseholdTable({ data }: { data: HouseholdItem[] }) {
  const rowRendered = data.map((item) => {
    return (
      <TableRow key={item.id}>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell>{item.name}</TableCell>
      </TableRow>
    );
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead className="w-[100px]">Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{rowRendered}</TableBody>
    </Table>
  );
}
