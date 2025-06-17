"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AdBanner } from "@/components/ads/ad-banner"
import Link from "next/link"
import { TrendingUp, Users, Clock } from "lucide-react"

const popularPosts = [
  {
    id: 1,
    title: "The Future of Web Design",
    views: "2.5k",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "React Best Practices",
    views: "1.8k",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    views: "1.2k",
    readTime: "6 min",
  },
]

const categories = [
  { name: "Development", count: 12 },
  { name: "Design", count: 8 },
  { name: "Tutorial", count: 6 },
  { name: "Career", count: 4 },
]

export function AdSidebar() {
  return (
    <div className="space-y-6">
      {/* Top Ad */}
      <AdBanner size="rectangle" label="Sponsored" />

      {/* Popular Posts Widget */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Popular Posts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block group">
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
        </CardContent>
      </Card>

      {/* Middle Ad */}
      <AdBanner size="square" label="Advertisement" />

      {/* Categories Widget */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Link key={category.name} href={`/blog?category=${category.name.toLowerCase()}`} className="block">
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
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2 text-sm">Newsletter</h3>
          <p className="text-xs text-muted-foreground mb-3">Get weekly updates on new articles and projects.</p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-xs border border-input rounded bg-background"
            />
            <Button size="sm" className="w-full text-xs">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Another Ad */}
      <AdBanner size="rectangle" label="Sponsored Content" />

      {/* Social Links */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Follow Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link
            href="https://twitter.com"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <div className="w-4 h-4 bg-blue-400 rounded"></div>
            Twitter
          </Link>
          <Link
            href="https://github.com"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <div className="w-4 h-4 bg-gray-800 rounded"></div>
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            LinkedIn
          </Link>
        </CardContent>
      </Card>

      {/* Bottom Ad */}
      <AdBanner size="rectangle" label="Advertisement" />

      {/* Skyscraper for larger screens */}
      <div className="hidden xl:block">
        <AdBanner size="skyscraper" label="Advertisement" />
      </div>
    </div>
  )
}
