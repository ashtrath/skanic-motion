import type { Media as MediaType } from "@/payload/payload-types"
import { blurhashToBase64 } from "blurhash-base64"
import Image, { type StaticImageData } from "next/image"

import { IMAGE_BREAKPOINTS } from "@/lib/constants"
import { cn } from "@/lib/utils/cn"
import { getClientSideURL } from "@/lib/utils/getUrl"
import { isMedia } from "@/lib/utils/isMedia"

interface MediaProps {
    resource?: MediaType | number // for Payload media
    src?: StaticImageData // for static media
    alt?: string
    size?: string // for NextImage only
    fill?: boolean // for NextImage only
    priority?: boolean // for NextImage only
    loading?: "lazy" | "eager" // for NextImage only
    onClick?: () => void
    className?: string
}

export default function Media({ ...props }: MediaProps) {
    const isVideo = isMedia(props.resource) && props.resource?.mimeType?.includes("video")

    return isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />
}

function ImageMedia({
    resource,
    src: staticSrc,
    alt: propAlt,
    fill,
    size,
    priority,
    loading,
    ...props
}: MediaProps) {
    let imageSrc: StaticImageData | string
    let imageAlt: string
    let imageWidth: number | undefined
    let imageHeight: number | undefined
    let blurHash: string | undefined

    if (staticSrc) {
        imageSrc = staticSrc
        imageAlt = propAlt || ""
        if (typeof staticSrc !== "string") {
            imageWidth = staticSrc.width
            imageHeight = staticSrc.height
        }
    } else if (isMedia(resource)) {
        imageSrc = `${getClientSideURL()}${resource.url}?${resource.updatedAt}`
        imageAlt = propAlt || resource.alt || ""
        imageWidth = resource.width || undefined
        imageHeight = resource.height || undefined
        blurHash = resource.blurhash ? blurhashToBase64(resource.blurhash) : undefined
    } else {
        console.error("Invalid media resource")
        return null
    }

    // NOTE: this is used by the browser to determine which image to download at different screen sizes
    const sizes =
        size ||
        Object.entries(IMAGE_BREAKPOINTS)
            .sort(([, aValue], [, bValue]) => aValue - bValue)
            .map(([, value]) => `(max-width: ${value}px) ${Math.min(value * 2, 2880)}px`)
            .join(", ")

    return (
        <picture>
            <Image
                alt={imageAlt}
                src={imageSrc}
                width={!fill ? imageWidth : undefined}
                height={!fill ? imageHeight : undefined}
                sizes={sizes}
                placeholder={blurHash ? "blur" : undefined}
                blurDataURL={blurHash || undefined}
                priority={priority}
                loading={loading || (!priority ? "lazy" : undefined)}
                {...props}
            />
        </picture>
    )
}

function VideoMedia({ resource, onClick, className }: MediaProps) {
    if (!resource || typeof resource !== "object") return null

    const videoUrl = `${getClientSideURL()}${resource.url}?${resource.updatedAt}`

    return (
        <video autoPlay loop muted playsInline onClick={onClick} className={cn(className)}>
            <source src={videoUrl} type={resource.mimeType || ""} />
            Your browser does not support the video tag.
        </video>
    )
}
