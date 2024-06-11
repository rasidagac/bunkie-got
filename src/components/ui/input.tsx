import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  loading?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, loading, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          disabled={loading || props.disabled}
          ref={ref}
          type={type}
          {...props}
        />
        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <LoaderCircle className="animate-spin" />
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
