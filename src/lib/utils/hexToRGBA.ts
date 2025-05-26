export const hexToRGBA = (_hex: string, opacity?: number) => {
    // skip conversion if no hex or opacity is provided
    if (!_hex || !opacity || opacity === 0) return null

    const hex = _hex.replace("#", "")

    const r = Number.parseInt(hex.substring(0, 2), 16)
    const g = Number.parseInt(hex.substring(2, 4), 16)
    const b = Number.parseInt(hex.substring(4, 6), 16)

    const alpha = opacity / 100

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
