import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Expense } from "@prisma/client";
import React from "react";

interface IProps {
  data: ReadonlyArray<Expense>;
}

export default function ExpenseTable({ data }: IProps) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col overflow-auto rounded-t-[10px] p-4">
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
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
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
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Noah Williams</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                noah@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-cell">Subscription</TableCell>
            <TableCell className="hidden xl:table-cell">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">
              2023-06-25
            </TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Emma Brown</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                emma@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-cell">Sale</TableCell>
            <TableCell className="hidden xl:table-cell">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">
              2023-06-26
            </TableCell>
            <TableCell className="text-right">$450.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="font-medium">Liam Johnson</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                liam@example.com
              </div>
            </TableCell>
            <TableCell className="hidden xl:table-cell">Sale</TableCell>
            <TableCell className="hidden xl:table-cell">
              <Badge className="text-xs" variant="outline">
                Approved
              </Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell lg:hidden xl:table-cell">
              2023-06-27
            </TableCell>
            <TableCell className="text-right">$550.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
