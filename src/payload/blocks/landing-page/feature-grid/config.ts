import type { Block } from "payload"

import { InlineLexicalField } from "@/payload/fields/inline-lexical"
import { LinkField } from "@/payload/fields/link"

export const FeatureGridBlock: Block = {
    slug: "feature-grid-block",
    interfaceName: "FeatureGridBlock",
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
