import { ArrowRight } from "lucide-react"
import type { IconName } from "lucide-react/dynamic"
import Link from "next/link"

import type { Service } from "@/payload/payload-types"
import DynamicIcon from "../ui/DynamicIcon"

export default function FeatureCard({ icon, title, description, slug }: Service) {
    return (
        <article className="flex max-w-80 flex-col justify-between gap-2">
            <div>
                <div className="-ml-1 size-20 rounded-full bg-primary p-6">
                    <DynamicIcon name={icon as IconName} className="size-8 text-background" />
                </div>
                <h3 className="mt-8 whitespace-nowrap font-display font-medium text-3xl">
                    {title}
                </h3>
                <p className="mt-4">{description}</p>
            </div>
            <Link
                href={`/${slug}`}
                className="group inline-flex w-full items-center justify-between"
            >
                Learn more about our {title}
                <ArrowRight className="size-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
        </article>
    )
}
