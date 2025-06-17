"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Search } from "lucide-react"

const categories = ["All", "Web Design", "Mobile App", "Branding", "Development"]

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    image: "/placeholder.svg?height=300&width=400",
    category: "Development",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Intuitive mobile banking interface design",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    tags: ["UI/UX", "Figma", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    description: "Complete brand identity for tech startup",
    image: "/placeholder.svg?height=300&width=400",
    category: "Branding",
    tags: ["Branding", "Logo", "Identity"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS applications",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Design",
    tags: ["Vue.js", "D3.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Restaurant Website",
    description: "Modern restaurant website with online ordering",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Design",
    tags: ["React", "Stripe", "CMS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness Mobile App",
    description: "Personal fitness tracking mobile application",
    image: "/placeholder.svg?height=300&width=400",
    category: "Mobile App",
    tags: ["React Native", "Firebase", "Health"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "AI Chatbot",
    description: "Intelligent chatbot for customer support",
    image: "/placeholder.svg?height=300&width=400",
    category: "Development",
    tags: ["Python", "NLP", "AI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Real Estate Website",
    description: "Real estate listing website with advanced search",
    image: "/placeholder.svg?height=300&width=400",
    category: "Web Design",
    tags: ["React", "Next.js", "API"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Sticky top ad */}
      <SmartAdBanner 
        type="banner" 
        className="fixed top-16 left-0 right-0 z-30 hidden lg:block opacity-90"
      />

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A collection of projects that showcase my skills in design and development. Each project represents a unique
          challenge and creative solution.
        </p>
      </div>

      {/* Top banner ad */}
      <SmartAdBanner 
        type="leaderboard" 
        className="mb-12" 
        label="Advertisement"
      />

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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={project.id}>
            <Link href={`/portfolio/${project.id}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" onClick={(e) => e.preventDefault()}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="secondary" onClick={(e) => e.preventDefault()}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium">View Details →</div>
                </CardContent>
              </Card>
            </Link>

            {/* Ad after every 3rd project */}
            {(index + 1) % 3 === 0 && index < filteredProjects.length - 1 && (
              <div className="col-span-full my-8">
                <SmartAdBanner 
                  type="banner" 
                  label="Sponsored"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found matching your criteria.</p>
        </div>
      )}

      {/* Bottom ad */}
      <SmartAdBanner 
        type="leaderboard" 
        className="mt-16" 
        label="Advertisement"
      />

      {/* Sticky bottom ad for mobile */}
      <SmartAdBanner 
        type="mobile-banner" 
        className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-background/95 backdrop-blur"
      />
    </div>
  )
}
