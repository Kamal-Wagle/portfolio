import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://johndoe.dev"

  // Static pages
  const staticPages = ["", "/about", "/portfolio", "/blog", "/contact"]

  // Blog posts (you would typically fetch these from your CMS/database)
  const blogPosts = [
    "future-web-design-trends-2024",
    "building-scalable-react-applications",
    "css-grid-vs-flexbox-guide",
    "modern-javascript-features-2024",
  ]

  // Portfolio projects
  const portfolioProjects = ["1", "2", "3", "4"]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const portfolioRoutes = portfolioProjects.map((id) => ({
    url: `${baseUrl}/portfolio/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes]
}
