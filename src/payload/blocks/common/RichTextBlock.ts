import type { Block } from "payload"

export const RichTextBlock: Block = {
    slug: "rich-text-block",
    interfaceName: "RichTextBlock",
    fields: [
        {
            name: "text",
            label: false,
            type: "richText",
            required: true,
        },
    ],
}
