import type * as React from "react"

import { cn } from "@/lib/utils/cn"

export default function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-9 w-full min-w-0 border-input border-b bg-transparent py-3 font-medium text-base outline-none transition-[color] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-lg",
                "focus-visible:border-foreground focus-visible:ring-0 focus-visible:ring-ring/50",
                "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
                className,
            )}
            {...props}
        />
    )
}
