import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
} from '@icons-pack/react-simple-icons';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '../ui/ApplicationLogo';

export default function Footer() {
    return (
        <footer
            className="relative h-[526px] border-t border-gray-400 bg-background"
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
            <div className="container fixed bottom-0 left-0 right-0 h-[526px] w-full">
                <div className="flex justify-between py-36">
                    <Link href="#">
                        <ApplicationLogo />
                    </Link>
                    <div className="space-y-4">
                        <h4 className="font-display text-xl font-medium">
                            SKANIC Motion Studio
                        </h4>
                        <address className="not-italic text-primary">
                            SMKN 1 Ciomas, Laladon, Kec. Ciomas, <br />
                            Kabupaten Bogor, Jawa Barat 16610
                        </address>
                        <a
                            href="mailto:animasi.smkn1ciomas@gmail.com"
                            className="block text-primary"
                        >
                            animasi.smkn1ciomas@gmail.com
                        </a>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-display text-xl font-medium">
                            Socials
                        </h4>
                        <div className="flex gap-4">
                            <a className="flex size-12 items-center justify-center rounded-full border border-foreground/50 text-foreground transition-colors duration-200 ease-out hover:text-primary">
                                <SiFacebook className="size-5" />
                            </a>
                            <a className="flex size-12 items-center justify-center rounded-full border border-foreground/50 text-foreground transition-colors duration-200 ease-out hover:text-primary">
                                <SiInstagram className="size-5" />
                            </a>
                            <a className="flex size-12 items-center justify-center rounded-full border border-foreground/50 text-foreground transition-colors duration-200 ease-out hover:text-primary">
                                <SiLinkedin className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-400 py-8">
                    <small className="block text-base font-medium text-foreground/80">
                        Copyright &copy; 2015-2024. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}
