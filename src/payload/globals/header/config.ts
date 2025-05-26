import type { GlobalConfig } from "payload"

import { LinkListBlock } from "@/payload/blocks/common/LinkListBlock"
import { RichTextBlock } from "@/payload/blocks/common/RichTextBlock"
import { LinkGroupField } from "@/payload/fields/link/LinkGroup"

export const Header: GlobalConfig<"header"> = {
    slug: "header",
    access: {
        read: () => true,
    },
    fields: [
        LinkGroupField({ appearances: false, overrides: { name: "navItems" } }),
        {
            name: "sideContent",
            type: "array",
            fields: [
                {
                    name: "heading",
                    type: "text",
                    required: true,
                },
                {
                    name: "content",
                    type: "blocks",
                    blocks: [RichTextBlock, LinkListBlock],
                    maxRows: 1,
                },
            ],
            maxRows: 3,
            admin: {
                initCollapsed: true,
            },
        },
    ],
}
