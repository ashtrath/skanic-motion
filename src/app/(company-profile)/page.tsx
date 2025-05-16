import config from "@payload-config"
import { getPayload } from "payload"
import { cache } from "react"

import Blocks from "@/components/blocks"
import { generateMeta } from "@/lib/utils/generateMeta"

export default async function LandingPage() {
    const page = await queryLandingPage()

    return (
        <>
            <Blocks blocks={page.layout} />
        </>
    )
}

export async function generateMetadata() {
    const page = await queryLandingPage()

    return generateMeta({ doc: page })
}

const queryLandingPage = cache(async () => {
    const payload = await getPayload({ config: config })
    const result = await payload.findGlobal({
        slug: "landing-page",
        select: { id: true, layout: true, meta: true },
    })

    return result
})
