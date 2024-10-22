import { getExpensesByHomeId } from "@/app/actions/expense";
import ExpenseTable from "@/components/expense-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page(
  props: Readonly<{ params: Promise<{ id: string }> }>,
) {
  const params = await props.params;
  const expenses = await getExpensesByHomeId(Number(params.id));

  if (!expenses) {
    return <div>No expenses found.</div>;
  }

  return (
    <>
      <CardHeader>
        <CardTitle className="flex gap-2">Monthly Expenses</CardTitle>
        <CardDescription>Recent transactions from your home.</CardDescription>
      </CardHeader>
      <Card>
        <CardContent className="pt-6">
          <ExpenseTable homeId={params.id} />
        </CardContent>
      </Card>
    </>
  );
}
