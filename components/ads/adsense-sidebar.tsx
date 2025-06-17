"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SmartAdBanner } from "./smart-ad-banner"
import Link from "next/link"
import { TrendingUp, Users, Clock, Mail, Github, Linkedin, Twitter } from "lucide-react"

const popularPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    views: "2.5k",
    readTime: "5 min",
    slug: "future-web-design-trends-2024",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    views: "1.8k",
    readTime: "8 min",
    slug: "building-scalable-react-applications",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: Complete Guide",
    views: "1.2k",
    readTime: "6 min",
    slug: "css-grid-vs-flexbox-guide",
  },
]

const categories = [
  { name: "Development", count: 12, slug: "development" },
  { name: "Design", count: 8, slug: "design" },
  { name: "Tutorial", count: 6, slug: "tutorial" },
  { name: "Career", count: 4, slug: "career" },
]

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Node.js",
  "UI/UX",
  "Design",
  "Performance",
  "SEO",
  "Accessibility",
]

export function AdSenseSidebar() {
  return (
    <div className="space-y-6">
      {/* Top Premium Ad Slot */}
      <SmartAdBanner type="sidebar-top" label="Sponsored" />

      {/* Popular Posts Widget */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
              <div className="space-y-1">
                <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <Button variant="outline" size="sm" className="w-full mt-3" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Middle Ad Slot */}
      <SmartAdBanner type="sidebar-middle" label="Advertisement" />

      {/* Categories Widget */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Link key={category.name} href={`/blog?category=${category.slug}`} className="block">
              <div className="flex items-center justify-between py-1 hover:text-primary transition-colors">
                <span className="text-sm">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">Newsletter</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Get weekly updates on new articles, tutorials, and web development insights.
          </p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-xs border border-input rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
            <Button size="sm" className="w-full text-xs">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2">No spam. Unsubscribe anytime.</p>
        </CardContent>
      </Card>

      {/* Bottom Ad Slot */}
      <SmartAdBanner type="sidebar-bottom" label="Sponsored Content" />

      {/* Tags Cloud */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${tag.toLowerCase()}`}>
                <Badge
                  variant="outline"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Follow Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link
            href="https://twitter.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded hover:bg-muted/50"
          >
            <Twitter className="h-4 w-4 text-blue-400" />
            <span>Twitter</span>
            <span className="text-xs text-muted-foreground ml-auto">@johndoe</span>
          </Link>
          <Link
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded hover:bg-muted/50"
          >
            <Github className="h-4 w-4 text-gray-800 dark:text-gray-200" />
            <span>GitHub</span>
            <span className="text-xs text-muted-foreground ml-auto">johndoe</span>
          </Link>
          <Link
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors p-2 rounded hover:bg-muted/50"
          >
            <Linkedin className="h-4 w-4 text-blue-600" />
            <span>LinkedIn</span>
            <span className="text-xs text-muted-foreground ml-auto">johndoe</span>
          </Link>
        </CardContent>
      </Card>

      {/* Bottom Skyscraper Ad for larger screens */}
      <div className="hidden xl:block">
        <SmartAdBanner type="skyscraper" label="Advertisement" />
      </div>
    </div>
  )
}
