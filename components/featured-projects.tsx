"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AdBanner } from "@/components/ads/ad-banner"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Intuitive mobile banking interface design",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["UI/UX", "Figma", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS applications",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "D3.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in design and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div key={project.id}>
              <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ad after second project */}
              {index === 1 && (
                <div className="lg:hidden mt-8">
                  <AdBanner size="rectangle" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop ad between projects and CTA */}
        <div className="hidden lg:block">
          <AdBanner size="rectangle" className="mx-auto" />
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
