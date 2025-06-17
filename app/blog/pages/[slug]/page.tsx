import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { AutoAdInjector } from "@/components/ads/auto-ad-injector"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import { BlogPostStructuredData } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/config/ads"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle, ArrowRight, Eye } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts = {
  "future-web-design-trends-2024": {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    slug: "future-web-design-trends-2024",
    excerpt: "Exploring the latest design trends that are shaping the future of web development and user experience.",
    content: `
      <p>The world of web design is constantly evolving, and 2024 promises to bring some exciting new trends that will reshape how we think about digital experiences. As we move forward, we're seeing a convergence of technology, creativity, and user-centered design principles that are creating more engaging and accessible web experiences.</p>

      <h2>1. AI-Powered Design Systems</h2>
      <p>Artificial intelligence is revolutionizing how we approach design systems. From automated color palette generation to intelligent layout suggestions, AI tools are becoming indispensable for modern designers. These systems can analyze user behavior patterns and suggest design improvements in real-time.</p>

      <p>Companies like <strong>Figma</strong> and <strong>Adobe</strong> are leading the charge with AI-powered features that can:</p>
      <ul>
        <li>Generate design variations automatically</li>
        <li>Optimize layouts for different screen sizes</li>
        <li>Suggest color combinations based on brand guidelines</li>
        <li>Create responsive components with minimal input</li>
      </ul>

      <h2>2. Immersive 3D Experiences</h2>
      <p>With the advancement of WebGL and Three.js, we're seeing more websites incorporate 3D elements that create immersive experiences without compromising performance. These aren't just flashy animations – they're meaningful interactions that enhance the user journey.</p>

      <p>Key technologies driving this trend include:</p>
      <ul>
        <li><strong>WebGL 2.0</strong> - Enhanced graphics capabilities</li>
        <li><strong>Three.js</strong> - Simplified 3D development</li>
        <li><strong>React Three Fiber</strong> - React integration for 3D</li>
        <li><strong>WebXR</strong> - Virtual and augmented reality support</li>
      </ul>

      <h2>3. Sustainable Web Design</h2>
      <p>Environmental consciousness is driving a new movement in web design focused on reducing digital carbon footprints. This includes optimizing images, reducing server requests, and creating more efficient code that loads faster and uses less energy.</p>

      <p>Sustainable design practices include:</p>
      <ul>
        <li>Image optimization and next-gen formats (WebP, AVIF)</li>
        <li>Efficient CSS and JavaScript bundling</li>
        <li>Green hosting solutions</li>
        <li>Dark mode implementations to reduce screen energy consumption</li>
      </ul>

      <h2>4. Voice User Interfaces</h2>
      <p>As voice technology becomes more sophisticated, we're seeing websites integrate voice commands and audio feedback. This trend is particularly important for accessibility and creates new opportunities for hands-free interaction.</p>

      <h2>5. Micro-Interactions and Animation</h2>
      <p>Subtle animations and micro-interactions are becoming more refined and purposeful. They guide users through interfaces, provide feedback, and create delightful moments that enhance the overall user experience.</p>

      <h2>Conclusion</h2>
      <p>The future of web design is bright and full of possibilities. By staying informed about these trends and thoughtfully implementing them in our work, we can create digital experiences that are not only beautiful but also functional, accessible, and sustainable.</p>

      <p>As we move forward, the key is to balance innovation with usability, ensuring that new technologies serve the user's needs rather than just showcasing technical capabilities.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Design",
    tags: ["Web Design", "Trends", "UX", "Future", "AI", "3D", "Sustainability"],
    author: "John Doe",
    date: "2024-01-15",
    dateModified: "2024-01-16",
    readTime: "8 min read",
    views: "2,547",
    likes: 89,
    comments: 23,
  },
  // Add more blog posts here...
}

const relatedPosts = [
  {
    id: 2,
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
    excerpt: "Best practices and architectural patterns for creating maintainable React applications at scale.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
    tags: ["React", "Architecture", "Best Practices"],
    date: "2024-01-10",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: Complete Guide",
    slug: "css-grid-vs-flexbox-guide",
    excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Tutorial",
    tags: ["CSS", "Layout", "Tutorial"],
    date: "2024-01-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Modern JavaScript Features You Should Know",
    slug: "modern-javascript-features-2024",
    excerpt: "Explore the latest JavaScript features and how they can improve your development workflow.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Development",
    tags: ["JavaScript", "ES2024", "Modern JS"],
    date: "2024-01-01",
    readTime: "15 min read",
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const url = `${siteConfig.url}/blog/${post.slug}`
  const imageUrl = `${siteConfig.url}${post.image}`

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: "John Doe",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: "@johndoe",
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const postUrl = `${siteConfig.url}/blog/${post.slug}`
  const imageUrl = `${siteConfig.url}${post.image}`

  return (
    <>
      <BlogPostStructuredData
        title={post.title}
        description={post.excerpt}
        author={post.author}
        datePublished={post.date}
        dateModified={post.dateModified}
        image={imageUrl}
        url={postUrl}
        category={post.category}
        tags={post.tags}
        readTime={post.readTime}
      />

      <PageWrapper pageType="blog-post">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Top banner ad - Auto-injected by PageWrapper */}
        <SmartAdBanner type="leaderboard" className="mb-8" />

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{post.views} views</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
              priority
            />
          </div>

          {/* Article Content with Auto-Injected Ads */}
          <AutoAdInjector content={post.content} adFrequency={3} />

          <Separator className="my-8" />

          {/* Article Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like ({post.likes})
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Comment ({post.comments})
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </article>

        {/* Author Bio */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="John Doe"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">About {post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  Full-stack developer and designer with 6+ years of experience creating beautiful, functional web
                  applications. Passionate about modern web technologies, user experience, and sharing knowledge with
                  the developer community.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/about">View Profile</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
            <p className="text-muted-foreground">
              Continue reading with these related articles that might interest you
            </p>
          </div>

          {/* Ad before related posts */}
          <SmartAdBanner type="banner" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{relatedPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {relatedPost.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${relatedPost.slug}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
