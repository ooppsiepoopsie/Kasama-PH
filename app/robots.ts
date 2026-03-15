import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual production URL before launch
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kasama.ph"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow private or internal routes here if needed in the future
      // disallow: ["/api/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
