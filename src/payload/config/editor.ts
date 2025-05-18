import {
    BoldFeature,
    FixedToolbarFeature,
    InlineToolbarFeature,
    ItalicFeature,
    lexicalEditor,
    ParagraphFeature,
    UnderlineFeature,
} from "@payloadcms/richtext-lexical"
import type { Config } from "payload"

export const editor: Config["editor"] = lexicalEditor({
    features: [
        FixedToolbarFeature(),
        InlineToolbarFeature(),
        ParagraphFeature(),
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
    ],
})
