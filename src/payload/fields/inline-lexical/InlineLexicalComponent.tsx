"use client"

import {
    BoldFeatureClient,
    InlineToolbarFeatureClient,
    ItalicFeatureClient,
    RichTextField,
    StrikethroughFeatureClient,
    TextStateFeatureClient,
    UnderlineFeatureClient,
} from "@payloadcms/richtext-lexical/client"
import { useField } from "@payloadcms/ui"
import * as React from "react"

import "./style.scss"
import { colorState } from "@/lib/colorState"

type RichTextFieldProps = React.ComponentProps<typeof RichTextField>
type RichTextValue = {
    root: {
        type: string
        children: {
            type: string
            version: number
            [k: string]: unknown
        }[]
        direction: ("ltr" | "rtl") | null
        format: "left" | "start" | "center" | "right" | "end" | "justify" | ""
        indent: number
        version: number
    }
    [k: string]: unknown
}

export const InlineLexicalComponent = ({
    field,
    path,
    schemaPath,
}: {
    field: RichTextFieldProps["field"]
    path: RichTextFieldProps["path"]
    schemaPath: string
}) => {
    const clientFeatures = {
        toolbarInline: {
            clientFeatureProps: {
                featureKey: "toolbarInline",
                order: 0,
            },
            clientFeatureProvider: InlineToolbarFeatureClient,
        },
        bold: {
            clientFeatureProps: {
                featureKey: "bold",
                order: 1,
            },
            clientFeatureProvider: BoldFeatureClient,
        },
        italic: {
            clientFeatureProps: {
                featureKey: "italic",
                order: 2,
            },
            clientFeatureProvider: ItalicFeatureClient,
        },
        strikethrough: {
            clientFeatureProps: {
                featureKey: "strikethrough",
                order: 3,
            },
            clientFeatureProvider: StrikethroughFeatureClient,
        },
        underline: {
            clientFeatureProps: {
                featureKey: "underline",
                order: 4,
            },
            clientFeatureProvider: UnderlineFeatureClient,
        },
        textState: {
            clientFeatureProps: {
                featureKey: "textState",
                order: 5,
                state: colorState,
            },
            clientFeatureProvider: TextStateFeatureClient,
        },
    }

    const { value, setValue } = useField<RichTextValue>({ path })

    React.useEffect(() => {
        const children = value?.root?.children

        if (children && children.length > 1) {
            setValue({
                root: {
                    ...(value.root ?? {}),
                    children: [children[0]],
                },
            })
        }
    }, [value])

    return (
        <div className="field-type inline-rich-text">
            <RichTextField
                path={path}
                schemaPath={schemaPath}
                initialLexicalFormState={{}}
                field={field}
                admin={{ hideGutter: true, hideInsertParagraphAtEnd: true }}
                permissions={true}
                featureClientSchemaMap={{}}
                featureClientImportMap={{}}
                clientFeatures={clientFeatures}
                lexicalEditorConfig={undefined}
            />
        </div>
    )
}
