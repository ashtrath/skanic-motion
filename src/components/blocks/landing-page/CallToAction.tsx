import { ArrowRight } from "lucide-react"

import { CMSLink } from "@/components/composites/CMSLink"
import RichText from "@/components/ui/RichText"
import TornPaperDivider from "@/components/ui/TornPaperDivider"
import { cn } from "@/lib/utils/cn"
import { isMedia } from "@/lib/utils/isMedia"
import type { CallToActionBlock } from "@/payload/payload-types"

export default function CallToAction({ id, blockType, ...props }: CallToActionBlock) {
    return (
        <section
            id={`${blockType}-${id}`}
            className={cn(
                "relative flex h-[526px] items-center justify-start bg-center bg-cover px-22.5",
                props.alignment === "center" && "justify-center text-center",
                props.alignment === "right" && "justify-end",
            )}
            style={{ backgroundImage: isMedia(props.image) ? `url(${props.image.url})` : "" }}
        >
            <TornPaperDivider position="top" />
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
            <TornPaperDivider position="bottom" />
        </section>
    )
}
