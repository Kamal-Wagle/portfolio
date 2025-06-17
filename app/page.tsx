import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { AboutPreview } from "@/components/about-preview"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CallToAction } from "@/components/call-to-action"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"

export default function HomePage() {
  return (
    <PageWrapper pageType="home" showSidebar={false}>
      <div className="flex flex-col">
        <HeroSection />

        {/* Auto-injected ad after hero */}
        <div className="container mx-auto px-4">
          <SmartAdBanner type="leaderboard" className="my-12" />
        </div>

        <AboutPreview />

        {/* Auto-injected ad between sections */}
        <div className="container mx-auto px-4">
          <SmartAdBanner type="banner" className="my-12" />
        </div>

        <FeaturedProjects />
        <ServicesSection />

        {/* Auto-injected ad between sections */}
        <div className="container mx-auto px-4">
          <SmartAdBanner type="banner" className="my-12" />
        </div>

        <LatestBlogPosts />
        <TestimonialsSection />

        {/* Auto-injected ad before CTA */}
        <div className="container mx-auto px-4">
          <SmartAdBanner type="leaderboard" className="my-12" />
        </div>

        <CallToAction />
      </div>
    </PageWrapper>
  )
}
