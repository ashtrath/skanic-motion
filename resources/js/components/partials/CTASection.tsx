import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'motion/react'
import { ReactNode, useRef } from 'react'

interface CTASectionProps {
    className?: string
    children?: ReactNode
    image: string
}

const SVG_PATH_TOP =
    'm0 24.381 37.5-2.286L75 12.952l37.5 11.429L150 12.952l37.5 6.096L225 28.19 262.5 32 300 16.762l37.5 12.19L375 18.286l37.5 3.047 37.5-7.619 37.5 9.905 37.5-1.524 37.5-12.19L600 7.619l37.5 15.238 37.5-1.524 37.5 9.143 37.5-9.143 37.5 7.62L825 7.618l37.5 4.572 37.5 7.618V0H0v24.381Z'
const SVG_PATH_BOTTOM =
    'm0 2.087 37.5 4.174L75 16l37.5-4.174L150 0l37.5 20.87L225 17.39l37.5-9.739L300 22.261l37.5.695L375 20.87l37.5-12.522L450 0l37.5 18.783L525 .696l37.5 17.391 37.5.696 37.5-9.74 37.5-6.26 37.5 3.478L750 24.348l37.5-1.392 37.5-3.478 37.5-6.26 37.5-1.392V32H0V2.087Z'

export default function CTASection({
    className,
    children,
    image,
}: CTASectionProps) {
    const container = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

    return (
        <section
            ref={container}
            className="relative flex h-[526px] items-center justify-center overflow-hidden"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 900 32"
                className="-mt-5 absolute top-0 left-0 z-20 w-full"
            >
                <path className="fill-background" d={SVG_PATH_TOP} />
            </svg>

            <div className={cn('container relative z-10 size-full', className)}>
                {children}
            </div>

            <div className="fixed top-[-5vh] left-0 h-[120vh] w-full">
                <motion.div
                    style={{ y }}
                    className="relative size-full before:absolute before:inset-0 before:z-[5] before:bg-black/20"
                >
                    <img
                        src={image}
                        alt="image"
                        className="absolute inset-0 size-full object-cover"
                    />
                </motion.div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 900 32"
                className="-mb-5 absolute bottom-0 left-0 z-20 w-full"
            >
                <path className="fill-background" d={SVG_PATH_BOTTOM} />
            </svg>
        </section>
    )
}
