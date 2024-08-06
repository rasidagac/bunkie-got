import ExpenseTable from "@/components/expense-table";
import ExpensesDrawer from "@/components/expenses-drawer";
import { SkeletonTable } from "@/components/table-skeleton";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <ExpensesDrawer>
      <Suspense fallback={<SkeletonTable rowNumber={4} />}>
        <ExpenseTable homeId={params.id} />
      </Suspense>
    </ExpensesDrawer>
  );
}
