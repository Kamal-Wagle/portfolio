import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { LatestBlogPosts } from "@/components/latest-blog-posts"
import { AboutPreview } from "@/components/about-preview"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CallToAction } from "@/components/call-to-action"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import { StickyAd } from "@/components/ads/sticky-ad"
import { AdSidebar } from "@/components/ads/ad-sidebar"

export default function HomePage() {
  return (
    <PageWrapper pageType="home" showSidebar={true}>
      <StickyAd position="top" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="lg:col-span-3">
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
