import { ArrowRight } from "lucide-react"

import { CMSLink } from "@/components/composites/CMSLink"
import FeatureCard from "@/components/composites/FeatureCard"
import RichText from "@/components/ui/RichText"
import { cn } from "@/lib/utils/cn"
import { isExpandedDoc } from "@/lib/utils/isExpandedDoc"
import type { FeatureGridBlock, Service } from "@/payload/payload-types"

export default function FeatureGrid({ id, blockType, ...props }: FeatureGridBlock) {
    return (
        <section
            id={`${blockType}-${id}`}
            className={cn("flex w-full items-start justify-between px-22.5 py-18.5")}
        >
            <div className="max-w-sm flex-1 space-y-8">
                <p className="ml-1 uppercase tracking-widest">{props.eyebrow}</p>
                {props.heading && (
                    <h2 className="font-bold font-display text-5xl">
                        <RichText data={props.heading} inline />
                    </h2>
                )}
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
            <div className="grid auto-rows-fr grid-cols-2 gap-8">
                {props.services?.map((service) => {
                    if (!isExpandedDoc<Service>(service)) return
                    return <FeatureCard key={service.id} {...service} />
                })}
            </div>
        </section>
    )
}
