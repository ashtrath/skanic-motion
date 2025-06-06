"use client"

import { motion, type Variants } from "motion/react"

import type { Client } from "@/payload/payload-types"
import Media from "../ui/Media"
import { CMSLink } from "./CMSLink"

export default function ClientsCard({ logo, name, website }: Client) {
    const variants = {
        image: {
            initial: {
                y: 0,
                transition: {
                    duration: 0.48,
                    ease: [0.77, 0, 0.175, 1],
                },
            },
            animate: {
                y: "-24px",
                transition: {
                    duration: 0.48,
                    delay: 0.1,
                    ease: [0.77, 0, 0.175, 1],
                },
            },
        } as Variants,
        textContainer: {
            initial: {
                scaleY: 0,
                transformOrigin: "bottom",
                transition: {
                    duration: 0.48,
                    ease: [0.77, 0, 0.175, 1],
                },
            },
            animate: {
                scaleY: 1,
                transition: {
                    duration: 0.48,
                    delay: 0.1,
                    ease: [0.77, 0, 0.175, 1],
                },
            },
        } as Variants,
        text: {
            initial: {
                opacity: 0,
                y: "16px",
                transition: {
                    duration: 0.35,
                    ease: [0.165, 0.84, 0.44, 1],
                },
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.35,
                    delay: 0.48,
                    ease: [0.165, 0.84, 0.44, 1],
                },
            },
        } as Variants,
    }

    return (
        <motion.div
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="relative aspect-[3/2] w-36 overflow-hidden rounded border border-foreground"
        >
            <motion.div
                variants={variants.image}
                className="flex size-full items-center justify-center [&_picture]:max-w-7/12"
            >
                <Media resource={logo} priority className="mask" />
            </motion.div>
            <motion.div
                variants={variants.textContainer}
                className="absolute inset-0 flex size-full items-center justify-center bg-foreground"
            >
                <motion.h5 variants={variants.text} className="font-bold text-background">
                    {website ? <CMSLink url={website} label={name} newTab /> : name}
                </motion.h5>
            </motion.div>
        </motion.div>
    )
}
