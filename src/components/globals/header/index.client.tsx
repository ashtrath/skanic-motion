"use client"

import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import Link from "next/link"
import * as React from "react"

import { CMSLink } from "@/components/composites/CMSLink"
import { Button } from "@/components/ui/Button"
import { headerBar, headerBody, headerContainer, navInfo, navItem } from "./animation"

export default function HeaderClient() {
    const [isActive, setIsActive] = React.useState<boolean>(false)

    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">("down")
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true)

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - (scrollY.getPrevious() ?? 0)
        setScrollDirection(diff > 0 ? "down" : "up")
        setIsAtTop(current === 0)
    })

    React.useEffect(() => {
        isActive
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto")
    }, [isActive])

    return (
        <motion.header
            variants={headerContainer}
            initial="initial"
            animate={
                scrollDirection === "down" && !isAtTop
                    ? "hidden"
                    : isAtTop
                      ? "initial"
                      : "scrolling"
            }
            className="fixed inset-x-0 top-0 z-[999] will-change-transform"
        >
            <motion.div
                variants={headerBar}
                animate={!isAtTop ? "scrolled" : "initial"}
                className="-z-1 absolute flex size-full items-center justify-between px-22.5"
            >
                <span className="font-bold font-display text-xl">SKANIC Motion</span>
                <Button
                    onClick={() => setIsActive(!isActive)}
                    variant="ghost"
                    size="icon"
                    className="size-12 rounded-full"
                >
                    <Menu className="size-8" />
                </Button>
            </motion.div>
            <AnimatePresence mode="wait">
                {isActive && (
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
                                onClick={() => setIsActive(!isActive)}
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
                                    {[...Array(6)].map((_, i) => (
                                        <li
                                            key={i}
                                            className="overflow-hidden transition-[filter] duration-300 hover:opacity-100 hover:blur-none group-hover:opacity-60 group-hover:blur-xs"
                                        >
                                            <Link
                                                href="#"
                                                className="inline-block py-2 font-display font-medium text-6xl uppercase transition-colors hover:text-primary"
                                            >
                                                <motion.p
                                                    custom={[i * 0.04, i * 0.02]}
                                                    variants={navItem}
                                                    initial="initial"
                                                    animate="enter"
                                                    exit="exit"
                                                >
                                                    Case Studies
                                                </motion.p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <motion.div
                                custom={[0.1, 0]}
                                variants={navInfo}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                className="basis-1/4 space-y-12"
                            >
                                <div>
                                    <h5 className="font-display font-medium text-sm uppercase">
                                        Address
                                    </h5>
                                    <p className="mt-4 text-lg">
                                        SMKN 1 Ciomas, Laladon, Kec. Ciomas, Kabupaten Bogor, Jawa
                                        Barat 16610
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-display font-medium text-sm uppercase">
                                        Socials
                                    </h5>
                                    <div className="mt-4 space-y-2">
                                        <CMSLink
                                            url="https://facebook.com"
                                            appearance="link"
                                            newTab
                                            className="block text-lg"
                                        >
                                            Facebook
                                        </CMSLink>
                                        <CMSLink
                                            url="https://facebook.com"
                                            appearance="link"
                                            newTab
                                            className="block text-lg"
                                        >
                                            Facebook
                                        </CMSLink>
                                        <CMSLink
                                            url="https://facebook.com"
                                            appearance="link"
                                            newTab
                                            className="block text-lg"
                                        >
                                            Facebook
                                        </CMSLink>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-display font-medium text-sm uppercase">
                                        Make it better.
                                    </h5>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
