import SmoothReveal from "@/components/animations/SmoothReveal"
import ClientsCard from "@/components/composites/ClientsCard"
import RichText from "@/components/ui/RichText"
import { isExpandedDoc } from "@/lib/utils/isExpandedDoc"
import type { Client, ClientsGridBlock } from "@/payload/payload-types"

export default function ClientsGrid({ id, blockType, ...props }: ClientsGridBlock) {
    return (
        <section
            id={`${blockType}-${id}`}
            className="flex w-full items-start justify-between px-22.5 py-18.5"
        >
            {Array.isArray(props.clients) && props.clients.length > 0 && (
                <div className="columns-4 gap-6">
                    {props.clients.map((client, i) => {
                        if (!isExpandedDoc<Client>(client)) return null
                        return (
                            <SmoothReveal key={client.id} delay={0.25 + i * 0.05}>
                                <ClientsCard {...client} />
                            </SmoothReveal>
                        )
                    })}
                </div>
            )}
            <div className="basis-2/5 space-y-8">
                <p className="ml-1 uppercase tracking-widest">{props.eyebrow}</p>
                <h2 className="font-bold font-display text-5xl">
                    <RichText data={props.heading} inline />
                </h2>
                <RichText
                    data={props.content}
                    className="prose-h2:text-5xl prose-p:text-muted-foreground"
                />
            </div>
        </section>
    )
}
