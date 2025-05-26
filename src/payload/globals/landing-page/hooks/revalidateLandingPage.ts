import { revalidateTag } from "next/cache"
import type { GlobalAfterChangeHook } from "payload"

export const revalidateLandingPage: GlobalAfterChangeHook = ({
    doc,
    req: { payload, context },
}) => {
    if (!context.disableRevalidate) {
        payload.logger.info("Revalidating Landing Page")

        revalidateTag("global_landing-page")
    }

    return doc
}
