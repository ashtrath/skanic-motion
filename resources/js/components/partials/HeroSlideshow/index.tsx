import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import type { SlideshowData } from '@/types'
import {
    SiFacebook,
    SiInstagram,
    SiTiktok,
} from '@icons-pack/react-simple-icons'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import LazyLoadCarousel from './LazyLoadCarousel'

interface HeroSlideshowProps {
    items: SlideshowData[]
}

export default function HeroSlideshow({ items }: HeroSlideshowProps) {
    const [api, setApi] = useState<CarouselApi | null>(null)
    const [current, setCurrent] = useState(0)
    const [slidesInView, setSlidesInView] = useState<Set<number>>(new Set())

    const updateSlidesInView = useCallback((api: CarouselApi) => {
        const inViewSlides = api?.slidesInView()
        setSlidesInView((prev) => {
            const updatedSet = new Set(prev)
            inViewSlides?.forEach((index) => updatedSet.add(index))
            return updatedSet
        })
    }, [])

    useEffect(() => {
        if (!api) return

        const updateCurrentSlide = () => {
            setCurrent(api.selectedScrollSnap())
        }

        updateCurrentSlide()
        updateSlidesInView(api)

        api.on('slidesInView', updateSlidesInView)
        api.on('reInit', () => updateSlidesInView(api))
        api.on('select', updateCurrentSlide)
        return () => {
            api.off('slidesInView', updateSlidesInView)
            api.off('reInit', updateSlidesInView)
            api.off('select', updateCurrentSlide)
        }
    }, [api, updateSlidesInView])

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
                <CarouselContent className="-ml-0">
                    {items.map((item, index) => (
                        <LazyLoadCarousel
                            key={index}
                            index={index}
                            src={item.src}
                            fileType={item.fileType}
                            inView={slidesInView.has(index)}
                        />
                    ))}
                </CarouselContent>
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
                        <h1 className="font-bold">{items[current]?.title}</h1>
                        <p className="text-sm">{items[current]?.year}</p>
                    </div>
                    <div className="pointer-events-auto flex items-center gap-8">
                        <CarouselPrevious className="size-16 border-background bg-transparent text-background hover:bg-background hover:text-foreground [&_svg]:size-8 [&_svg]:stroke-1" />
                        <CarouselNext className="size-16 border-background bg-transparent text-background hover:bg-background hover:text-foreground [&_svg]:size-8 [&_svg]:stroke-1" />
                    </div>
                </div>
                <div className="pointer-events-auto mx-auto flex max-w-sm items-center justify-center gap-4">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                'h-[3px] flex-grow bg-white/50 p-0',
                                index === current ? 'bg-accent' : '',
                            )}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </Carousel>
    )
}
