import * as React from "react";
import { cn } from "../utils";
import { Slot } from "@radix-ui/react-slot";

export const Button = React.forwardRef(
  ({ className, variant = "default", asChild = false, size = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default:
        "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900",
      outline:
        "border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
      ghost:
        "hover:bg-slate-100 dark:hover:bg-slate-800",
    };

    const Comp =  asChild ? Slot : "button";

    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-8 px-3",
      lg: "h-12 px-8 text-base",
      icon: "h-10 w-10",
    };

    return (
      <Comp
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";