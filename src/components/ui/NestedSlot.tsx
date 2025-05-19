import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

interface NestedSlotProps extends React.HTMLAttributes<HTMLElement> {
    component: React.ElementType
    render: React.ElementType<{ children: React.ReactNode }>
    children?: React.ReactNode
    asChild?: boolean
}

export default function NestedSlot({
    component: Component,
    render: Wrapper,
    asChild = false,
    children,
    ...props
}: NestedSlotProps) {
    if (asChild && React.isValidElement(children)) {
        const element = children as React.ReactElement<{
            children: React.ReactNode
            asChild?: boolean
        }>

        return (
            <Slot {...props}>
                {React.cloneElement(
                    element,
                    element.props,
                    element.props.asChild ? (
                        <NestedSlot
                            component={Component}
                            render={Wrapper}
                            asChild={Boolean(element.props.asChild)}
                        >
                            {element.props.children}
                        </NestedSlot>
                    ) : (
                        <Wrapper>{element.props.children}</Wrapper>
                    ),
                )}
            </Slot>
        )
    }
    return (
        <Component {...props}>
            <Wrapper>{children}</Wrapper>
        </Component>
    )
}
