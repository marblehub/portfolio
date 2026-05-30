import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl =
  process.env.GITHUB_ACTIONS === "true"
    ? "https://marblehub.github.io/portfolio"
    : "https://portfolio-silk-two-18.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
