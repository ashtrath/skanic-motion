import path from "node:path"
import { fileURLToPath } from "node:url"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Categories } from "./collections/Categories"
import { Clients } from "./collections/Clients"
import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Projects } from "./collections/Projects"
import { Users } from "./collections/Users"
import { editor } from "./config/editor"
import { plugins } from "./config/plugins"
import { LandingPage } from "./globals/LandingPage"

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
    globals: [LandingPage],
    collections: [Users, Media, Pages, Clients, Categories, Projects],
    secret: process.env.PAYLOAD_SECRET || " ",
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || "",
        },
    }),
    sharp,
    editor,
    plugins,
    graphQL: {
        disable: true,
    },
})
