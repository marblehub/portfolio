import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.GITHUB_ACTIONS === "true"
    ? "https://marblehub.github.io/portfolio"
    : "https://portfolio-silk-two-18.vercel.app";

const routes = ["", "/about", "/projects", "/publications", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
