import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/metadata";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Taxi Vilassar de Mar - David",
        short_name: "Taxi Vilassar",
        description: siteConfig.description,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
