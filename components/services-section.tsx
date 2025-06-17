import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications using modern frameworks like React, Next.js, and Node.js",
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that prioritize usability and aesthetic appeal",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance and user experience",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions with robust APIs and database architecture",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Code,
    title: "E-commerce Solutions",
    description: "Complete online store development with payment integration and inventory management",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, SEO improvements, and accessibility enhancements",
    technologies: ["Lighthouse", "Core Web Vitals", "SEO", "A11y"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
