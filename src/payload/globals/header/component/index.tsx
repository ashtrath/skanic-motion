import { getCachedGlobal } from "@/lib/utils/getGlobals"
import type { Header as HeaderType } from "@/payload/payload-types"
import HeaderClient from "./index.client"
import Nav from "./nav"

export default async function Header() {
    const headerData: HeaderType = await getCachedGlobal("header", 1)()

    return (
        <HeaderClient>
            <Nav data={headerData} />
        </HeaderClient>
    )
}
