import type { Block } from "payload"
import { LinkGroupField } from "@/payload/fields/link/LinkGroup"

export const LinkListBlock: Block = {
    slug: "link-list-block",
    fields: [
        LinkGroupField({
            appearances: false,
            overrides: {
                minRows: 1,
                required: true,
            },
        }),
    ],
}
