import GeneralLayout from '@/components/layouts/GeneralLayout'
import CTASection from '@/components/partials/CTASection'
import HeroSlideshow from '@/components/partials/HeroSlideshow'
import { Button } from '@/components/ui/button'
import PartnerCard from '@/components/ui/card/PartnerCard'
import ServicesCard from '@/components/ui/card/ServicesCard'
import Magnet from '@/components/ui/magnet'
import { SlideshowData } from '@/types'
import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
} from '@icons-pack/react-simple-icons'
import { Head, Link } from '@inertiajs/react'
import { Box, Brush, ChevronRight, Clapperboard, Frame } from 'lucide-react'
import { ReactNode } from 'react'

const SLIDESHOW_DATA: SlideshowData[] = [
    {
        title: "Tegar Beri Iman 1",
        year: "2023",
        src: "https://lh3.googleusercontent.com/fife/ALs6j_EqBiWL_WaXD-p-YvH8z79CtmkG3hpw7Ryc9tBKIdzZxB0ZmVQg39cUOOBPSdL4ONLvswwf2o7X9CnuA88lA8uh2w-86oDjHOoNwiwK-kzR7Zo-dfDPOxVOOchVN-V06RUTuubskJCMG-qF3K8gG_6mr4NFrbx3Z5t0DSDtxiVQanNs2dKujuzNy18V_T_yFoSM-sI7ysloEJtba_rtNmYD2HY6ojI-uBuycC3HuHhWuOhJCjaYKWpoBZ2iLslrgLcHTaUnPvp212favWu9cQu8BXSy68pBZKaWp3irJw9D5c9RDqlwswaINwFWgRTa0hHgHkuNx-68CjJf3fQWovq1tQ3IOhxmPQXB8UCsIdgbmj-ROpNmwy2jjyYYSn2eduI6HX3gPaeD9pNVDxTi2txCZsU03N68M3tsRxXfSEm1nQhR6grLTSv-M0acXdxWWgHbCxHBL-jHy6yYRj9LswqM_erGzHk4bqd7kHjdRTi_rOHE0eJ7WCBezvu-293QD9HfAmUZeiRdXwraEGDKwBExwtdycrcKbKg02mIsjrfxlD9ML0nQIBgYEpnWRC6NgZSaqd3_uTT3sOHfuLu9nGv3UBhL0iCsBJq8CPm5v8NHYXcmZ29o217ThHAatXJ1O5HBSlCaAQdjo1IlFkaZSL8bwbBYBuFwG8C3UfI7d1HVKebaczPqXHQQWSXwzep0bAq2PbDMB72qX-LSjrXLuzRty04Bx95eFfwixPbbRYdK7hrr7nDRkOD-15VnWHOQOey2CK3nbwNQCgKC2QBawFC0u7tLMST8olaJN8vIWXaswG7Bu3-Epn4ytjAIIi0pcwYUDXEqGKhwHEwdHbW3Sfd8dtYbc17ecHnwIzE291xv-aQgFHbWZ-G6lcdcDDcn5vDoiznVLjK4VY5gN19br1O5eqjYLmIFKfUkKOlBCq9jQarXvvrSooZWUwlXch-uaxxvaB25cSSX1B2X3hY1Y_y2O0k2WuteP3DLbIiaw2Z2FbtLPxywDIGAcpssz9nkeTb466a7XcWvLYrANwYRLoW_PUdYhvYAmP-PCNmwKeTy09n4w9bAZNISD5TH8anxiT15PuAPlw8GJ6_jLfPVPOfKUhiQZNtiQlXlhZUIHYKJgofV6JwwxvzUp-51pF4iXkB6El8BA99t_uM5P_tA3qV_sAqbyGd1hx_6SQhXNP1ZlLwbeVLUdLG778EDHwjfY0E2IDUW_IAk0dnnqNS5CQsCPIpL4lUfx_mPm0IJevQp_u7qITaTHeEGbXwVXKXaXEEWXDFI-EsEWy0hBrXCTbiWUKWk0ysM_UeZHIBwDXpLJaqhfOxGL9dXPClEMR4UM-A3AkUrw7pCyJy_Xi1rhXH8NM2tc9S4KGGiIs9lV94jx9IV-a_plnBky2S1dkcgFFJSy-K8JyF8bHPPRAWd2ZVYbhYeLksjfzxnpbfAEeuiKBEMCUPZwRa83fU3uKcZdWkYvVcx0NGmGju2-cf94l5MvOOCWdpAUYIEVEL2DeRGvHcY-04GRT6N4NN2KnHyrGmrs2SyiSXHiVpjSHM4vyVhT_ut7U_qopBOTbYlAYQD9axn6Os_BhVslrJXY8i0NrW0TlCuEQmupEN3ykIMNmZ8WpbMh4t9txBa-RNpEKKvdxkb7O4Y6QzfEfoKwQKTvdxrHfwipyuoAbnmgpGqBxiKanFKsdT-8MU0YDEadqhxTRIf-S3gE2Z4Np4rX5foppY1EarQdvNeLeA47nuhKl9No4Rwdq8iZebSByaUWyHr8YkdpqDnoq-uK8eSHDrpKp61Z-InfAFRhmcVtDVhoc4yhorlA-uoH1GYwz5eNKuUbnogCMYxWAlLJL7E_Jfzwb7xlWic_Enbow=w1920-h951",
        fileType: "image",
    },
    {
        title: "Tegar Beri Iman 2",
        year: "2024",
        src: "/storage/videos/Exterior.mp4",
        fileType: "video",
    },
    {
        title: "Tegar Beri Iman 3",
        year: "2025",
        src: "https://lh3.googleusercontent.com/fife/ALs6j_EqBiWL_WaXD-p-YvH8z79CtmkG3hpw7Ryc9tBKIdzZxB0ZmVQg39cUOOBPSdL4ONLvswwf2o7X9CnuA88lA8uh2w-86oDjHOoNwiwK-kzR7Zo-dfDPOxVOOchVN-V06RUTuubskJCMG-qF3K8gG_6mr4NFrbx3Z5t0DSDtxiVQanNs2dKujuzNy18V_T_yFoSM-sI7ysloEJtba_rtNmYD2HY6ojI-uBuycC3HuHhWuOhJCjaYKWpoBZ2iLslrgLcHTaUnPvp212favWu9cQu8BXSy68pBZKaWp3irJw9D5c9RDqlwswaINwFWgRTa0hHgHkuNx-68CjJf3fQWovq1tQ3IOhxmPQXB8UCsIdgbmj-ROpNmwy2jjyYYSn2eduI6HX3gPaeD9pNVDxTi2txCZsU03N68M3tsRxXfSEm1nQhR6grLTSv-M0acXdxWWgHbCxHBL-jHy6yYRj9LswqM_erGzHk4bqd7kHjdRTi_rOHE0eJ7WCBezvu-293QD9HfAmUZeiRdXwraEGDKwBExwtdycrcKbKg02mIsjrfxlD9ML0nQIBgYEpnWRC6NgZSaqd3_uTT3sOHfuLu9nGv3UBhL0iCsBJq8CPm5v8NHYXcmZ29o217ThHAatXJ1O5HBSlCaAQdjo1IlFkaZSL8bwbBYBuFwG8C3UfI7d1HVKebaczPqXHQQWSXwzep0bAq2PbDMB72qX-LSjrXLuzRty04Bx95eFfwixPbbRYdK7hrr7nDRkOD-15VnWHOQOey2CK3nbwNQCgKC2QBawFC0u7tLMST8olaJN8vIWXaswG7Bu3-Epn4ytjAIIi0pcwYUDXEqGKhwHEwdHbW3Sfd8dtYbc17ecHnwIzE291xv-aQgFHbWZ-G6lcdcDDcn5vDoiznVLjK4VY5gN19br1O5eqjYLmIFKfUkKOlBCq9jQarXvvrSooZWUwlXch-uaxxvaB25cSSX1B2X3hY1Y_y2O0k2WuteP3DLbIiaw2Z2FbtLPxywDIGAcpssz9nkeTb466a7XcWvLYrANwYRLoW_PUdYhvYAmP-PCNmwKeTy09n4w9bAZNISD5TH8anxiT15PuAPlw8GJ6_jLfPVPOfKUhiQZNtiQlXlhZUIHYKJgofV6JwwxvzUp-51pF4iXkB6El8BA99t_uM5P_tA3qV_sAqbyGd1hx_6SQhXNP1ZlLwbeVLUdLG778EDHwjfY0E2IDUW_IAk0dnnqNS5CQsCPIpL4lUfx_mPm0IJevQp_u7qITaTHeEGbXwVXKXaXEEWXDFI-EsEWy0hBrXCTbiWUKWk0ysM_UeZHIBwDXpLJaqhfOxGL9dXPClEMR4UM-A3AkUrw7pCyJy_Xi1rhXH8NM2tc9S4KGGiIs9lV94jx9IV-a_plnBky2S1dkcgFFJSy-K8JyF8bHPPRAWd2ZVYbhYeLksjfzxnpbfAEeuiKBEMCUPZwRa83fU3uKcZdWkYvVcx0NGmGju2-cf94l5MvOOCWdpAUYIEVEL2DeRGvHcY-04GRT6N4NN2KnHyrGmrs2SyiSXHiVpjSHM4vyVhT_ut7U_qopBOTbYlAYQD9axn6Os_BhVslrJXY8i0NrW0TlCuEQmupEN3ykIMNmZ8WpbMh4t9txBa-RNpEKKvdxkb7O4Y6QzfEfoKwQKTvdxrHfwipyuoAbnmgpGqBxiKanFKsdT-8MU0YDEadqhxTRIf-S3gE2Z4Np4rX5foppY1EarQdvNeLeA47nuhKl9No4Rwdq8iZebSByaUWyHr8YkdpqDnoq-uK8eSHDrpKp61Z-InfAFRhmcVtDVhoc4yhorlA-uoH1GYwz5eNKuUbnogCMYxWAlLJL7E_Jfzwb7xlWic_Enbow=w1920-h951",
        fileType: "image",
    },
    {
        title: "Tegar Beri Iman 4",
        year: "2026",
        src: "/storage/videos/Beach.mp4",
        fileType: "video",
    },
]

