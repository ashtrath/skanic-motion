import { withPayload } from "@payloadcms/next/withPayload"
import type { NextConfig } from "next"

import redirects from "redirects"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    redirects,
    eslint: {
        // Disable eslint on build since we're using biomejs here
        ignoreDuringBuilds: true,
    },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
