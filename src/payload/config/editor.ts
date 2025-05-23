import {
    BoldFeature,
    FixedToolbarFeature,
    InlineToolbarFeature,
    ItalicFeature,
    lexicalEditor,
    ParagraphFeature,
    StrikethroughFeature,
    TextStateFeature,
    UnderlineFeature,
} from "@payloadcms/richtext-lexical"
import type { Config } from "payload"

export const editor: Config["editor"] = lexicalEditor({
    features: [
        FixedToolbarFeature(),
        ParagraphFeature(),
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
        StrikethroughFeature(),
    ],
})

export const inlineEditor: Config["editor"] = lexicalEditor({
    features: [
        InlineToolbarFeature(),
        BoldFeature(),
        ItalicFeature(),
        UnderlineFeature(),
        StrikethroughFeature(),
        TextStateFeature({
            state: {
                color: {
                    primary: {
                        label: "Primary",
                        css: {
                            color: "oklch(0.37 0.09 263.09)",
                        },
                    },
                    accent: {
                        label: "Accent",
                        css: {
                            color: "oklch(0.62 0.21 25.75)",
                        },
                    },
                },
            },
        }),
    ],
})
