import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
    slug: "media",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "alt",
            type: "text",
            required: true,
        },
    ],
    upload: {
        staticDir: "public/media",
        adminThumbnail: "thumbnail",
        focalPoint: true,
        imageSizes: [
            {
                name: "thumbnail",
                width: 300,
            },
            {
                name: "og",
                width: 1200,
                height: 630,
                crop: "center",
            },
        ],

        mimeTypes: ["image/jpeg", "image/png", "image/webp", "video/*"],
        formatOptions: {
            format: "webp",
            options: {
                quality: 85,
            },
        },
    },
}
