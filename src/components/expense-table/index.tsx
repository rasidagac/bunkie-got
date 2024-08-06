import { getExpensesByHomeId } from "@/app/actions/expense";
import { DataTable } from "@/components/ui/data-table";

import { columns, ExpenseWithUser } from "./columns";

export default async function ExpenseTable({ homeId }: { homeId: string }) {
  const expenses = await getExpensesByHomeId(Number(homeId));

  return <DataTable<ExpenseWithUser> columns={columns} data={expenses} />;
}
