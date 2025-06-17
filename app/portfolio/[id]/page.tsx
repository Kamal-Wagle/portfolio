import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import { AdSenseSidebar } from "@/components/ads/adsense-sidebar"
import { InContentAd } from "@/components/ads/in-content-ad"
import { ProjectStructuredData } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/config/ads"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Target, Lightbulb, Zap, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const projectData = {
  1: {
    id: 1,
    title: "E-commerce Platform",
    subtitle: "Modern Shopping Experience",
    slug: "ecommerce-platform",
    description:
      "A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    client: "TechStore Inc.",
    duration: "3 months",
    year: "2024",
    role: "Full Stack Developer & UI Designer",
    dateCreated: "2024-01-01",

    challenge:
      "The client needed a scalable e-commerce platform that could handle high traffic volumes during peak shopping seasons while providing a seamless user experience across all devices. The existing system was outdated and couldn't support modern payment methods or real-time inventory tracking.",

    solution:
      "I designed and developed a modern, responsive e-commerce platform using React for the frontend and Node.js for the backend. The solution includes real-time inventory management, multiple payment gateway integrations, advanced search and filtering capabilities, and a comprehensive admin dashboard for order and product management.",

    process: [
      {
        phase: "Research & Planning",
        description: "Conducted user research, analyzed competitor platforms, and defined technical requirements.",
        duration: "1 week",
      },
      {
        phase: "Design & Prototyping",
        description:
          "Created wireframes, user flows, and high-fidelity prototypes with a focus on conversion optimization.",
        duration: "2 weeks",
      },
      {
        phase: "Development",
        description:
          "Built the frontend and backend systems, integrated payment gateways, and implemented security measures.",
        duration: "8 weeks",
      },
      {
        phase: "Testing & Launch",
        description:
          "Conducted thorough testing, performance optimization, and deployed to production with monitoring.",
        duration: "1 week",
      },
    ],

    features: [
      "Responsive design optimized for all devices",
      "Real-time inventory management",
      "Multiple payment gateway integration",
      "Advanced search and filtering",
      "User account management and order history",
      "Admin dashboard with analytics",
      "Email notifications and order tracking",
      "SEO optimization and fast loading times",
    ],

    results: [
      "40% increase in conversion rate",
      "60% improvement in page load speed",
      "25% reduction in cart abandonment",
      "99.9% uptime during peak traffic",
    ],

    technologies: [
      { name: "React", description: "Frontend framework for building user interfaces" },
      { name: "Node.js", description: "Backend runtime for server-side logic" },
      { name: "MongoDB", description: "NoSQL database for flexible data storage" },
      { name: "Stripe", description: "Payment processing and subscription management" },
      { name: "AWS", description: "Cloud hosting and CDN for global performance" },
      { name: "Redis", description: "Caching layer for improved performance" },
    ],

    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  2: {
    id: 2,
    title: "Mobile Banking App",
    subtitle: "Intuitive Financial Management",
    slug: "mobile-banking-app",
    description:
      "A comprehensive mobile banking application designed to provide users with seamless financial management capabilities, featuring biometric authentication, real-time notifications, and advanced budgeting tools.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Mobile App",
    tags: ["UI/UX", "Figma", "Mobile", "React Native", "Firebase"],
    liveUrl: "https://example-banking-app.com",
    githubUrl: "https://github.com/johndoe/banking-app",
    client: "SecureBank",
    duration: "4 months",
    year: "2024",
    role: "UI/UX Designer & Mobile Developer",
    dateCreated: "2024-02-01",

    challenge:
      "Traditional banking apps were complex and intimidating for everyday users. The client needed a solution that would make banking accessible, secure, and enjoyable for all age groups while maintaining the highest security standards.",

    solution:
      "I designed and developed a user-friendly mobile banking app with intuitive navigation, biometric security, and personalized financial insights. The app features a clean interface, smart categorization, and proactive financial health monitoring.",

    process: [
      {
        phase: "User Research",
        description: "Conducted interviews with 50+ banking customers to understand pain points and needs.",
        duration: "2 weeks",
      },
      {
        phase: "Design System",
        description: "Created a comprehensive design system with accessibility and security in mind.",
        duration: "3 weeks",
      },
      {
        phase: "Prototyping",
        description: "Built interactive prototypes and conducted usability testing with target users.",
        duration: "2 weeks",
      },
      {
        phase: "Development",
        description: "Developed the mobile app with React Native and integrated banking APIs securely.",
        duration: "7 weeks",
      },
    ],
    features: [
      "Biometric authentication (Face ID/Touch ID)",
      "Real-time transaction notifications",
      "Smart expense categorization",
      "Budget tracking and goals",
      "Bill payment and scheduling",
      "Account balance and history",
      "Secure money transfers",
      "Financial health insights",
    ],
    results: [
      "85% user satisfaction rate",
      "50% increase in mobile banking adoption",
      "30% reduction in customer service calls",
      "4.8/5 app store rating",
    ],
    technologies: [
      { name: "React Native", description: "Cross-platform mobile development framework" },
      { name: "Firebase", description: "Backend services and real-time database" },
      { name: "Figma", description: "Design and prototyping tool" },
      { name: "Plaid API", description: "Secure banking data integration" },
      { name: "Biometric APIs", description: "Touch ID and Face ID authentication" },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  3: {
    id: 3,
    title: "Brand Identity Design",
    subtitle: "Complete Visual Identity System",
    slug: "brand-identity-design",
    description:
      "A comprehensive brand identity project for a tech startup, including logo design, color palette, typography system, and brand guidelines that reflect innovation and trustworthiness.",
    image: "/placeholder.svg?height=500&width=800",
    category: "Branding",
    tags: ["Branding", "Logo", "Identity", "Illustrator", "InDesign"],
    liveUrl: "https://example-brand.com",
    githubUrl: "#",
    client: "InnovateTech Startup",
    duration: "2 months",
    year: "2023",
    role: "Brand Designer & Creative Director",
    dateCreated: "2023-11-01",

    challenge:
      "The startup needed a professional brand identity that would help them stand out in the competitive tech industry while conveying trust, innovation, and approachability to both investors and customers.",
    solution:
      "I created a modern, versatile brand identity system that balances professionalism with approachability. The design includes a distinctive logo, cohesive color palette, typography system, and comprehensive brand guidelines.",
    process: [
      {
        phase: "Brand Discovery",
        description: "Conducted workshops to understand company values, target audience, and competitive landscape.",
        duration: "1 week",
      },
      {
        phase: "Concept Development",
        description: "Created multiple logo concepts and visual directions based on brand strategy.",
        duration: "2 weeks",
      },
      {
        phase: "Refinement",
        description: "Refined chosen concept and developed supporting brand elements and applications.",
        duration: "3 weeks",
      },
      {
        phase: "Brand Guidelines",
        description: "Created comprehensive brand guidelines and application examples.",
        duration: "2 weeks",
      },
    ],
    features: [
      "Distinctive logo and wordmark",
      "Comprehensive color palette",
      "Typography system",
      "Icon library and illustrations",
      "Business card and stationery design",
      "Website visual guidelines",
      "Social media templates",
      "Brand guidelines document",
    ],
    results: [
      "200% increase in brand recognition",
      "Successful Series A funding round",
      "Consistent brand application across all touchpoints",
      "Positive feedback from stakeholders and customers",
    ],
    technologies: [
      { name: "Adobe Illustrator", description: "Vector graphics and logo design" },
      { name: "Adobe InDesign", description: "Brand guidelines and layout design" },
      { name: "Adobe Photoshop", description: "Image editing and mockups" },
      { name: "Figma", description: "Digital brand asset organization" },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  const url = `${siteConfig.url}/portfolio/${project.id}`
  const imageUrl = `${siteConfig.url}${project.image}`

  return {
    title: `${project.title} - ${project.subtitle} | ${siteConfig.name}`,
    description: project.description,
    keywords: [...project.tags, project.category, "portfolio", "web development", "design"].join(", "),
    authors: [{ name: "John Doe" }],
    creator: "John Doe",
    openGraph: {
      title: `${project.title} - ${project.subtitle}`,
      description: project.description,
      url: url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 500,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${project.subtitle}`,
      description: project.description,
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

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  const projectUrl = `${siteConfig.url}/portfolio/${project.id}`
  const imageUrl = `${siteConfig.url}${project.image}`

  return (
    <>
      <ProjectStructuredData
        title={project.title}
        description={project.description}
        author="John Doe"
        dateCreated={project.dateCreated}
        image={imageUrl}
        url={projectUrl}
        category={project.category}
        technologies={project.tags}
        client={project.client}
      />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Back Button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link href="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>

            {/* Top banner ad */}
            <SmartAdBanner type="leaderboard" className="mb-8" />

            {/* Project Header */}
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{project.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mb-16 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={500}
                className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                priority
              />
            </div>

            {/* Project Overview */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">The Challenge</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">The Solution</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Mid-content ad */}
              <InContentAd slot="in-content-2" className="my-12" />
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.process.map((phase, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                          {index + 1}
                        </div>
                        <h3 className="font-semibold">{phase.phase}</h3>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {phase.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{phase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.technologies.map((tech, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Project Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom banner ad */}
            <SmartAdBanner type="banner" className="mb-16" />

            {/* Next Project */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                <p className="mb-6 opacity-90">
                  Let's discuss your next project and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/portfolio">View More Work</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Ad Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AdSenseSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({
    id,
  }))
}
