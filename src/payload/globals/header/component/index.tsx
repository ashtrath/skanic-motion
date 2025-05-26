import { getCachedGlobal } from "@/lib/utils/getGlobals"
import HeaderClient from "./index.client"
import Nav from "./nav"

export default async function Header() {
    const headerData = await getCachedGlobal("header", 1)()

    return (
        <HeaderClient>
            <Nav data={headerData} />
        </HeaderClient>
    )
}
