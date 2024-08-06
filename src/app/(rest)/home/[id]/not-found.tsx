import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Home could not be found :(</h2>
      <p>
        Apparently you are not joined in this house, or something went wrong.
      </p>
      <Button asChild>
        <Link href="/" passHref>
          <Home className="mr-2" size={16} /> Return Home
        </Link>
      </Button>
    </div>
  );
}
