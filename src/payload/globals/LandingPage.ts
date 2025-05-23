import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from "@payloadcms/plugin-seo/fields"
import type { GlobalConfig } from "payload"

import { RichTextBlock } from "../blocks/common/RichTextBlock"
import { CallToActionBlock } from "../blocks/landing-page/CallToActionBlock"
import { ContentWithImageBlock } from "../blocks/landing-page/ContentWithImageBlock"
import { FeatureGridBlock } from "../blocks/landing-page/FeatureGridBlock"
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
                            labels: {
                                plural: "Sections",
                                singular: "Section",
                            },
                            type: "blocks",
                            minRows: 1,
                            required: true,
                            blocks: [
                                HeroSlideshowBlock,
                                ContentWithImageBlock,
                                CallToActionBlock,
                                FeatureGridBlock,
                                RichTextBlock,
                            ],
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
