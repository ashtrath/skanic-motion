import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical"
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import {
    type JSXConvertersFunction,
    RichText as PayloadRichText,
} from "@payloadcms/richtext-lexical/react"
import type React from "react"

import { cn } from "@/lib/utils/cn"

const inlineJsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    paragraph: ({ node, nodesToJSX }) => {
        return <>{nodesToJSX({ nodes: node.children })}</>
    },
    heading: ({ node, nodesToJSX }) => {
        return <>{nodesToJSX({ nodes: node.children })}</>
    },
    linebreak: () => <></>,
})

interface RichTextProps extends React.ComponentProps<"div"> {
    data: SerializedEditorState
    enableGutter?: boolean
    enableProse?: boolean
    inline?: boolean
}

export default function RichText({
    enableProse = true,
    enableGutter = true,
    inline = false,
    className,
    ...props
}: RichTextProps) {
    if (!props.data) return null

    return (
        <PayloadRichText
            converters={inline ? inlineJsxConverters : undefined}
            disableContainer={inline}
            className={cn(
                {
                    container: enableGutter,
                    "max-w-none": !enableGutter,
                    "prose md:prose-md mx-auto": enableProse,
                },
                className,
            )}
            {...props}
        />
    )
}
