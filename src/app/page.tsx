import { currentUser } from '@clerk/nextjs/server';
import { Home as HomeIcon, Merge } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="container mx-auto h-full content-center text-center">
      <h1 className="mb-2">Hi {user?.fullName} welcome to BunkieGot!</h1>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="w-full">
          <h4>Join existing Home</h4>
          <Merge className="mr-2 h-4 w-4" />
        </Button>
        <Button size="lg" className="w-full">
          <Link href="./home/create" className="flex items-center gap-1">
            <h4>Create a new Home</h4>
            <HomeIcon className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
