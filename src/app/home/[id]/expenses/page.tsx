import ExpenseTable from "@/components/expense-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">Monthly Expenses</CardTitle>
        <CardDescription>Recent transactions from your home.</CardDescription>
      </CardHeader>
      <CardContent>
        <ExpenseTable data={[]} />
      </CardContent>
    </Card>
  );
}
