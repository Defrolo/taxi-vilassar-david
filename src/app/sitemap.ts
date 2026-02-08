import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
