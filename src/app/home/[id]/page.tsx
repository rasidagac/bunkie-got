import ExpenseTable from "@/components/expense-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import prisma from "@/lib/prisma";
import { getResetDate } from "@/lib/utils";
import { ChevronsUpDown, CircleFadingPlus, Eye, Home } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  async function getHomeAndUsers() {
    return prisma.home.findUnique({
      include: {
        users: true,
      },
      where: {
        id: Number(params.id),
      },
    });
  }

  const home = await getHomeAndUsers();

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <div className="container h-full px-0 py-6">
      <div className="flex flex-col flex-wrap gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2">
              <Home size={22} /> {home.name}
            </CardTitle>
            <div className="flex h-5 gap-2 text-sm text-muted-foreground">
              Code: {home.code}
              <Separator orientation="vertical" />
              {`Total Expense: ${getResetDate(home.resetDayOfMonth).toLocaleDateString()}`}
            </div>
          </CardHeader>
          <CardContent>
            <Collapsible className="space-y-2">
              <CollapsibleTrigger asChild>
                <Button
                  className="w-full justify-between"
                  size="sm"
                  variant="outline"
                >
                  <h4 className="text-sm font-semibold">Liabilities</h4>
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                {home.users.map((user) => (
                  <div
                    className="rounded-md border px-4 py-3 font-mono text-sm"
                    key={user.id}
                  >
                    {user.name}
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          <Button asChild className="flex-1" size="sm" variant="outline">
            <Link href={`/home/${params.id}/expenses`} passHref>
              <Eye className="mr-1" size={18} /> Show Expenses
            </Link>
          </Button>
          <Button className="flex-1" size="sm">
            <CircleFadingPlus className="mr-1" size={18} /> Add Expense
          </Button>
        </div>
        <Card>
          <CardContent>
            <ExpenseTable data={[]} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
