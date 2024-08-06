import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useDialogAsRoute(latency = 500) {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!open) {
      timeout = setTimeout(() => router.back(), latency);
    }

    return () => clearTimeout(timeout);
  }, [latency, open, router]);

  return { open, setOpen };
}
