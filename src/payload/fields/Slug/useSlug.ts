import type { FieldHook } from "payload"
import { formatSlug } from "@/lib/utils/formatSlug"

const useSlug =
    (fallback: string): FieldHook =>
    ({ data, value }) => {
        if (typeof value === "string" && value.trim() !== "") {
            return formatSlug(value)
        }

        const fallbackValue = data?.[fallback]
        if (typeof fallbackValue === "string" && fallbackValue.trim() !== "") {
            return formatSlug(fallbackValue)
        }

        return value
    }

export default useSlug
