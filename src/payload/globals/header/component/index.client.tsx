"use client"

import { Menu } from "lucide-react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"
import * as React from "react"

import { Button } from "@/components/ui/Button"
import { useHeaderStore } from "../stores/useHeaderStore"
import { headerBar, headerContainer } from "./animation"

export default function HeaderClient({ children }: { children: React.ReactNode }) {
    const { isOpen, toggleHeader } = useHeaderStore()

    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">("down")
    const [isAtTop, setIsAtTop] = React.useState<boolean>(true)

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - (scrollY.getPrevious() ?? 0)
        setScrollDirection(diff > 0 ? "down" : "up")
        setIsAtTop(current === 0)
    })

    React.useEffect(() => {
        isOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
    }, [isOpen])

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
                    onClick={toggleHeader}
                    variant="ghost"
                    size="icon"
                    className="size-12 rounded-full"
                >
                    <Menu className="size-8" />
                </Button>
            </motion.div>
            <AnimatePresence mode="wait">{isOpen && children}</AnimatePresence>
        </motion.header>
    )
}
