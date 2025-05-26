import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical"
import {
    IS_BOLD,
    IS_CODE,
    IS_ITALIC,
    IS_STRIKETHROUGH,
    IS_SUBSCRIPT,
    IS_SUPERSCRIPT,
    IS_UNDERLINE,
    type SerializedEditorState,
    type SerializedTextNode,
} from "@payloadcms/richtext-lexical/lexical"
import {
    type JSXConverters,
    type JSXConvertersFunction,
    RichText as PayloadRichText,
} from "@payloadcms/richtext-lexical/react"
import type * as React from "react"

import { type ColorStateKeys, colorState } from "@/lib/colorState"
import { cn } from "@/lib/utils/cn"

const textStateConverters: JSXConverters<SerializedTextNode> = {
    text: ({ node }: { node: SerializedTextNode }) => {
        const styles: React.CSSProperties = {}

        if (node.$) {
            Object.entries(colorState).forEach(([stateKey, stateValues]) => {
                const stateValue = node.$ && (node.$[stateKey] as ColorStateKeys)

                if (stateValue && stateValues[stateValue]) {
                    Object.assign(styles, stateValues[stateValue].css)
                }
            })
        }

        const formatters: Record<number, (element: React.ReactElement) => React.ReactElement> = {
            [IS_BOLD]: (el) => <strong>{el}</strong>,
            [IS_ITALIC]: (el) => <em>{el}</em>,
            [IS_STRIKETHROUGH]: (el) => (
                <span style={{ textDecoration: "line-through" }}>{el}</span>
            ),
            [IS_UNDERLINE]: (el) => <span style={{ textDecoration: "underline" }}>{el}</span>,
            [IS_CODE]: (el) => <code>{el}</code>,
            [IS_SUBSCRIPT]: (el) => <sub>{el}</sub>,
            [IS_SUPERSCRIPT]: (el) => <sup>{el}</sup>,
        }

        let textElement = <span style={styles}>{node.text}</span>

        Object.entries(formatters).forEach(([formatFlag, formatter]) => {
            if (node.format & Number(formatFlag)) {
                textElement = formatter(textElement)
            }
        })

        return textElement
    },
}

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...textStateConverters,
})

const inlineJsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    ...textStateConverters,
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
            converters={inline ? inlineJsxConverters : jsxConverters}
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
