import { InlineLexicalField } from "@/payload/fields/inline-lexical";
import { Block } from "payload";

export const ClientsGridBlock: Block = {
    slug: "clients-grid-block",
    interfaceName: "ClientsGridBlock",
    fields: [
        {
            name: "eyebrow",
            type: "text",
        },
        InlineLexicalField({ name: "heading", label: "Heading", required: true }),
        {
            name: "content",
            type: "richText",
            required: true,
        },
        {
            name: "clients",
            type:"relationship",
            relationTo: "clients",
            hasMany: true,
            minRows: 2,
            maxRows: 16,
        },
    ],
}
