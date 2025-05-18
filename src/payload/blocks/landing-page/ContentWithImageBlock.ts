import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical"
import type { Block } from "payload"
import { TextColorFeature } from "payload-lexical-typography"

import { LinkGroupField } from "@/payload/fields/link/LinkGroup"

export const ContentWithImageBlock: Block = {
    slug: "content-with-image-block",
    interfaceName: "ContentWithImageBlock",
    fields: [
        {
            name: "eyebrow",
            type: "text",
        },
        {
            name: "content",
            type: "richText",
            editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ["h2"] }),
                    TextColorFeature({
                        colors: ["oklch(0.37 0.09 263.09)", "oklch(0.62 0.21 25.75)"],
                        hideAttribution: true,
                    }),
                ],
            }),
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
        LinkGroupField({
            appearances: false,
            overrides: {
                name: "ctaButton",
                label: "CTA Button",
                labels: { plural: "Buttons", singular: "Button" },
                maxRows: 1,
            },
        }),
    ],
}
