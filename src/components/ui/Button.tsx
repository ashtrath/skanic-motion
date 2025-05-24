import { cva, type VariantProps } from "class-variance-authority"
import type { LucideIcon } from "lucide-react"
import type * as React from "react"
import { cn } from "@/lib/utils/cn"
import NestedSlot from "./NestedSlot"

const buttonVariants = cva(
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-display text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                destructive:
                    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 ",
                outline:
                    "border border-foreground bg-background shadow-xs hover:bg-foreground hover:text-background ",
                secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground ",
                link: "text-primary underline-offset-4 hover:underline",
            },
            effect: {
                expandIcon: "group relative gap-0",
                ringHover: "duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2",
                shine: "background-position_0s_ease relative overflow-hidden before:absolute before:inset-0 before:animate-shine before:rounded-[inherit] before:bg-[length:250%_250%,100%_100%] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-no-repeat",
                shineHover:
                    "relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[length:250%_250%,100%_100%] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0]",
                gooeyRight:
                    "before:-z-10 relative z-0 overflow-hidden from-white/40 duration-500 before:absolute before:inset-0 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r before:transition-transform before:duration-1000 hover:before:translate-x-[0%] hover:before:translate-y-[0%]",
                gooeyLeft:
                    "after:-z-10 relative z-0 overflow-hidden from-white/40 duration-500 after:absolute after:inset-0 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l after:transition-transform after:duration-1000 hover:after:translate-x-[0%] hover:after:translate-y-[0%]",
                underline:
                    "!no-underline relative after:absolute after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0",
                hoverUnderline:
                    "!no-underline relative after:absolute after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

export interface ButtonProps
    extends React.ComponentProps<"button">,
        VariantProps<typeof buttonVariants> {
    icon?: LucideIcon
    iconPlacement?: "left" | "right"
    asChild?: boolean
}

function Button({
    className,
    variant,
    effect,
    size,
    icon: Icon,
    iconPlacement = "right",
    asChild = false,
    ...props
}: ButtonProps) {
    return (
        <NestedSlot
            component={"button"}
            render={({ children }) => (
                <>
                    {Icon &&
                        iconPlacement === "left" &&
                        (effect === "expandIcon" ? (
                            <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-[translate,width,opacity,padding] duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pr-2 group-hover:opacity-100">
                                <Icon />
                            </div>
                        ) : (
                            <Icon />
                        ))}
                    <span>{children}</span>
                    {Icon &&
                        iconPlacement === "right" &&
                        (effect === "expandIcon" ? (
                            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-[translate,width,opacity,padding] duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
                                <Icon />
                            </div>
                        ) : (
                            <Icon />
                        ))}
                </>
            )}
            className={cn(buttonVariants({ variant, effect, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
