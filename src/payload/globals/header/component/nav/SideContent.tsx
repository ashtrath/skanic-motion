"use client"

import { motion } from "motion/react"
import { CMSLink } from "@/components/composites/CMSLink"
import RichText from "@/components/ui/RichText"
import type { Header } from "@/payload/payload-types"
import { navInfo } from "../animation"

export default function SideContent({ data }: { data: Header["sideContent"] }) {
    return (
        <motion.div
            custom={[0.1, 0]}
            variants={navInfo}
            initial="initial"
            animate="enter"
            exit="exit"
            className="basis-1/4 space-y-12"
        >
            {data?.map((item) => (
                <div key={item.id} className="space-y-4">
                    <h5 className="font-display font-medium text-sm uppercase">{item.heading}</h5>
                    {item.content && (
                        <div className="mt-4 space-y-2 text-lg">
                            {item.content.map((contentBlock) => {
                                if (contentBlock.blockType === "rich-text-block")
                                    return (
                                        <RichText key={contentBlock.id} data={contentBlock.text} />
                                    )
                                if (contentBlock.blockType === "link-list-block")
                                    return (
                                        <div key={contentBlock.id} className="space-y-2">
                                            {contentBlock.links.map(
                                                ({ id, link: { label, ...link } }) => (
                                                    <CMSLink
                                                        key={id}
                                                        className="block text-primary hover:underline"
                                                        {...link}
                                                    >
                                                        {label}
                                                    </CMSLink>
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
        </motion.div>
    )
}
