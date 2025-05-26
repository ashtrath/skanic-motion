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

import { colorState } from "@/lib/colorState"

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
            state: colorState,
        }),
    ],
})
