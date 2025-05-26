import { ArrowRight } from "lucide-react"

import { CMSLink } from "@/components/composites/CMSLink"
import RichText from "@/components/ui/RichText"
import TornPaperDivider from "@/components/ui/TornPaperDivider"
import { cn } from "@/lib/utils/cn"
import { hexToRGBA } from "@/lib/utils/hexToRGBA"
import { isMedia } from "@/lib/utils/isMedia"
import type { CallToActionBlock } from "@/payload/payload-types"

export default function CallToAction({ id, blockType, ...props }: CallToActionBlock) {
    const overlayRgba = hexToRGBA(props.overlayColor, props.colorOpacity)

    return (
        <section
            id={`${blockType}-${id}`}
            className={cn(
                "relative flex h-[526px] items-center justify-start bg-center bg-cover px-22.5",
                props.alignment === "center" && "justify-center text-center",
                props.alignment === "right" && "justify-end",
            )}
            style={{
                backgroundImage: isMedia(props.image)
                    ? overlayRgba
                        ? `linear-gradient(${overlayRgba}, ${overlayRgba}), url(${props.image.url})`
                        : `url(${props.image.url})`
                    : "",
            }}
        >
            {props.enableSeparator && <TornPaperDivider position="top" />}
            <div className="max-w-xl space-y-6">
                <h2 className="font-bold font-display text-5xl text-background">
                    <RichText data={props.heading} inline />
                </h2>
                {props.ctaButton && (
                    <CMSLink
                        key={id}
                        appearance="default"
                        icon={ArrowRight}
                        effect="shineHover"
                        size="lg"
                        {...props.ctaButton}
                    />
                )}
            </div>
            {props.enableSeparator && <TornPaperDivider position="bottom" />}
        </section>
    )
}
