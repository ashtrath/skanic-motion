import { CMSLink } from "@/components/composites/CMSLink"
import RichText from "@/components/ui/RichText"
import type { ContactFormBlock } from "@/payload/payload-types"
import ContactFormClient from "./Component.client"

export default function ContactForm({ id, blockType, ...props }: ContactFormBlock) {
    return (
        <section
            id={`${blockType}-${id}`}
            className="flex w-full items-center justify-between px-22.5 py-18.5"
        >
            <div className="basis-1/4 space-y-8 self-start">
                <p className="ml-1 uppercase tracking-widest">{props.eyebrow}</p>
                <h2 className="font-bold font-display text-5xl">
                    <RichText data={props.heading} inline />
                </h2>
                {props?.sideContent?.map((item) => (
                    <div key={item.id} className="space-y-4">
                        <h5 className="font-display font-medium text-sm uppercase">
                            {item.heading}
                        </h5>
                        {item.content && (
                            <div className="mt-4 space-y-2">
                                {item.content.map((contentBlock) => {
                                    if (contentBlock.blockType === "rich-text-block")
                                        return (
                                            <RichText
                                                key={contentBlock.id}
                                                data={contentBlock.text}
                                            />
                                        )
                                    if (contentBlock.blockType === "link-list-block")
                                        return (
                                            <div key={contentBlock.id} className="space-y-2">
                                                {contentBlock.links.map(
                                                    ({ id, link: { ...link } }) => (
                                                        <CMSLink
                                                            key={id}
                                                            className="block text-primary hover:underline"
                                                            {...link}
                                                        />
                                                    ),
                                                )}
                                            </div>
                                        )
                                    return null
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <ContactFormClient />
        </section>
    )
}
