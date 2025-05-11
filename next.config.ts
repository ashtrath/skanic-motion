import { withPayload } from "@payloadcms/next/withPayload"
import type { NextConfig } from "next"

import redirects from "@/lib/utils/redirects"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
