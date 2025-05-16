import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from "@payloadcms/plugin-seo/fields"
import type { GlobalConfig } from "payload"

import { RichTextBlock } from "../blocks/common/RichTextBlock"
import { HeroSlideshowBlock } from "../blocks/landing-page/HeroSlideshowBlock"

export const LandingPage: GlobalConfig<"landing-page"> = {
    slug: "landing-page",
    fields: [
        {
            type: "tabs",
            tabs: [
                {
                    label: "Content",
                    fields: [
                        {
                            name: "layout",
                            type: "blocks",
                            minRows: 1,
                            required: true,
                            blocks: [HeroSlideshowBlock, RichTextBlock],
                            admin: {
                                initCollapsed: true,
                            },
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
