import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import {
    SiFacebook,
    SiInstagram,
    SiTiktok,
} from '@icons-pack/react-simple-icons'
import { motion, useScroll, useTransform } from 'motion/react'
import { ReactNode, useEffect, useState } from 'react'

interface HeroSlideshowProps {
    children?: ReactNode
}

export default function HeroSlideshow({ children }: HeroSlideshowProps) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) return

        const updateState = () => {
            setCount(api.scrollSnapList().length)
            setCurrent(api.selectedScrollSnap() + 1)
        }
        updateState()

        api.on('select', updateState)
        return () => {
            api.off('select', updateState)
        }
    }, [api])

    const { scrollYProgress } = useScroll({
        offset: ['start start', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

    return (
        <Carousel
            setApi={setApi}
            opts={{ align: 'start', loop: true }}
            className="gradient-overlay relative h-screen w-full overflow-hidden"
        >
            <motion.div style={{ y }} className="relative size-full">
                <CarouselContent className="-ml-0">{children}</CarouselContent>
            </motion.div>
            <div className="pointer-events-none absolute bottom-6 left-0 w-full space-y-4">
                <div className="container flex items-center justify-between">
                    <ul className="pointer-events-auto flex items-center gap-6">
                        <li>
                            <a
                                href="https://www.tiktok.com/@skanicmotion"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiFacebook className="size-6 text-background transition-colors duration-200 hover:text-accent" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/animasismkn1ciomas"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiInstagram className="size-6 text-background transition-colors duration-200 hover:text-accent" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/animasi_smkn1ciomas"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiTiktok className="size-6 text-background transition-colors duration-200 hover:text-accent" />
                            </a>
                        </li>
                    </ul>
                    <div className="space-y-0.5 text-center font-display text-background uppercase tracking-[2px]">
                        <h1 className="font-bold">Tegar Beri Iman 2</h1>
                        <p className="text-sm">2024</p>
                    </div>
                    <div className="pointer-events-auto flex items-center gap-8">
                        <CarouselPrevious className="size-16 border-background bg-transparent text-background hover:bg-background hover:text-foreground [&_svg]:size-8 [&_svg]:stroke-1" />
                        <CarouselNext className="size-16 border-background bg-transparent text-background hover:bg-background hover:text-foreground [&_svg]:size-8 [&_svg]:stroke-1" />
                    </div>
                </div>
                <div className="pointer-events-auto mx-auto flex max-w-sm items-center justify-center gap-4">
                    {new Array(count).fill(null).map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                'h-[3px] flex-grow bg-white/50 p-0',
                                index + 1 === current ? 'bg-accent' : '',
                            )}
                            onClick={() => api && api.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </Carousel>
    )
}
