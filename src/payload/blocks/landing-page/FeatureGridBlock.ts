import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical"
import type { Block } from "payload"
import { TextColorFeature } from "payload-lexical-typography"
import { LinkField } from "@/payload/fields/link"

export const FeatureGridBlock: Block = {
    slug: "feature-grid-block",
    interfaceName: "FeatureGridBlock",
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
            name: "services",
            type: "relationship",
            relationTo: "services",
            hasMany: true,
            minRows: 1,
            maxRows: 6,
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
