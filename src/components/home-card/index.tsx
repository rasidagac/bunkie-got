import { getTotalExpensesAmountByHomeId } from "@/app/actions/expense";
import { getHomeById } from "@/app/actions/home";
import { getUsersByHomeId } from "@/app/actions/user";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown, Home as HomeIcon } from "lucide-react";

import { HomeCode } from "./home-code";

export async function HomeCard({ homeId }: { homeId: string }) {
  const home = await getHomeById(Number(homeId));
  const totalAmount = await getTotalExpensesAmountByHomeId(Number(homeId));
  const users = await getUsersByHomeId(Number(homeId));

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <HomeIcon size={18} /> {home.name}
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <HomeCode code={home.code} />
        </div>
        <div>{`Total Expense: ${totalAmount._sum.amount}`}</div>
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
            {users.map((user) => (
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
  );
}
