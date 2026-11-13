// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) {
    return [];
  }

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
