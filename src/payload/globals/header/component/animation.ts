import type { Variants } from "motion/react"

const containerTransition = {
    height: {
        duration: 0.4,
    },
    y: {
        duration: 0.3,
    },
    ease: [0.76, 0, 0.24, 1],
}

export const headerContainer = {
    initial: {
        height: "6rem",
        y: "0%",
    },
    scrolling: {
        height: "4rem",
        y: "0%",
        transition: containerTransition,
    },
    hidden: {
        height: "4rem",
        y: "-100%",
        transition: containerTransition,
    },
}

const barTransition = {
    duration: 0.4,
    delay: 0.05,
    ease: [0.76, 0, 0.24, 1],
}

export const headerBar: Variants = {
    initial: {
        backgroundColor: "color-mix(in oklab, var(--color-background) 0%, transparent)",
        color: "var(--color-background)",
        transition: barTransition,
    },
    scrolled: {
        backgroundColor: "color-mix(in oklab, var(--color-background) 100%, transparent)",
        color: "var(--color-foreground)",
        transition: barTransition,
    },
}

const bodyTransition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1],
}

export const headerBody: Variants = {
    initial: {
        y: "100vh",
    },
    enter: {
        y: 0,
        transition: bodyTransition,
    },
    exit: {
        y: "-100vh",
        transition: {
            ...bodyTransition,
            delay: 0.25,
        },
    },
}

export const navItem: Variants = {
    initial: {
        y: "100%",
    },
    enter: (i) => ({
        y: 0,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }),
    exit: (i) => ({
        y: "-100%",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    }),
}

export const navInfo: Variants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }),
    exit: (i) => ({
        y: -50,
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    }),
}
