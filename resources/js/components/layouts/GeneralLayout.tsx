import { layoutSlideUp } from '@/animations'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { type ReactNode, useEffect, useState } from 'react'
import Footer from '../partials/Footer'
import Navbar from '../partials/Navbar'
import Preloader from '../partials/Preloader'
import Cursor from '../ui/cursor'

interface GeneralLayoutProps {
    className?: string
    children: ReactNode
}

export default function GeneralLayout({
    children,
    className,
}: GeneralLayoutProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const preloaderTimeout = setTimeout(() => {
            setIsLoading(false)
            document.body.style.cursor = 'default'
            window.scrollTo(0, 0)
        }, 2000)

        return () => clearTimeout(preloaderTimeout)
    }, [])

    return (
        <>
            <Cursor />
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Navbar />
            <motion.main
                variants={layoutSlideUp}
                initial="initial"
                animate="enter"
                className={cn('min-h-screen', className)}
            >
                {children}
            </motion.main>
            <Footer />
        </>
    )
}
