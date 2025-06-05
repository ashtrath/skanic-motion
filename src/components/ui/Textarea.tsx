import type * as React from "react"

import { cn } from "@/lib/utils/cn"

export default function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "field-sizing-content flex min-h-16 w-full border-b-2 border-input bg-transparent py-3 text-base outline-none transition-[color] placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-lg",
                "focus-visible:border-foreground focus-visible:ring-0 focus-visible:ring-ring/50",
                className,
            )}
            {...props}
        />
    )
}
