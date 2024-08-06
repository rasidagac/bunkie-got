"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useMediaQuery } from "@/hooks";
import { ChevronsUpDown } from "lucide-react";
import React from "react";

export default function Liabilities({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <div className="space-y-2">{children}</div>;
  }

  return (
    <Collapsible className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button className="w-full justify-between" size="sm" variant="outline">
          <h4 className="text-sm font-semibold">Liabilities</h4>
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
    </Collapsible>
  );
}
