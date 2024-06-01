import { Home } from 'lucide-react';

import ExpenseTable from '@/components/expense-table';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import prisma from '@/lib/prisma';
import { getResetDate } from '@/lib/utils';

export default async function Page({ params }: { params: { code: string } }) {
  async function getHome() {
    'use server';

    return prisma.home.findUnique({
      where: {
        code: params.code,
      },
    });
  }

  const home = await getHome();

  if (!home) {
    return <div>Home not found</div>;
  }

  return (
    <div className="container h-full px-0 py-6">
      <div className="flex flex-col flex-wrap gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex gap-2">
              <Home size={22} /> {home.name}
            </CardTitle>
            <div className="flex h-5 gap-2 text-sm text-muted-foreground ">
              Code: {home.code}
              <Separator orientation="vertical" />
              {`Reset Day: ${getResetDate(home.resetDayOfMonth).toLocaleDateString()}`}
            </div>
          </CardHeader>
        </Card>
        <ExpenseTable />
      </div>
    </div>
  );
}
