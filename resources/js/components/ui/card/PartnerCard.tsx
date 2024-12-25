interface PartnerCardProps {
    name: string
    image: string
    link?: string
}

export default function PartnerCard({ name, image, link }: PartnerCardProps) {
    return (
        <div
            className="group relative aspect-[3/2] w-36 rounded border border-foreground"
            style={{ willChange: 'transform, opacity' }}
        >
            <div className="flex size-full items-center justify-center transition-transform duration-700 ease-[cubic-bezier(.77,0,.175,1)] group-hover:translate-y-[-24px]">
                <img
                    decoding="async"
                    src={`/storage/images/${image}`}
                    alt={name}
                    className="max-w-[58%] flex-[0_0_58%]"
                    style={{
                        filter: 'invert(0%) sepia(2%) saturate(5429%) hue-rotate(9deg) brightness(83%) contrast(84%)',
                    }}
                />
            </div>

            <div className="absolute inset-0 flex origin-bottom scale-y-0 items-center justify-center bg-foreground transition-all duration-700 ease-[cubic-bezier(.77,0,.175,1)] group-hover:scale-y-100">
                <a href={link}>
                    <h5 className="translate-y-4 font-bold text-background text-lg opacity-0 transition-all duration-[480ms] ease-[cubic-bezier(.77,0,.175,1)] group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-200">
                        {name}
                    </h5>
                </a>
            </div>
        </div>
    )
}
