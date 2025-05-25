import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
       
        default: "Trading Edge ",
        template: `%s | `
    },
    description: "Learn Forex Trading On The Lowest Price In Sri Lnaka",
    icons: {
        icon: [
            {
                url: "#",
                href: "/logos/icon_logo.png",
            }
        ]
    },
    openGraph: {
        title: "Trading Edge ",
        description: "Learn Forex Trading On The Lowest Price In Sri Lnaka",
        images: [
            {
                url: "#",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Trading Edge ",
        description: "Learn Forex Trading On The Lowest Price In Sri Lnaka",
        images: [
            {
                url: "#",
            }
        ]
    },
    metadataBase: new URL("https://www.tradingedgefx.com/"),
};
