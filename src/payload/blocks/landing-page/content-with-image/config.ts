import type { Block } from "payload"

import { InlineLexicalField } from "@/payload/fields/inline-lexical"
import { LinkField } from "@/payload/fields/link"

export const ContentWithImageBlock: Block = {
    slug: "content-with-image-block",
    interfaceName: "ContentWithImageBlock",
    fields: [
        {
            name: "eyebrow",
            type: "text",
        },
        InlineLexicalField({ name: "heading", label: "Heading", required: true }),
        {
            name: "content",
            type: "richText",
            required: true,
        },
        {
            type: "row",
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                    admin: {
                        width: "50%",
                    },
                },
                {
                    name: "imagePosition",
                    enumName: "enum_content_with_image_image_position",
                    type: "select",
                    options: [
                        {
                            label: "Right",
                            value: "right",
                        },
                        {
                            label: "Left",
                            value: "left",
                        },
                    ],
                    defaultValue: "left",
                    required: true,
                    admin: {
                        width: "50%",
                    },
                },
            ],
        },
        {
            type: "collapsible",
            label: "CTA Button",
            admin: {
                initCollapsed: true,
            },
            fields: [
                LinkField({
                    appearances: false,
                    overrides: {
                        name: "ctaButton",
                        label: false,
                    },
                }),
            ],
        },
    ],
}
