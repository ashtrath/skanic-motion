import { Inter as InterGoogle, Rubik as RubikGoogle } from "next/font/google"
import type React from "react"

import "./global.css"
import { cn } from "@/lib/utils/cn"
import Header from "@/payload/globals/header/component"

const Rubik = RubikGoogle({
    variable: "--font-rubik",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

const Inter = InterGoogle({
    variable: "--font-inter",
    weight: ["400", "700"],
    subsets: ["latin"],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(Rubik.variable, Inter.variable, "font-text")}
        >
            <body className="min-h-[100dvh] bg-background text-foreground">
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
