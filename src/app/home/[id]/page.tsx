import { getHouseholdItemsByHomeId } from "@/app/actions/household-item";
import { getUserByHomeId } from "@/app/actions/user";
import { HomeCard } from "@/components/home-card";
import { HouseholdTable } from "@/components/household-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { CircleFadingPlus, Eye } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Loading from "./loading";

export default async function Page({ params }: { params: { id: string } }) {
  const householdItems = await getHouseholdItemsByHomeId(Number(params.id));
  const user = await currentUser();

  const isHomeHasUser = await getUserByHomeId(
    user?.id as string,
    Number(params.id),
  );

  if (!isHomeHasUser) {
    return notFound();
  }

  return (
    <div className="flex flex-col flex-wrap gap-4">
      <HomeCard homeId={params.id} />
      <div className="flex flex-wrap gap-2">
        <Button asChild className="flex-1" size="sm" variant="outline">
          <Link href={`/home/${params.id}/expense`} passHref>
            <Eye className="mr-1" size={18} /> Show Expenses
          </Link>
        </Button>
        <Button asChild className="flex-1" size="sm">
          <Link href={`/home/${params.id}/expense/create`} passHref>
            <CircleFadingPlus className="mr-1" size={18} /> Add Expense
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2">Household Items</CardTitle>
        </CardHeader>
        <CardContent>
          <HouseholdTable data={householdItems} />
        </CardContent>
      </Card>
    </div>
  );
}
