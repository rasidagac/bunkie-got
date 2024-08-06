import { getTotalExpensesAmountByHomeId } from "@/app/actions/expense";
import { getHomeById } from "@/app/actions/home";
import { getUsersByHomeId } from "@/app/actions/user";
import { Liabilities } from "@/components/liabilities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home as HomeIcon } from "lucide-react";

import { HomeCode } from "./home-code";

export async function HomeCard({ homeId }: { homeId: string }) {
  const home = await getHomeById(Number(homeId));
  const totalAmount = await getTotalExpensesAmountByHomeId(Number(homeId));
  const users = await getUsersByHomeId(Number(homeId));

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <HomeIcon size={18} /> {home.name}
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <HomeCode code={home.code} />
        </div>
        <div>{`Total Expense: ${totalAmount}`}</div>
      </CardHeader>
      <CardContent>
        <Liabilities totalAmount={totalAmount} users={users} />
      </CardContent>
    </Card>
  );
}
