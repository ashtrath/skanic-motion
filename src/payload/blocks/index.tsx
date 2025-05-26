import type { LandingPage } from "@/payload/payload-types"
import CallToAction from "./landing-page/call-to-action/Component"
import ContentWithImage from "./landing-page/content-with-image/Component"
import FeatureGrid from "./landing-page/feature-grid/Component"
import HeroSlideshow from "./landing-page/hero-slideshow/Component"

const BLOCK_COMPONENTS = {
    "hero-slideshow-block": HeroSlideshow,
    "content-with-image-block": ContentWithImage,
    "call-to-action-block": CallToAction,
    "feature-grid-block": FeatureGrid,
    "rich-text-block": HeroSlideshow,
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
