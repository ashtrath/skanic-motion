import type { CollectionConfig } from "payload"
import { SlugField } from "../fields/slug"

export const Categories: CollectionConfig<"categories"> = {
    slug: "categories",
    admin: {
        group: "Portfolio",
        useAsTitle: "name",
    },
    fields: [{ name: "name", type: "text", required: true }, SlugField("name")],
}
