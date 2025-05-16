import config from "@payload-config"
import { getPayload } from "payload"
import Blocks from "@/components/blocks"

export default async function LandingPage() {
    const payload = await getPayload({ config: config })
    const blocks = await payload.findGlobal({
        slug: "landing-page",
        select: { id: true, layout: true },
    })

    return (
        <>
            <Blocks blocks={blocks.layout} />
        </>
    )
}
