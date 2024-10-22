import { HomeCard } from "@/components/home-card";
import { HouseholdTable } from "@/components/household-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserByHomeId } from "@actions/user";
import { currentUser } from "@clerk/nextjs/server";
import { BadgePlus, CircleFadingPlus, Eye } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(
  props: Readonly<{ params: Promise<{ id: string }> }>,
) {
  const params = await props.params;
  const currentUserData = await currentUser();

  const isHomeBelongsToUser = await getUserByHomeId(
    currentUserData?.id as string,
    Number(params.id),
  );

  if (!isHomeBelongsToUser) {
    return notFound();
  }

  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <HomeCard homeId={params.id} />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Button asChild className="flex-1" variant="outline">
            <Link href={`/home/${params.id}/expense`} passHref>
              <Eye className="mr-1" size={18} /> Show Expenses
            </Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href={`/home/${params.id}/expense/create`} passHref>
              <CircleFadingPlus className="mr-1" size={18} /> Add Expense
            </Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2">
              <div>Household Items</div>
              <Button size="sm" type="button">
                Add <BadgePlus className="ml-1" size={18} />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HouseholdTable homeId={Number(params.id)} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
