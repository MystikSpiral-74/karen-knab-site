import type { MetadataRoute } from "next";
import { site } from "@/content/copy";

// One page on purpose. /contact and /privacy are dormant and hidden from search.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: "monthly", priority: 1 }];
}
