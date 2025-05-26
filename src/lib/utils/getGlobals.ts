import config from "@payload-config"
import { unstable_cache } from "next/cache"
import { type GlobalSlug, getPayload } from "payload"

async function getGlobal(slug: GlobalSlug, depth = 0) {
    const payload = await getPayload({ config })

    const global = await payload.findGlobal({
        slug,
        depth,
    })

    return global
}

export const getCachedGlobal = (slug: GlobalSlug, depth = 0) =>
    unstable_cache(async () => getGlobal(slug, depth), [slug], {
        tags: [`global_${slug}`],
    })
