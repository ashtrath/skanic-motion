import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical"
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical"
import {
    type JSXConvertersFunction,
    RichText as RichTextWithoutBlocks,
} from "@payloadcms/richtext-lexical/react"
import { TypographyJSXConverters } from "payload-lexical-typography/converters"

import { cn } from "@/lib/utils/cn"

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...TypographyJSXConverters,
})

type Props = {
    data: SerializedEditorState
    enableGutter?: boolean
    enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText({
    enableProse = true,
    enableGutter = true,
    className,
    ...props
}: Props) {
    return (
        <RichTextWithoutBlocks
            converters={jsxConverters}
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
