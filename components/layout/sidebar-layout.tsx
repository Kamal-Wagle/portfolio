import type { ReactNode } from "react"
import { AdBanner } from "@/components/ads/ad-banner"
import { StickyAd } from "@/components/ads/sticky-ad"

interface SidebarLayoutProps {
  children: ReactNode
  showSidebar?: boolean
  className?: string
}

export function SidebarLayout({ children, showSidebar = true, className }: SidebarLayoutProps) {
  if (!showSidebar) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <StickyAd position="top" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="lg:col-span-3">{children}</div>

        {/* Right Sidebar - Ad Column */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Top sidebar ad */}
            <AdBanner size="rectangle" label="Sponsored" />

            {/* Square ad */}
            <AdBanner size="square" label="Advertisement" />

            {/* Another rectangle ad */}
            <AdBanner size="rectangle" label="Sponsored Content" />

            {/* Skyscraper ad for desktop */}
            <div className="hidden xl:block">
              <AdBanner size="skyscraper" label="Advertisement" />
            </div>

            {/* Newsletter signup between ads */}
            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 text-sm">Stay Updated</h3>
              <p className="text-xs text-muted-foreground mb-3">Get the latest updates delivered to your inbox.</p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-3 py-2 text-xs border border-input rounded bg-background"
                />
                <button className="w-full bg-primary text-primary-foreground px-3 py-2 rounded text-xs font-medium hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Bottom rectangle ad */}
            <AdBanner size="rectangle" label="Advertisement" />
          </div>
        </div>
      </div>

      <StickyAd position="bottom" />
    </div>
  )
}
