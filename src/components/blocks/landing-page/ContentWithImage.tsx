import { ArrowRight } from "lucide-react"
import { CMSLink } from "@/components/composites/CMSLink"
import Media from "@/components/ui/Media"
import RichText from "@/components/ui/RichText"
import { cn } from "@/lib/utils/cn"
import type { ContentWithImageBlock } from "@/payload/payload-types"

export default function ContentWithImage({ id, blockType, ...props }: ContentWithImageBlock) {
    return (
        <section
            id={`${blockType}-${id}`}
            className={cn(
                "flex items-center justify-between px-22.5 py-18.5",
                props.imagePosition === "left" ? "flex-row-reverse" : "flex-row",
            )}
        >
            <div className="max-w-xl flex-1 space-y-8">
                <p className="ml-1 uppercase tracking-widest">{props.eyebrow}</p>
                <h2 className="font-bold font-display text-5xl">
                    <RichText data={props.heading} inline />
                </h2>
                <RichText
                    data={props.content}
                    className="prose-h2:text-5xl prose-p:text-muted-foreground"
                />
                {props.ctaButton && (
                    <CMSLink
                        key={id}
                        appearance="outline"
                        icon={ArrowRight}
                        effect="expandIcon"
                        size="lg"
                        className="rounded-full"
                        {...props.ctaButton}
                    />
                )}
            </div>
            <div className="flex flex-1 items-center justify-center">
                <Media resource={props.image} priority={true} className="h-auto max-w-full" />
            </div>
        </section>
    )
}
