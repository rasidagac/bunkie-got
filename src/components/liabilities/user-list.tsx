import { User } from "@prisma/client";

type UserWithExpenses = { expenses: { amount: number }[] } & User;

export default async function UserList({
  totalAmount,
  users,
}: {
  totalAmount: number;
  users: UserWithExpenses[];
}) {
  const userBalance = (user: UserWithExpenses) =>
    user.expenses?.reduce((acc, curr) => acc + curr.amount, 0) || 0;

  return users.map((user) => (
    <div
      className="flex justify-between rounded-md border px-4 py-3 font-mono text-sm"
      key={user.id}
    >
      <div>{user.name}</div>
      <div>{userBalance(user) - totalAmount / users.length}</div>
    </div>
  ));
}
