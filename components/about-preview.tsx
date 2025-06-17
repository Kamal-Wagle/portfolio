import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user experiences",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring fast, efficient, and accessible applications",
  },
]

export function AboutPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Passionate Developer & Designer</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 6 years of experience in web development and design, I specialize in creating digital
              experiences that are both beautiful and functional. My approach combines technical expertise with creative
              problem-solving to deliver solutions that exceed expectations.
            </p>

            <div className="space-y-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="John Doe working"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-background border rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-background border rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
