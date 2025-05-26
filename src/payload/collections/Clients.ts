import type { CollectionConfig } from "payload"

export const Clients: CollectionConfig<"clients"> = {
    slug: "clients",
    admin: {
        useAsTitle: "name",
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "logo",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "website",
            type: "text",
            validate: (value = "") =>
                (value && (URL.canParse(value) || "Please provide valid URL.")) || true,
        },
    ],
}
