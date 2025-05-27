import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from "@payloadcms/plugin-seo/fields"
import type { GlobalConfig } from "payload"

import { CallToActionBlock } from "@/payload/blocks/landing-page/call-to-action/config"
import { ContentWithImageBlock } from "@/payload/blocks/landing-page/content-with-image/config"
import { HeroSlideshowBlock } from "@/payload/blocks/landing-page/hero-slideshow/config"
import { ServicesGridBlock } from "@/payload/blocks/landing-page/services-grid/config"
import { revalidateLandingPage } from "./hooks/revalidateLandingPage"
import { ClientsGridBlock } from "@/payload/blocks/landing-page/clients-grid/config"

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
                                ServicesGridBlock,
                                ClientsGridBlock,
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
    hooks: {
        afterChange: [revalidateLandingPage],
    },
}
