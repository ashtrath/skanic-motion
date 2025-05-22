import iconNodes from "lucide-static/icon-nodes.json"
import type { SelectField } from "payload"

export type IconOption = {
    value: string
    label: string
}

export const IconPickerField = (overrides?: Partial<SelectField>) => {
    const baseField = {
        name: "icon",
        ...overrides,
        type: "select",
        interfaceName: "LucideIcon",
        required: false,
        hasMany: false,
        options: Object.keys(iconNodes).map((slug) => {
            const label = slug
                .split("-")
                .map((segment) => {
                    if (/^\d+$/.test(segment)) return segment

                    return segment
                        .replace(/^[a-z]/, (c) => c.toUpperCase())
                        .replace(/(\d)([a-z])/g, (_, d, l) => d + l.toUpperCase())
                })
                .join(" ")

            return {
                value: slug,
                label,
            }
        }),
        admin: {
            ...(overrides?.admin || {}),
            components: {
                Field: {
                    path: "@/payload/fields/icon-picker/IconPickerComponent#IconPickerComponent",
                },
            },
        },
    } as SelectField

    return baseField
}
