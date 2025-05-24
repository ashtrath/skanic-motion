import type { IconifyIcon } from "@iconify/types"
import Link from "next/link"
import type * as React from "react"

import { Button, type ButtonProps } from "@/components/ui/Button"
import { cn } from "@/lib/utils/cn"
import type { Page, Project } from "@/payload/payload-types"

type CMSLinkType = {
    appearance?: "inline" | ButtonProps["variant"]
    icon?: string | IconifyIcon
    effect?: ButtonProps["effect"]
    children?: React.ReactNode
    className?: string
    label?: string | null
    newTab?: boolean | null
    reference?: {
        relationTo: "pages" | "projects"
        value: Page | Project | string | number
    } | null
    size?: ButtonProps["size"] | null
    type?: "custom" | "reference" | null
    url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
    const {
        type,
        appearance = "inline",
        icon,
        effect,
        children,
        className,
        label,
        newTab,
        reference,
        size: sizeFromProps,
        url,
    } = props

    const href =
        type === "reference" && typeof reference?.value === "object" && reference.value.slug
            ? `${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${
                  reference.value.slug
              }`
            : url

    if (!href) return null

    const size = appearance === "link" ? null : sizeFromProps
    const newTabProps = newTab ? { rel: "noopener noreferrer", target: "_blank" } : {}

    /* Ensure we don't break any styles set by richText */
    if (appearance === "inline") {
        return (
            <Link className={cn(className)} href={href || url || ""} {...newTabProps}>
                {label && label}
                {children && children}
            </Link>
        )
    }

    return (
        <Button
            asChild
            size={size}
            variant={appearance}
            icon={icon}
            effect={effect}
            className={className}
        >
            <Link href={href || url || ""} {...newTabProps}>
                {label && label}
                {children && children}
            </Link>
        </Button>
    )
}
