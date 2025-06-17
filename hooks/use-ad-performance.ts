"use client"

import { useEffect, useState } from "react"
import { shouldShowAds } from "@/lib/config/ads"
import { gtag } from "@/lib/analytics" // Declare the gtag variable

interface AdPerformanceData {
  impressions: number
  clicks: number
  ctr: number
  revenue: number
}

export function useAdPerformance() {
  const [performance, setPerformance] = useState<AdPerformanceData>({
    impressions: 0,
    clicks: 0,
    ctr: 0,
    revenue: 0,
  })

  useEffect(() => {
    if (!shouldShowAds()) return

    // Track ad performance
    const trackAdPerformance = () => {
      const ads = document.querySelectorAll(".adsbygoogle")

      ads.forEach((ad, index) => {
        // Add impression tracking
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Track impression
                setPerformance((prev) => ({
                  ...prev,
                  impressions: prev.impressions + 1,
                }))

                // Send to analytics
                if (typeof gtag !== "undefined") {
                  gtag("event", "ad_impression", {
                    ad_unit_id: ad.getAttribute("data-ad-slot"),
                    ad_position: index,
                  })
                }
              }
            })
          },
          { threshold: 0.5 },
        )

        observer.observe(ad as Element)

        // Add click tracking
        ad.addEventListener("click", () => {
          setPerformance((prev) => ({
            ...prev,
            clicks: prev.clicks + 1,
            ctr: (prev.clicks / prev.impressions) * 100,
          }))

          if (typeof gtag !== "undefined") {
            gtag("event", "ad_click", {
              ad_unit_id: ad.getAttribute("data-ad-slot"),
              ad_position: index,
            })
          }
        })
      })
    }

    // Wait for ads to load
    setTimeout(trackAdPerformance, 2000)
  }, [])

  return performance
}
