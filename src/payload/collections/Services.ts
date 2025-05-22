import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from "@payloadcms/plugin-seo/fields"
import type { CollectionConfig } from "payload"

import { RichTextBlock } from "../blocks/common/RichTextBlock"
import { IconPickerField } from "../fields/icon-picker"
import { SlugField } from "../fields/slug"

export const Services: CollectionConfig<"services"> = {
    slug: "services",
    admin: {
        useAsTitle: "title",
    },
    defaultPopulate: {
        title: true,
        slug: true,
        description: true,
        meta: {
            image: true,
            description: true,
        },
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        ...SlugField(),
        {
            type: "tabs",
            tabs: [
                {
                    label: "Details",
                    fields: [
                        IconPickerField(),
                        {
                            name: "description",
                            type: "textarea",
                            required: true,
                        },
                        {
                            name: "keyPoints",
                            type: "array",
                            labels: {
                                plural: "Points",
                                singular: "Point",
                            },
                            admin: {
                                initCollapsed: true,
                            },
                            fields: [
                                {
                                    name: "point",
                                    type: "text",
                                    required: true,
                                },
                            ],
                            maxRows: 4,
                        },
                    ],
                },
                {
                    label: "Content",
                    fields: [
                        {
                            name: "layout",
                            type: "blocks",
                            label: "Service Page Content",
                            minRows: 1,
                            blocks: [RichTextBlock],
                        },
                    ],
                },
                {
                    name: "meta",
                    label: "SEO",
                    fields: [
                        OverviewField({
                            titlePath: "meta.title",
                            descriptionPath: "meta.description",
                            imagePath: "meta.image",
                        }),
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaImageField({
                            relationTo: "media",
                        }),
                        MetaDescriptionField({}),
                        PreviewField({
                            hasGenerateFn: true,
                            titlePath: "meta.title",
                            descriptionPath: "meta.description",
                        }),
                    ],
                },
            ],
        },
    ],
}
