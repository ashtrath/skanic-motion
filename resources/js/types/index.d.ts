export interface User {
    id: number
    name: string
    email: string
    email_verified_at?: string
}

export interface SlideshowData {
    title: string
    year: string
    src: string
    fileType: 'image' | 'video'
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User
    }
}
