import {
    BoldFeature,
    ItalicFeature,
    lexicalEditor,
    ParagraphFeature,
    UnderlineFeature,
} from "@payloadcms/richtext-lexical"

export const editor = lexicalEditor({
    features: [
        ParagraphFeature(),
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
    ],
})
