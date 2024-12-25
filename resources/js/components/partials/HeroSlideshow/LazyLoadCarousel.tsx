import { CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { SlideshowData } from '@/types'
import { useCallback, useState } from 'react'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

interface LazyLoadCarouselProps extends Pick<SlideshowData, 'fileType'> {
    index: number
    src: string
    inView: boolean
}

export default function LazyLoadCarousel({
    index,
    src,
    inView,
    fileType,
}: LazyLoadCarouselProps) {
    const [hasLoaded, setHasLoaded] = useState(false)

    const setLoaded = useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView])

    return (
        <CarouselItem key={index} className="pl-0">
            {fileType === 'image' && (
                <img
                    src={inView ? src : PLACEHOLDER_SRC}
                    onLoad={setLoaded}
                    data-src={src}
                    alt={`Slideshow ${index}`}
                    className={cn(
                        'h-screen w-full object-cover opacity-0 transition-opacity duration-200 ease-in-out',
                        hasLoaded && 'opacity-100',
                    )}
                />
            )}
            {fileType === 'video' && (
                <video
                    src={inView ? src : PLACEHOLDER_SRC}
                    onLoadedData={setLoaded}
                    data-src={src}
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="h-screen w-full object-cover"
                />
            )}
        </CarouselItem>
    )
}
