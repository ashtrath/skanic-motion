import type { TextField } from "payload"
import useSlug from "./useSlug"

export const SlugField = (
    fieldToUse: string | undefined = "title",
    overrides: Partial<TextField> | undefined = {},
): TextField => {
    // @ts-expect-error - ts mismatch Partial<TextField> with TextField
    const field: TextField = {
        name: "slug",
        type: "text",
        index: true,
        unique: true,
        label: "Slug",
        ...overrides,
        hooks: {
            beforeValidate: [
                useSlug(fieldToUse),
            ],
        },
        admin: {
            position: "sidebar",
            ...(overrides?.admin || {}),
            components: {
                Field: {
                    path: "@/payload/fields/Slug/SlugComponent#SlugComponent",
                    clientProps: {
                        fieldToUse,
                    },
                },
            },
        },
    }

    return field
}
