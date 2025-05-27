import * as motion from "motion/react-client"
import type * as React from "react"

type SmoothRevealProps = {
    children: React.ReactNode
    direction?: "up" | "down" | "left" | "right"
    delay?: number
    duration?: number
    distance?: number
    className?: string
    once?: boolean
    blur?: string
}

export default function SmoothReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    distance = 100,
    className = "",
    once = true,
    blur = "6px",
}: SmoothRevealProps) {
    const getDirectionalProps = () => {
        switch (direction) {
            case "down":
                return { y: -distance }
            case "left":
                return { x: distance }
            case "right":
                return { x: -distance }
            default:
                return { y: distance }
        }
    }

    const variants = {
        hidden: {
            opacity: 0,
            filter: `blur(${blur})`,
            ...getDirectionalProps(),
        },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                ease: [0.2, 0.0, 0.0, 1.0],
                delay: 0.04 + delay,
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.8, once }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
