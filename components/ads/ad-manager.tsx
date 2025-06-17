"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { SmartAdBanner } from "./smart-ad-banner"
import { AdSenseSidebar } from "./adsense-sidebar"
import { shouldShowAds } from "@/lib/config/ads"

// Ad configuration for different page types
const adConfigurations = {
  // Homepage ads
  home: {
    hero: { type: "leaderboard" as const, position: "after-hero" },
    featured: { type: "banner" as const, position: "after-featured-projects" },
    services: { type: "banner" as const, position: "after-services" },
    cta: { type: "leaderboard" as const, position: "before-cta" },
  },

  // Blog page ads
  blog: {
    header: { type: "leaderboard" as const, position: "after-header" },
    grid: { type: "banner" as const, position: "every-3-posts" },
  },

  // Blog post ads
  "blog-post": {
    header: { type: "leaderboard" as const, position: "after-header" },
    content: { type: "in-content-1" as const, position: "mid-content" },
    related: { type: "banner" as const, position: "before-related" },
  },

  // Portfolio page ads
  portfolio: {
    header: { type: "leaderboard" as const, position: "after-header" },
    grid: { type: "banner" as const, position: "every-3-projects" },
  },

  // Portfolio detail ads
  "portfolio-detail": {
    header: { type: "leaderboard" as const, position: "after-header" },
    overview: { type: "in-content-2" as const, position: "after-overview" },
    bottom: { type: "banner" as const, position: "before-cta" },
  },

  // About page ads
  about: {
    header: { type: "leaderboard" as const, position: "after-header" },
  },

  // Contact page ads
  contact: {
    header: { type: "leaderboard" as const, position: "after-header" },
  },
}

interface AdManagerProps {
  pageType: keyof typeof adConfigurations
  children: React.ReactNode
  showSidebar?: boolean
}

export function AdManager({ pageType, children, showSidebar = true }: AdManagerProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize ads when page loads
    if (shouldShowAds() && typeof window !== "undefined" && window.adsbygoogle) {
      try {
        // Push any new ads that were added to the page
        const ads = document.querySelectorAll(".adsbygoogle:not([data-adsbygoogle-status])")
        ads.forEach(() => {
          window.adsbygoogle.push({})
        })
      } catch (error) {
        console.error("AdSense initialization error:", error)
      }
    }
  }, [pathname])

  if (!shouldShowAds()) {
    return (
      <div className={showSidebar ? "container mx-auto px-4 py-20" : ""}>
        {showSidebar ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-3">{children}</div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Sidebar without ads */}
                <div className="space-y-6">
                  <div className="text-center text-muted-foreground text-sm">Ads disabled in development</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Sticky top ad */}
      <div className="fixed top-16 left-0 right-0 z-30 hidden lg:block">
        <div className="container mx-auto px-4">
          <SmartAdBanner type="banner" className="opacity-90" />
        </div>
      </div>

      {showSidebar ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-3">{children}</div>

          {/* Right Sidebar - Ad Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AdSenseSidebar />
            </div>
          </div>
        </div>
      ) : (
        children
      )}

      {/* Sticky bottom ad */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden">
        <div className="container mx-auto px-4">
          <SmartAdBanner type="mobile-banner" className="bg-background/95 backdrop-blur" />
        </div>
      </div>
    </div>
  )
}
