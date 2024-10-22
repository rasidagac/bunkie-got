import ExpenseTable from "@/components/expense-table";
import ExpensesDrawer from "@/components/expenses-drawer";
import { SkeletonTable } from "@/components/table-skeleton";
import { Suspense } from "react";

export default async function Page(
  props: Readonly<{ params: Promise<{ id: string }> }>,
) {
  const params = await props.params;
  return (
    <ExpensesDrawer>
      <Suspense fallback={<SkeletonTable rowNumber={4} />}>
        <ExpenseTable homeId={params.id} />
      </Suspense>
    </ExpensesDrawer>
  );
}
