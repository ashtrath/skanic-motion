import { payloadCloudPlugin } from "@payloadcms/payload-cloud"
import { seoPlugin } from "@payloadcms/plugin-seo"
import type { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types"
import type { Plugin } from "payload"

import { getServerSideURL } from "@/lib/utils/getUrl"

const generateTitle: GenerateTitle = ({ doc }) => {
    return doc?.title
        ? `${doc.title} | ${process.env.APP_NAME || "PayloadCMS Website"}`
        : process.env.APP_NAME || "PayloadCMS Website"
}

const generateURL: GenerateURL = ({ doc }) => {
    const url = getServerSideURL()

    return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
    payloadCloudPlugin(),
    seoPlugin({
        generateTitle,
        generateURL,
    }),
]
