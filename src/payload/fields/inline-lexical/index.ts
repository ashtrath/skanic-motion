import type { RichTextField } from "payload"

import { inlineEditor } from "@/payload/config/editor"

export const InlineLexicalField = (
    overrides?: Omit<RichTextField, "editor" | "type">,
): RichTextField => {
    return {
        name: "text",
        label: "Text",
        ...overrides,
        type: "richText",
        editor: inlineEditor,
        admin: {
            ...(overrides?.admin || {}),
            components: {
                Field: "@/payload/fields/inline-lexical/InlineLexicalComponent#InlineLexicalComponent",
            },
        },
    }
}
