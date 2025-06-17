import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import { AdSidebar } from "@/components/ads/ad-sidebar"
import { StickyAd } from "@/components/ads/sticky-ad"
import Image from "next/image"
import Link from "next/link"
import { Download, MapPin, Calendar } from "lucide-react"

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Figma", level: 90 },
  { name: "Tailwind CSS", level: 95 },
]

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise web applications using React and Node.js.",
  },
  {
    year: "2022",
    title: "UI/UX Designer & Developer",
    company: "Creative Solutions",
    description: "Designed and developed user interfaces for mobile and web applications.",
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "StartupXYZ",
    description: "Built responsive web applications and collaborated with design teams.",
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    company: "University of California",
    description: "Bachelor of Science in Computer Science with focus on web technologies.",
  },
]

export default function AboutPage() {
  return (
    <PageWrapper pageType="about">
      <StickyAd position="top" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate designer and developer who loves creating beautiful, functional digital experiences.
            </p>
          </div>

          {/* Top banner ad */}
          <SmartAdBanner type="leaderboard" className="mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="John Doe"
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">John Doe</h2>
                  <p className="text-muted-foreground mb-4">Designer & Developer</p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    San Francisco, CA
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Bio and Skills */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">My Story</h3>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Hello! I'm John, a designer and developer based in San Francisco. My journey into the world of
                      design and development began over 6 years ago when I discovered my passion for creating digital
                      experiences that not only look great but also solve real problems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      I specialize in full-stack development with a strong focus on user experience design. My approach
                      combines technical expertise with creative problem-solving to deliver solutions that are both
                      beautiful and functional.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not coding or designing, you can find me exploring new technologies, contributing to
                      open-source projects, or enjoying the great outdoors with my camera in hand.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Timeline */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-8 text-center">Experience Timeline</h3>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                      <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-1/2 md:pr-8" : "md:ml-1/2 md:pl-8"}`}>
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{item.year}</Badge>
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <h4 className="font-semibold text-lg">{item.title}</h4>
                            <p className="text-primary font-medium mb-2">{item.company}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom ad */}
          <div className="mt-16">
            <SmartAdBanner type="leaderboard" />
          </div>
        </div>

        {/* Right Sidebar - Ad Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <AdSidebar />
          </div>
        </div>
      </div>
      <StickyAd position="bottom" />
    </PageWrapper>
  )
}
