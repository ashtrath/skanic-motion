import {
    FixedToolbarFeature,
    ItalicFeature,
    lexicalEditor,
    UnderlineFeature,
} from "@payloadcms/richtext-lexical"
import type { Block } from "payload"
import { TextColorFeature } from "payload-lexical-typography"

import { ColorPickerField } from "@/payload/fields/color-picker"
import { LinkField } from "@/payload/fields/link"

export const CallToActionBlock: Block = {
    slug: "call-to-action-block",
    interfaceName: "CallToActionBlock",
    fields: [
        {
            name: "text",
            type: "richText",
            editor: lexicalEditor({
                features: () => [
                    FixedToolbarFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                    TextColorFeature({
                        colors: [
                            "oklch(0.37 0.09 263.09)",
                            "oklch(0.62 0.21 25.75)",
                            "oklch(0.99 0.01 17.25)",
                            "oklch(0.19 0 0)",
                        ],
                        hideAttribution: true,
                    }),
                ],
            }),
            required: true,
        },
        {
            name: "alignment",
            type: "select",
            options: [
                {
                    label: "Left",
                    value: "left",
                },
                {
                    label: "Center",
                    value: "center",
                },
                {
                    label: "Right",
                    value: "right",
                },
            ],
            defaultValue: "left",
            required: true,
        },
        {
            type: "collapsible",
            label: "Background Image",
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: "image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "enableSeparator",
                    type: "checkbox",
                    label: "Show Separator?",
                    defaultValue: true,
                },
                {
                    type: "row",
                    fields: [
                        ColorPickerField({
                            name: "overlayColor",
                            label: "Overlay Color",
                            defaultValue: "#000",
                            required: true,
                        }),
                        {
                            name: "colorOpacity",
                            type: "number",
                            label: "Opacity",
                            min: 0,
                            max: 100,
                            defaultValue: 20,
                            required: true,
                        },
                    ],
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
