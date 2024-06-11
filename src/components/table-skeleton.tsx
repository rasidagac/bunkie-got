import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonTable({ rowNumber = 2 }: { rowNumber?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rowNumber }).map((_, i) => (
        <Skeleton className="h-10 w-full rounded" key={i} />
      ))}
    </div>
  );
}
