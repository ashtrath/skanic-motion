import path from "node:path"
import { fileURLToPath } from "node:url"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { buildConfig } from "payload"
import sharp from "sharp"

import { getServerSideURL } from "@/lib/utils/getUrl"
import { Categories } from "./collections/Categories"
import { Clients } from "./collections/Clients"
import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Projects } from "./collections/Projects"
import { Services } from "./collections/Services"
import { Users } from "./collections/Users"
import { editor } from "./config/editor"
import { plugins } from "./config/plugins"
import { Header } from "./globals/Header"
import { LandingPage } from "./globals/landing-page/config"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            importMapFile: "src/app/admin/importMap.js",
            baseDir: path.resolve(dirname),
        },
    },
    globals: [LandingPage, Header],
    collections: [Users, Media, Pages, Clients, Categories, Projects, Services],
    secret: process.env.PAYLOAD_SECRET || " ",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || "",
        },
    }),
    cors: [getServerSideURL()].filter(Boolean),
    sharp,
    editor,
    plugins,
    graphQL: {
        disable: true,
    },
})
