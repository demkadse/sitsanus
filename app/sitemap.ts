import { siteUrl } from "@/lib/site";
export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { guides } from "@/components/guides";

const baseUrl = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/leitfaden", "/shop", "/shop/stuehle", "/shop/schreibtische", "/shop/monitorhalterungen", "/shop/eingabegeraete", "/shop/zubehoer", "/ueber-uns", "/so-funktionierts"];

  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...guides.map((guide) => ({ url: `${baseUrl}/leitfaden/${guide.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
