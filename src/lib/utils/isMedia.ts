import type { Media } from "@/payload/payload-types"

export const isMedia = (obj: number | Media | undefined): obj is Media => {
    return typeof obj === "object"
}
