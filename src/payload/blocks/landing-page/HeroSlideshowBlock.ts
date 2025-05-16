import type { Block } from "payload"

export const HeroSlideshowBlock: Block = {
    slug: "hero-slideshow-block",
    interfaceName: "HeroSlideshowBlock",
    fields: [
        {
            name: "slides",
            label: "Project Slideshow",
            interfaceName: "ProjectSlides",
            type: "array",
            minRows: 2,
            maxRows: 5,
            fields: [
                {
                    name: "project",
                    label: "Project for Slideshow",
                    type: "relationship",
                    relationTo: "projects",
                    required: true,
                },
                {
                    name: "coverImage",
                    label: "Project's Cover Image",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                    filterOptions: {
                        or: [
                            { mimeType: { contains: "image" } },
                            { mimeType: { contains: "video" } },
                        ],
                    },
                },
            ],
        },
    ],
}
