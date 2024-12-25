import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import ApplicationLogo from '../ui/ApplicationLogo'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsScrolled(!entry.isIntersecting),
            { threshold: 0.8 },
        )
        const heroElement = document.getElementById('hero')
        if (heroElement) observer.observe(heroElement)

        return () => {
            if (heroElement) observer.unobserve(heroElement)
        }
    }, [])

    const routes = [
        {
            label: 'Portfolio',
            route: route('page.portfolio'),
            active: route().current('page.portfolio'),
        },
        {
            label: 'About',
            route: '#',
            active: false,
        },
        {
            label: 'Services',
            route: '#',
            active: false,
        },
        {
            label: 'Catalog',
            route: '#',
            active: false,
        },
        {
            label: 'Contact',
            route: '#',
            active: false,
        },
    ]

    return (
        <header className="fixed inset-0 z-50 h-min">
            <div className="relative flex h-32 w-full items-center p-5 pb-10">
                <div
                    className={cn(
                        'absolute inset-0 z-[1] bg-[radial-gradient(transparent_1px,_#fffafa66_1px)] bg-[size:4px_4px] bg-transparent backdrop-blur-sm transition-opacity duration-150 ease-in-out',
                        isScrolled ? 'opacity-100' : 'opacity-0',
                    )}
                    style={{
                        mask: 'linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)',
                    }}
                ></div>
                <nav className="container z-[1] flex items-stretch justify-between">
                    <div>
                        <Link href="/">
                            <ApplicationLogo
                                mainColorClass={cn(
                                    'transition-colors duration-200 ease-in-out',
                                    isScrolled
                                        ? 'fill-primary'
                                        : 'fill-background',
                                )}
                            />
                        </Link>
                    </div>
                    <div className="flex items-stretch gap-6 font-display">
                        {routes.map(({ label, route, active }) => (
                            <Link
                                key={label}
                                href={route}
                                className={cn(
                                    'group flex items-center px-5 font-medium uppercase transition-all duration-300 ease-in-out',
                                    isScrolled
                                        ? 'text-foreground'
                                        : 'text-background',
                                )}
                            >
                                <span
                                    className={cn(
                                        'bg-[length:0%_2px] bg-gradient-to-r bg-left-bottom from-current to-current bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_2px]',
                                        active && 'bg-[length:100%_2px]',
                                    )}
                                >
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}
