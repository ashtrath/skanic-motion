import type { CheckboxField, TextField } from "payload"
import useSlug from "./useSlug"

interface SlugFieldOverrides {
    checkboxOverrides?: Partial<CheckboxField>
    slugOverrides?: Partial<TextField>
}

export const SlugField = (
    fieldToUse: string | undefined = "title",
    { checkboxOverrides, slugOverrides }: SlugFieldOverrides = {},
): [TextField, CheckboxField] => {
    const checkboxField: CheckboxField = {
        name: "slugLock",
        type: "checkbox",
        defaultValue: true,
        admin: {
            hidden: true,
            position: "sidebar",
        },
        ...checkboxOverrides,
    }

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
                    path: "@/payload/fields/slug/SlugComponent#SlugComponent",
                    clientProps: {
                        fieldToUse,
                        checkboxFieldPath: checkboxField.name,
                    },
                },
            },
        },
    } as TextField

    return [slugField, checkboxField]
}
