"use client"

import { useCarousel } from "@/components/ui/Carousel"
import { isExpandedDoc } from "@/lib/utils/isExpandedDoc"
import type { Project, ProjectSlides } from "@/payload/payload-types"

export default function HeroSlideshowClient({ slides }: { slides: ProjectSlides }) {
    const { currentSlide } = useCarousel()
    const project = slides?.[currentSlide]?.project

    if (!isExpandedDoc<Project>(project)) return null

    return (
        <div className="shrink-0 space-y-0.5 text-center font-display text-background uppercase tracking-[2px]">
            <h1 className="font-bold">{project.title}</h1>
            <p className="text-sm">{new Date(project.projectDate).getFullYear()}</p>
        </div>
    )
}
