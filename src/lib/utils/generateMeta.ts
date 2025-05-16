import type { Metadata } from "next"
import type { Config, LandingPage, Media, Page, Project } from "@/payload/payload-types"
import { getServerSideURL } from "./getUrl"
import { mergeOpenGraph } from "./mergeOpenGraph"

const getImageURL = (image?: Media | Config["db"]["defaultIDType"] | null) => {
    const serverUrl = getServerSideURL()

    let url = `${serverUrl}/website-template-OG.webp`

    if (image && typeof image === "object" && "url" in image) {
        const ogUrl = image.sizes?.og?.url

        url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
    }

    return url
}

export const generateMeta = async (args: {
    doc: Partial<Page> | Partial<Project> | Partial<LandingPage>
}): Promise<Metadata> => {
    const { doc } = args || {}

    const ogImage = getImageURL(doc?.meta?.image)

    const title = doc?.meta?.title || `${process.env.APP_NAME || "PayloadCMS Website"}`

    let url = "/"
    if ("slug" in doc && doc.slug) {
        url = Array.isArray(doc.slug) ? doc.slug.join("/") : "/"
    }

    return {
        description: doc?.meta?.description,
        openGraph: mergeOpenGraph({
            description: doc?.meta?.description || "",
            images: ogImage
                ? [
                      {
                          url: ogImage,
                      },
                  ]
                : undefined,
            title,
            siteName: title,
            url,
        }),
        title,
    }
}
