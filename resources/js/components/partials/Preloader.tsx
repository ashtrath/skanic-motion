import { loaderSlideUp, text } from '@/animations'
import { motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'

const words = [
    'Hello',
    'Bonjour',
    'Ciao',
    'Olà',
    'やあ',
    '안녕',
    'Hallå',
    'Guten tag',
    'Hallo',
]

export default function Preloader() {
    const [index, setIndex] = useState(0)
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        function resize() {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        resize()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    useEffect(() => {
        const timeoutId = setTimeout(
            () => {
                if (index < words.length - 1) {
                    setIndex(index + 1)
                }
            },
            index === 0 ? 1000 : 150,
        )

        return () => clearTimeout(timeoutId)
    }, [index])

    const initialPath = useMemo(
        () =>
            `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`,
        [dimension],
    )
    const targetPath = useMemo(
        () =>
            `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`,
        [dimension],
    )

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    }

    return (
        <motion.div
            variants={loaderSlideUp}
            exit="exit"
            initial
            className="fixed z-[998] flex h-screen w-screen items-center justify-center bg-background"
        >
            <motion.p
                variants={text}
                animate="enter"
                initial="initial"
                className="absolute z-[1] flex items-center text-5xl text-foreground before:mr-1.5 before:block before:size-1.5 before:rounded-full before:bg-foreground"
            >
                {words[index]}
            </motion.p>
            <svg className="pointer-events-none absolute top-0 left-0 h-[calc(100%_+_300px)] w-full">
                <motion.path
                    variants={curve}
                    exit="exit"
                    initial="initial"
                    className="fill-background"
                />
            </svg>
        </motion.div>
    )
}
