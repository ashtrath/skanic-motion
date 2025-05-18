import type { ArrayField, Field } from "payload"
import deepMerge from "@/lib/utils/deepMerge"
import { type LinkAppearances, LinkField } from "."

type LinkGroupType = (options?: {
    appearances?: LinkAppearances[] | false
    overrides?: Partial<ArrayField>
}) => Field

export const LinkGroupField: LinkGroupType = ({ appearances, overrides = {} } = {}) => {
    const generatedLinkGroup: Field = {
        name: "links",
        type: "array",
        fields: [
            LinkField({
                appearances,
            }),
        ],
        admin: {
            initCollapsed: true,
        },
    }

    return deepMerge(generatedLinkGroup, overrides)
}
