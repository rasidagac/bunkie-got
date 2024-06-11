"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function HomeCode({ code }: { code: string }) {
  const [open, setOpen] = useState(false);

  const handleClickCopy = () => {
    navigator.clipboard.writeText(code).then(() => setOpen(true));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (open) setOpen(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <>
      <TooltipProvider>
        <Tooltip open={open}>
          <TooltipTrigger
            className="flex items-center gap-1"
            onClick={handleClickCopy}
          >
            Code: {code}
            <Copy size={14} />
          </TooltipTrigger>
          <TooltipContent>Copied</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
