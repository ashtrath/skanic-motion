import type { CollectionConfig } from "payload"

export const FormSubmission: CollectionConfig<"form-submission"> = {
    slug: "form-submission",
    access: {
        read: () => true,
        create: ({ req: { user } }) => !user,
        update: () => false,
        delete: () => false,
    },
    admin: {
        group: "Portfolio",
        useAsTitle: "subject",
        defaultColumns: ["subject", "name", "email","createdAt"],
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        },
        {
            name: "email",
            type: "email",
            required: true
        },
        {
            name: "subject",
            type: "text",
            required: true
        },
        {
            name: "message",
            type: "textarea",
        }
    ],
}
