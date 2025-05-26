import Blocks from "@/components/blocks"
import { generateMeta } from "@/lib/utils/generateMeta"
import { getCachedGlobal } from "@/lib/utils/getGlobals"
import type { LandingPage as LandingPageType } from "@/payload/payload-types"

export default async function LandingPage() {
    const page = (await getCachedGlobal("landing-page", 1)()) as LandingPageType

    return <Blocks blocks={page.layout} />
}

export async function generateMetadata() {
    const page = await getCachedGlobal("landing-page")()

    return generateMeta({ doc: page })
}
