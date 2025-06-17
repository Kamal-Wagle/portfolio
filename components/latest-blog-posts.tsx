import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const latestPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt: "Exploring the latest design trends that are shaping the future of web development.",
    image: "/placeholder.svg?height=250&width=400",
    category: "Design",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and architectural patterns for creating maintainable React applications.",
    image: "/placeholder.svg?height=250&width=400",
    category: "Development",
    date: "2024-01-10",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "My Journey from Designer to Full-Stack Developer",
    excerpt: "How I transitioned from pure design work to becoming a full-stack developer.",
    image: "/placeholder.svg?height=250&width=400",
    category: "Career",
    date: "2024-01-05",
    readTime: "6 min read",
  },
]

export function LatestBlogPosts() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Latest Articles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From the Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design, development, and the creative process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
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
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
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

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
