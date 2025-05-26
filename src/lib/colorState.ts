import type {
    StateValues,
    TextStateFeatureProps,
} from "node_modules/@payloadcms/richtext-lexical/dist/features/textState/feature.server"

export const colorState: TextStateFeatureProps["state"] = {
    color: {
        primary: {
            label: "Primary",
            css: {
                color: "oklch(0.37 0.09 263.09)",
            },
        },
        accent: {
            label: "Accent",
            css: {
                color: "oklch(0.62 0.21 25.75)",
            },
        },
    },
}

type ExtractAllColorKeys<T> = {
    [P in keyof T]: T[P] extends StateValues ? keyof T[P] : never
}[keyof T]

export type ColorStateKeys = ExtractAllColorKeys<typeof colorState>
