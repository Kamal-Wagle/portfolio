import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create
          something amazing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
