import type { IconifyJSON } from "@iconify/types"
import type { SelectField } from "payload"

export type IconOption = {
    value: string
    label: string
}

export type IconSet = {
    data: IconifyJSON
    label: string
}

interface IconPickerFieldProps extends Omit<Partial<SelectField>, "options"> {
    iconSets: IconSet[]
}

export const IconPickerField = ({ iconSets, ...overrides }: IconPickerFieldProps) => {
    const iconOptions: IconOption[] = []

    if (iconSets && Array.isArray(iconSets)) {
        iconSets.forEach((iconSet) => {
            if (!iconSet || !iconSet.data || !iconSet.data.icons || !iconSet.data.prefix) {
                console.warn(
                    `[IconPickerField] Invalid or incomplete 'IconInputSet' provided for icon field. ` +
                        `Set labeled "${iconSet?.label || "Unknown"}" is missing 'data.icons' or 'data.prefix'. Skipping this set.`,
                )
                return
            }

            const { icons, prefix } = iconSet.data

            Object.keys(icons).forEach((iconName) => {
                const label = iconName
                    .split("-")
                    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
                    .join(" ")

                iconOptions.push({
                    value: `${prefix}:${iconName}`,
                    label: `${iconSet.label}: ${label}`,
                })
            })
        })
    }

    return {
        name: "icon",
        required: false,
        ...overrides,
        type: "select",
        interfaceName: "IconValue",
        hasMany: false,
        options: iconOptions,
        admin: {
            ...(overrides?.admin || {}),
            components: {
                Field: {
                    path: "@/payload/fields/icon-picker/IconPickerComponent#IconPickerComponent",
                },
            },
        },
    } as SelectField
}
