import type { LandingPage } from "@/payload/payload-types"
import ContactForm from "./common/contact-form/Component"
import CallToAction from "./landing-page/call-to-action/Component"
import ClientsGrid from "./landing-page/clients-grid/Component"
import ContentWithImage from "./landing-page/content-with-image/Component"
import HeroSlideshow from "./landing-page/hero-slideshow/Component"
import ServicesGrid from "./landing-page/services-grid/Component"

const BLOCK_COMPONENTS = {
    "hero-slideshow-block": HeroSlideshow,
    "content-with-image-block": ContentWithImage,
    "call-to-action-block": CallToAction,
    "services-grid-block": ServicesGrid,
    "rich-text-block": HeroSlideshow,
    "clients-grid-block": ClientsGrid,
    "contact-form-block": ContactForm,
}

export default function Blocks({ blocks }: { blocks: LandingPage["layout"][0][] }) {
    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (!hasBlocks) return null

    return (
        <>
            {blocks.map((block, index) => {
                const { blockType } = block

                if (blockType && blockType in BLOCK_COMPONENTS) {
                    const Block = BLOCK_COMPONENTS[blockType]

                    // @ts-expect-error there may be some mismatch between the expected types here
                    return <Block key={block.id || index} {...block} />
                }
                return null
            })}
        </>
    )
}
