import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/capabilities", "/solutions", "/technology", "/company", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-07-02"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
