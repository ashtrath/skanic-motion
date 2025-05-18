import type { CheckboxField, TextField } from "payload"
import useSlug from "./useSlug"

interface SlugFieldOverrides {
    checkboxOverrides?: Partial<CheckboxField>
    slugOverrides?: Partial<TextField>
}

export const SlugField = (
    fieldToUse: string | undefined = "title",
    { checkboxOverrides, slugOverrides }: SlugFieldOverrides = {},
): [CheckboxField, TextField] => {
    const checkboxField: CheckboxField = {
        name: "slugLock",
        type: "checkbox",
        admin: {
            hidden: true,
            position: "sidebar",
        },
        defaultValue: true,
        ...checkboxOverrides,
    }

    // @ts-expect-error - ts mismatch Partial<TextField> with TextField
    const slugField: TextField = {
        name: "slug",
        type: "text",
        index: true,
        unique: true,
        label: "Slug",
        ...slugOverrides,
        hooks: {
            beforeValidate: [useSlug(fieldToUse)],
        },
        admin: {
            position: "sidebar",
            ...(slugOverrides?.admin || {}),
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

    return [checkboxField, slugField]
}
