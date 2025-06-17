import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AdBanner } from "@/components/ads/ad-banner"
import { StickyAd } from "@/components/ads/sticky-ad"
import { InContentAd } from "@/components/ads/in-content-ad"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, ArrowRight } from "lucide-react"

// This would typically come from a CMS or database
const blogPost = {
  id: 1,
  title: "The Future of Web Design: Trends to Watch in 2024",
  excerpt: "Exploring the latest design trends that are shaping the future of web development and user experience.",
  content: `
    <p>The world of web design is constantly evolving, and 2024 promises to bring some exciting new trends that will reshape how we think about digital experiences. As we move forward, we're seeing a convergence of technology, creativity, and user-centered design principles that are creating more engaging and accessible web experiences.</p>

    <h2>1. AI-Powered Design Systems</h2>
    <p>Artificial intelligence is revolutionizing how we approach design systems. From automated color palette generation to intelligent layout suggestions, AI tools are becoming indispensable for modern designers. These systems can analyze user behavior patterns and suggest design improvements in real-time.</p>

    <h2>2. Immersive 3D Experiences</h2>
    <p>With the advancement of WebGL and Three.js, we're seeing more websites incorporate 3D elements that create immersive experiences without compromising performance. These aren't just flashy animations – they're meaningful interactions that enhance the user journey.</p>

    <h2>3. Sustainable Web Design</h2>
    <p>Environmental consciousness is driving a new movement in web design focused on reducing digital carbon footprints. This includes optimizing images, reducing server requests, and creating more efficient code that loads faster and uses less energy.</p>

    <h2>4. Voice User Interfaces</h2>
    <p>As voice technology becomes more sophisticated, we're seeing websites integrate voice commands and audio feedback. This trend is particularly important for accessibility and creates new opportunities for hands-free interaction.</p>

    <h2>Conclusion</h2>
    <p>The future of web design is bright and full of possibilities. By staying informed about these trends and thoughtfully implementing them in our work, we can create digital experiences that are not only beautiful but also functional, accessible, and sustainable.</p>
  `,
  image: "/placeholder.svg?height=400&width=800",
  category: "Design",
  tags: ["Web Design", "Trends", "UX", "Future"],
  author: "John Doe",
  date: "2024-01-15",
  readTime: "5 min read",
}

const latestPosts = [
  {
    id: 2,
    title: "Building Scalable React Applications",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Development",
  },
  {
    id: 3,
    title: "My Journey from Designer to Full-Stack Developer",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Career",
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use Which",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Tutorial",
  },
  {
    id: 5,
    title: "The Rise of AI in Design Tools",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-12-20",
    readTime: "4 min read",
    category: "Technology",
  },
]

const relatedPosts = [
  {
    id: 6,
    title: "Creating Accessible Web Interfaces",
    excerpt: "Essential principles and practical tips for building web interfaces that work for everyone.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
    tags: ["Accessibility", "Web Development", "Inclusive Design"],
    date: "2023-12-15",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "Modern CSS Techniques for Better Performance",
    excerpt:
      "Learn advanced CSS techniques that can significantly improve your website's performance and user experience.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
    tags: ["CSS", "Performance", "Optimization"],
    date: "2023-12-10",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "Design Systems: Building Consistency at Scale",
    excerpt: "How to create and maintain design systems that scale with your organization and improve team efficiency.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Team Collaboration"],
    date: "2023-12-05",
    readTime: "8 min read",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <StickyAd position="top" />

      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Top banner ad */}
        <AdBanner size="leaderboard" className="mb-8" />

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">
            {blogPost.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blogPost.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {blogPost.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(blogPost.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blogPost.readTime}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-12 rounded-lg overflow-hidden">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            {/* First part of content */}
            <div
              className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content.split("<h2>2.")[0] }}
            />

            {/* Mid-content ad */}
            <InContentAd className="my-8" />

            {/* Rest of content */}
            <div
              className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: "<h2>2." + blogPost.content.split("<h2>2.")[1] }}
            />

            <Separator className="my-8" />

            {/* Article Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comment
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Sidebar ad */}
              <AdBanner size="rectangle" />

              {/* Latest Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Latest Posts</h3>
                  <div className="space-y-4">
                    {latestPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                        <div className="flex gap-3">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={60}
                            height={60}
                            className="rounded object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs px-1 py-0">
                                {post.category}
                              </Badge>
                              <span>{post.readTime}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                    <Link href="/blog">View All Posts</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get the latest articles delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-sm border border-input rounded-md bg-background"
                    />
                    <Button size="sm" className="w-full">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Another sidebar ad */}
              <AdBanner size="square" />
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
            <p className="text-muted-foreground">
              Continue reading with these related articles that might interest you
            </p>
          </div>

          {/* Ad before related posts */}
          <AdBanner size="banner" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
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

                {/* Ad after second related post */}
                {index === 1 && (
                  <div className="lg:hidden mt-8">
                    <InContentAd />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>

        {/* Bottom ad */}
        <AdBanner size="leaderboard" className="mt-16" />
      </div>

      <StickyAd position="bottom" />
    </div>
  )
}
