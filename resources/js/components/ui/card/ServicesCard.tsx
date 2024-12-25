import { Link } from '@inertiajs/react'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
    icon: LucideIcon | string
    title: string
    description: string
    href: string
}

export default function ServicesCard({
    icon: Icon,
    title,
    description,
    href,
}: ServiceCardProps) {
    return (
        <div className="flex min-h-72 max-w-80 flex-col justify-between">
            <div>
                <div className="-ml-1">
                    <div className="size-fit rounded-full bg-primary p-6">
                        <Icon className="size-8 stroke-1 text-background" />
                    </div>
                </div>
                <h3 className="mt-8 whitespace-nowrap font-display font-medium text-3xl">
                    {title}
                </h3>
                <p className="mt-4">{description}</p>
            </div>
            <Link
                href={href}
                className="group inline-flex w-full items-center justify-between"
            >
                Learn more about our {title}
                <ArrowRight className="size-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
        </div>
    )
}
