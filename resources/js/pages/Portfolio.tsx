import GeneralLayout from '@/components/layouts/GeneralLayout';
import { Head } from '@inertiajs/react';

export default function Portfolio() {
    return (
        <GeneralLayout>
            <Head>
                <title>Portfolio | SKANIC Motion Studio</title>
            </Head>

            <section
                id="portfolio"
                className="min-h-screen bg-foreground"
            ></section>
        </GeneralLayout>
    );
}
