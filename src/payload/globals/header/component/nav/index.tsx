"use client"

import { X } from "lucide-react"
import { motion } from "motion/react"

import { CMSLink } from "@/components/composites/CMSLink"
import { Button } from "@/components/ui/Button"
import type { Header } from "@/payload/payload-types"
import { useHeaderStore } from "../../stores/useHeaderStore"
import { headerBody, navItem } from "../animation"
import SideContent from "./SideContent"

export default function Nav({ data }: { data: Header }) {
    const { toggleHeader } = useHeaderStore()

    return (
        <motion.div
            variants={headerBody}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed inset-x-0 top-0 z-10 h-screen space-y-24 overflow-y-auto bg-background py-24"
        >
            <div className="flex items-center justify-between px-28">
                <span className="font-bold font-display text-xl">SKANIC Motion</span>
                <Button
                    onClick={toggleHeader}
                    variant="ghost"
                    size="icon"
                    className="size-16 rounded-full text-right"
                >
                    <X className="size-12" />
                </Button>
            </div>
            <div className="flex justify-between px-[12vw]">
                <nav className="basis-3/4">
                    <ul className="-mt-2 group w-fit">
                        {data?.navItems?.map(({ id, link: { label, ...link } }, i) => (
                            <li
                                key={id}
                                className="overflow-hidden transition-[filter] duration-300 hover:opacity-100 hover:blur-none group-hover:opacity-60 group-hover:blur-xs"
                            >
                                <CMSLink
                                    className="inline-block w-full py-2 font-display font-medium text-6xl uppercase transition-colors hover:text-primary"
                                    {...link}
                                >
                                    <motion.p
                                        custom={[i * 0.04, i * 0.02]}
                                        variants={navItem}
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                    >
                                        {label}
                                    </motion.p>
                                </CMSLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                {data.sideContent && <SideContent data={data.sideContent} />}
            </div>
        </motion.div>
    )
}