const Home = () => {
    return (
        <>
            <Head>
                <title>Animation Studio Indonesia</title>
            </Head>

            <section id="hero" className="flex h-screen w-full justify-center">
                <HeroSlideshow items={SLIDESHOW_DATA} />
            </section>

            <section
                id="about"
                className="container flex w-full items-center justify-between py-[75px] pb-24"
            >
                <div className="space-y-8">
                    <p className="ml-1 uppercase tracking-[2px]">About Us</p>
                    <div className="max-w-xl space-y-6">
                        <h2 className="font-bold font-display text-5xl">
                            <span className="text-primary">
                                SKANI<span className="text-accent">C</span>{' '}
                                Motion
                            </span>{' '}
                            is an Animation Studio
                        </h2>
                        <p className="text-pretty text-muted">
                            We're experts in breaking boundaries, conveying
                            emotions, and establishing a brand presence through
                            dynamic storytelling. <br />
                            <br />
                            Our studio's weapon of choice? Cutting-edge motion
                            graphics, animation techniques, and technology
                            integration capable of slicing through the clutter.
                            Our team is well-versed in the use of
                            industry-standard software and tools, enabling us to
                            bring your ideas to life with precision and
                            creativity. Join us in unleashing the power of
                            storytelling through animation and motion graphics.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full" asChild>
                        <Magnet>
                            <Link href="#">Read More</Link>
                        </Magnet>
                    </Button>
                </div>
                <div>
                    <img
                        src="/storage/images/Decorator.webp"
                        alt="Image Decoration"
                        className="w-full max-w-3xl opacity-30"
                    />
                </div>
            </section>

            <CTASection
                image="/storage/images/ContactCTA.jpg"
                className="flex flex-col justify-center gap-6"
            >
                <h2 className="font-bold font-display text-5xl text-background">
                    Got a <span className="text-accent">Story</span> to Tell?
                    <br />
                    Let's Make It Move!
                </h2>
                <Button className="w-fit">
                    <Link href="#">Contact Us</Link>
                    <ChevronRight className="size-6" />
                </Button>
            </CTASection>

            <section
                id="partner"
                className="container flex w-full items-start justify-between py-24"
            >
                <div className="mt-4 grid grid-cols-4 gap-6">
                    {[...Array(16)].map((_, i) => (
                        <PartnerCard
                            key={i}
                            name="Lazada"
                            image="Lazada.webp"
                            link="#"
                        />
                    ))}
                </div>
                <div className="space-y-8">
                    <p className="ml-1 uppercase tracking-[2px]">
                        Folks we've partnered with
                    </p>
                    <div className="max-w-lg space-y-6">
                        <h2 className="font-bold font-display text-5xl">
                            Our Animation Studio Clients
                        </h2>
                        <p className="text-pretty text-muted [&_a]:font-medium [&_a]:text-primary hover:[&_a]:underline">
                            Our studio, SKANIC Motion, based in Indonesia,
                            excels at sparking imagination and creating
                            compelling brand stories through stunning animation.
                            Collaborating with leading brands, agencies, and
                            creative talents worldwide, we’ve had the honor of
                            transforming visionary concepts into breathtaking
                            realities. <br />
                            <br />
                            Explore <Link href="#">our portfolio</Link>, become
                            part of our growing community of satisfied partners,
                            and experience the artistry of our state-of-the-art
                            motion graphics and seamless animation solutions.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection
                image="/storage/images/CatalogCTA.png"
                className="flex flex-col items-end justify-center"
            >
                <div className="space-y-6">
                    <h2 className="font-bold font-display text-5xl text-background">
                        Find Your Animation
                        <br />
                        Secret Weapon Here!
                    </h2>
                    <Button className="w-fit">
                        <Link href="#">Explore our Catalog</Link>
                        <ChevronRight className="size-6" />
                    </Button>
                </div>
            </CTASection>

            <section
                id="services"
                className="container flex w-full items-center justify-between py-24"
            >
                <div className="space-y-8 self-start">
                    <p className="ml-1 uppercase tracking-[2px]">Services</p>
                    <div className="max-w-sm space-y-6">
                        <h2 className="font-bold font-display text-5xl">
                            <span className="text-primary">
                                SKANI<span className="text-accent">C</span>{' '}
                                Motion
                            </span>{' '}
                            Specialities
                        </h2>
                        <p className="text-pretty text-muted">
                            At SKANIC Motion, our future is rooted in helping
                            teams unleash their potential. Here are some of the
                            services we provide at our animation and motion
                            graphics studio in Indonesia.
                        </p>
                    </div>
                    <Button variant="outline" className="rounded-full" asChild>
                        <Magnet>
                            <Link href="#">All Services</Link>
                        </Magnet>
                    </Button>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <ServicesCard
                        icon={Brush}
                        title="2D Animation"
                        description="Illustrate movements that bring flat characters, objects and backgrounds to life."
                        href="#"
                    />
                    <ServicesCard
                        icon={Box}
                        title="3D Animation"
                        description="Enter a three-dimensional space where models and objects unlock a new reality."
                        href="#"
                    />
                    <ServicesCard
                        icon={Frame}
                        title="Motion Graphic"
                        description="Illustrate movements that bring flat characters, objects and backgrounds to life."
                        href="#"
                    />
                    <ServicesCard
                        icon={Clapperboard}
                        title="VFX & Video Editing"
                        description="Illustrate movements that bring flat characters, objects and backgrounds to life."
                        href="#"
                    />
                </div>
            </section>

            <section
                id="contact"
                className="container flex w-full items-center gap-24 py-24"
            >
                <div className="space-y-8 self-start">
                    <p className="ml-1 uppercase tracking-[2px]">Contact Us</p>
                    <div className="max-w-sm space-y-6">
                        <h2 className="font-bold font-display text-5xl">
                            Get in Touch.
                        </h2>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg">Address</h3>
                            <address className="not-italic">
                                SMKN 1 Ciomas, Laladon, Kec. Ciomas, Kabupaten
                                Bogor, Jawa Barat 16610
                            </address>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg">Contact Us</h3>
                            <a
                                href="mailto:animasi.smkn1ciomas@gmail.com"
                                className="group block font-medium text-primary"
                            >
                                <span className="bg-[length:0%_2px] bg-gradient-to-r bg-left-bottom from-current to-current bg-no-repeat pb-0.5 transition-all duration-300 ease-out group-hover:bg-[length:100%_2px]">
                                    animasi.smkn1ciomas@gmail.com
                                </span>
                            </a>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-bold text-lg">Follow Us</h3>
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
                </div>
                <form
                    action=""
                    method="post"
                    className="w-full max-w-xl space-y-4 [&_label]:block"
                >
                    <label>
                        Your name
                        <input
                            type="text"
                            className="mt-0 w-full border-0 border-gray-400 border-b bg-transparent px-0 py-3 font-medium text-lg transition-[border] duration-300 ease-out focus:border-black focus:ring-0"
                        />
                    </label>
                    <label>
                        Your email
                        <input
                            type="email"
                            className="mt-0 w-full border-0 border-gray-400 border-b bg-transparent px-0 py-3 font-medium text-lg transition-[border] duration-300 ease-out focus:border-black focus:ring-0"
                        />
                    </label>
                    <label>
                        Subject
                        <input
                            type="text"
                            className="mt-0 w-full border-0 border-gray-400 border-b bg-transparent px-0 py-3 font-medium text-lg transition-[border] duration-300 ease-out focus:border-black focus:ring-0"
                        />
                    </label>
                    <label>
                        Your message (optional)
                        <textarea
                            rows={5}
                            className="mt-0 w-full border-0 border-gray-400 border-b bg-transparent px-0 py-3 font-medium text-lg transition-[border] duration-300 ease-out focus:border-black focus:ring-0"
                        ></textarea>
                    </label>
                    <Button
                        type="submit"
                        variant="secondary"
                        className="rounded-full"
                    >
                        Submit
                    </Button>
                </form>
            </section>
        </>
    )
}

Home.layout = (page: ReactNode) => <GeneralLayout>{page}</GeneralLayout>

export default Home
