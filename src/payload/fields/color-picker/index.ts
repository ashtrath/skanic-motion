import type { TextField } from "payload"

export const ColorPickerField = (overrides?: Omit<TextField, "type">): TextField => {
    return {
        name: "color",
        label: "Color",
        type: "text",
        ...overrides,
        admin: {
            ...(overrides?.admin || {}),
            components: {
                Field: "@/payload/fields/color-picker/ColorPickerComponent#ColorPickerComponent",
            },
        },
    } as TextField
}
