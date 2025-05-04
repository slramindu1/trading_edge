import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Trading Edge ",
        template: `%s | `
    },
    description: "Learn Forx Trading On The Lowest Price In Sri Lnaka",
    icons: {
        icon: [
            // {
            //     url: "/icons/favicon.ico",
            //     href: "/icons/favicon.ico",
            // }
        ]
    },
    openGraph: {
        title: "Trading Edge ",
        description: "Learn Forx Trading On The Lowest Price In Sri Lnaka",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Trading Edge ",
        description: "Learn Forx Trading On The Lowest Price In Sri Lnaka",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("#"),
};
