import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from "@payloadcms/plugin-seo/fields"
import type { CollectionConfig } from "payload"
import { RichTextBlock } from "../blocks/common/RichTextBlock"
import { SlugField } from "../fields/Slug"

export const Projects: CollectionConfig<"projects"> = {
    slug: "projects",
    admin: {
        group: "Portfolio",
        useAsTitle: "title",
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        SlugField(),
        {
            type: "tabs",
            tabs: [
                {
                    label: "Details",
                    fields: [
                        {
                            name: "projectDate",
                            type: "date",
                            required: true,
                        },
                        {
                            name: "projectType",
                            type: "relationship",
                            relationTo: "categories",
                            hasMany: true,
                            required: true,
                            index: true,
                        },
                        {
                            name: "client",
                            type: "relationship",
                            relationTo: "clients",
                            required: true,
                        },
                    ],
                },
                {
                    label: "Content",
                    fields: [
                        {
                            name: "thumbnail",
                            label: "Project Thumbnail",
                            type: "upload",
                            relationTo: "media",
                        },
                        {
                            name: "layout",
                            type: "blocks",
                            label: "Project Page Content",
                            minRows: 1,
                            blocks: [
                                RichTextBlock,
                            ],
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
