"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { adsConfig, shouldShowAds } from "@/lib/config/ads"

interface AdSenseBannerProps {
  adSlot: string
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal"
  fullWidthResponsive?: boolean
  className?: string
  style?: React.CSSProperties
  fallback?: React.ReactNode
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

export function AdSenseBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className,
  style,
  fallback,
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldShowAds() || !adsConfig.clientId || !adSlot) {
      return
    }

    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [adSlot])

  // Don't render ads if disabled or missing configuration
  if (!shouldShowAds() || !adsConfig.clientId || !adSlot) {
    return fallback ? <>{fallback}</> : null
  }

  return (
    <div className={cn("adsense-container", className)} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          ...style,
        }}
        data-ad-client={adsConfig.clientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
        data-ad-test={adsConfig.testMode ? "on" : undefined}
      />
    </div>
  )
}
