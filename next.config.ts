import { withPayload } from "@payloadcms/next/withPayload"
import type { NextConfig } from "next"

import redirects from "@/lib/utils/redirects"

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            ...[NEXT_PUBLIC_SERVER_URL].map((item) => {
                const url = new URL(item)

                return {
                    hostname: url.hostname,
                    protocol: url.protocol.replace(':', '') as 'http' | 'https',
                }
            }),
        ],
    },
    reactStrictMode: true,
    redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
