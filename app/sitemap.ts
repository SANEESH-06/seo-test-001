import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://blog.saneesh.shop",
            lastModified: new Date(),
        },
        {
            url: "https://blog.saneesh.shop/create",
            lastModified: new Date(),
        },
    ];
}
