import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'cva';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 tracking-[0.03em] whitespace-nowrap rounded-lg text-base ring-offset-background transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-background hover:bg-primary/90',
                secondary:
                    'border border-foreground font-medium bg-foreground text-background hover:bg-background hover:text-foreground',
                outline:
                    'border border-foreground font-medium bg-background text-foreground hover:bg-foreground hover:text-background',
            },
            size: {
                default: 'px-6 h-12 py-2.5',
                icon: 'size-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
