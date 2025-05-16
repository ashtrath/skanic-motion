export const isExpandedDoc = <T>(doc: unknown): doc is T => {
    if (typeof doc === "object") return true
    return false
}
