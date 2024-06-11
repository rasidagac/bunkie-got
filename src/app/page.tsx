import JoinHome from "@/components/join-home";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { currentUser } from "@clerk/nextjs/server";
import { Home as HomeIcon, Merge } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="container mx-auto h-full content-center text-center">
      <h1 className="mb-2">Hi {user?.fullName} welcome to BunkieGot!</h1>
      <div className="flex flex-wrap gap-4">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full" size="lg">
              <h4>Join existing Home</h4>
              <Merge className="mr-2 h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <JoinHome />
          </DrawerContent>
        </Drawer>
        <Button className="w-full" size="lg">
          <Link className="flex items-center gap-1" href="./home/create">
            <h4>Create a new Home</h4>
            <HomeIcon className="mr-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
