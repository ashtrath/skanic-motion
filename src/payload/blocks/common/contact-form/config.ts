import type { Block } from "payload";

import { InlineLexicalField } from "@/payload/fields/inline-lexical";
import { LinkListBlock } from "../LinkListBlock";
import { RichTextBlock } from "../RichTextBlock";

export const ContactFormBlock: Block = {
    slug: "contact-form-block",
    interfaceName: "ContactFormBlock",
    fields: [
        {
            name: "eyebrow",
            type: "text",
        },
        InlineLexicalField({ name: "heading", label: "Heading", required: true }),
        {
            name: "sideContent",
            type: "array",
            fields: [
                {
                    name: "heading",
                    type: "text",
                    required: true,
                },
                {
                    name: "content",
                    type: "blocks",
                    blocks: [RichTextBlock, LinkListBlock],
                    maxRows: 1,
                },
            ],
            maxRows: 3,
            admin: {
                initCollapsed: true,
            },
        },
    ]
}
