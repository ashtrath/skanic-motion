"use client"

import type { IconName } from "lucide-react/dynamic"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"
import * as React from "react"

const icons = Object.keys(dynamicIconImports) as IconName[]

type ReactComponent = React.FC<{ className?: string }>
const icons_components = {} as Record<IconName, ReactComponent>

for (const name of icons) {
    const NewIcon = dynamic(dynamicIconImports[name], {
        ssr: false,
    }) as ReactComponent
    icons_components[name] = NewIcon
}

type DynamicIconProps = {
    name: IconName
    className?: string
}

const DynamicIcon = React.memo(({ name, ...props }: DynamicIconProps) => {
    const Icon = icons_components[name]

    if (!Icon) return null

    return <Icon {...props} />
})

export default DynamicIcon
