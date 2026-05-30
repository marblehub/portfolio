import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://marblehub.github.io/portfolio";

const routes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/publications",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
