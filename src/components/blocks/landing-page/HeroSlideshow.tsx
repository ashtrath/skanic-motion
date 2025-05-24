import { SiFacebook, SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons"

import {
    Carousel,
    CarouselContent,
    CarouselIndicator,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/Carousel"
import Media from "@/components/ui/Media"
import type { ProjectSlides } from "@/payload/payload-types"
import HeroSlideshowClient from "./HeroSlideshow.client"

export default function HeroSlideshow({
    id,
    blockType,
    slides,
}: {
    id: string
    blockType: string
    slides: ProjectSlides
}) {
    return (
        <section id={`${blockType}-${id}`} className="relative h-[100dvh] w-full overflow-hidden">
            <Carousel
                opts={{ align: "start", loop: true }}
                className="vignette-edges size-full [&>[data-slot=carousel-content]]:size-full"
            >
                <CarouselContent className="-ml-0 size-full">
                    {slides?.map((slide) => (
                        <CarouselItem key={slide.id} className="pl-0">
                            <Media
                                resource={slide.coverImage}
                                className="size-full object-cover object-center"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute inset-x-0 bottom-0 flex items-center px-22.5 py-8">
                    <nav className="flex w-1/2 justify-start gap-6">
                        <a
                            href="https://www.facebook.com/animasismkn1ciomas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiFacebook className="size-6 text-background transition-colors duration-300 ease-in-out hover:text-primary" />
                        </a>
                        <a
                            href="https://www.instagram.com/animasi_smkn1ciomas"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiInstagram className="size-6 text-background transition-colors duration-300 ease-in-out hover:text-primary" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@skanicmotion"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiTiktok className="size-6 text-background transition-colors duration-300 ease-in-out hover:text-primary" />
                        </a>
                    </nav>
                    <HeroSlideshowClient slides={slides} />
                    <div className="flex w-1/2 justify-end gap-8">
                        <CarouselPrevious className="size-16 border-background bg-transparent text-background hover:bg-background hover:text-foreground [&_svg]:size-8! [&_svg]:stroke-1" />
                        <CarouselNext className="size-16 border-background bg-transparent text-background hover:bg-background hover:text-foreground [&_svg]:size-8! [&_svg]:stroke-1" />
                    </div>
                </div>
                <CarouselIndicator className="absolute inset-x-0 bottom-4 mx-auto max-w-sm" />
            </Carousel>
        </section>
    )
}
