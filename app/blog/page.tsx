"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Search, User, ArrowRight } from "lucide-react"
import { StickyAd } from "@/components/ads/sticky-ad"

const categories = ["All", "Design", "Development", "Tutorial", "Career", "Technology"]

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Exploring the latest design trends that are shaping the future of web development and user experience.",
    content: "Full blog post content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    category: "Design",
    tags: ["Web Design", "Trends", "UX"],
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and architectural patterns for creating maintainable React applications at scale.",
    content: "Full blog post content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
    tags: ["React", "Architecture", "Best Practices"],
    author: "John Doe",
    date: "2024-01-10",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    title: "My Journey from Designer to Full-Stack Developer",
    excerpt:
      "How I transitioned from pure design work to becoming a full-stack developer and the lessons learned along the way.",
    content: "Full blog post content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    category: "Career",
    tags: ["Career", "Personal", "Growth"],
    author: "John Doe",
    date: "2024-01-05",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each.",
    content: "Full blog post content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    category: "Tutorial",
    tags: ["CSS", "Layout", "Tutorial"],
    author: "John Doe",
    date: "2023-12-28",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of AI in Design Tools",
    excerpt: "How artificial intelligence is revolutionizing design workflows and what it means for designers.",
    content: "Full blog post content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    category: "Technology",
    tags: ["AI", "Design Tools", "Future"],
    author: "John Doe",
    date: "2023-12-20",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Creating Accessible Web Interfaces",
    excerpt: "Essential principles and practical tips for building web interfaces that work for everyone.",
    content: "Full blog post content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    author: "John Doe",
    date: "2023-12-15",
    readTime: "9 min read",
    featured: false,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <PageWrapper pageType="blog">
       <StickyAd position="top" />
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Thoughts, tutorials, and insights about design, development, and the creative process.
        </p>
      </div>

      {/* Top banner ad - Auto-injected by PageWrapper */}
      <SmartAdBanner type="leaderboard" className="mb-12" />

      {/* Filters and Search */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularPosts.map((post, index) => (
            <div key={post.id}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Auto-inject ad after every 3rd post */}
              {(index + 1) % 3 === 0 && index < regularPosts.length - 1 && (
                <div className="col-span-full my-8">
                  <SmartAdBanner type="banner" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found matching your criteria.</p>
        </div>
      )}

      {/* Newsletter Signup */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 opacity-90">
            Subscribe to my newsletter to get the latest articles and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="bg-background text-foreground" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
      <StickyAd position="bottom" />
    </PageWrapper>
  )
}
