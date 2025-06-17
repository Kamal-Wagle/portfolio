"use client"

import { AdSenseBanner } from "./adsense-banner"
import { getAdSlot } from "@/lib/config/ads"
import { cn } from "@/lib/utils"

interface SmartAdBannerProps {
  type:
    | "banner"
    | "rectangle"
    | "square"
    | "leaderboard"
    | "skyscraper"
    | "mobile-banner"
    | "sidebar-top"
    | "sidebar-middle"
    | "sidebar-bottom"
    | "in-content-1"
    | "in-content-2"
    | "in-content-3"
  className?: string
  label?: string
  showLabel?: boolean
}

const adSizes = {
  banner: { width: 728, height: 90, className: "w-full max-w-[728px] h-[90px]", format: "horizontal" as const },
  rectangle: { width: 300, height: 250, className: "w-[300px] h-[250px]", format: "rectangle" as const },
  leaderboard: { width: 970, height: 90, className: "w-full max-w-[970px] h-[90px]", format: "horizontal" as const },
  skyscraper: { width: 160, height: 600, className: "w-[160px] h-[600px]", format: "vertical" as const },
  "mobile-banner": {
    width: 320,
    height: 50,
    className: "w-full max-w-[320px] h-[50px]",
    format: "horizontal" as const,
  },
  square: { width: 250, height: 250, className: "w-[250px] h-[250px]", format: "rectangle" as const },
  "sidebar-top": { width: 300, height: 250, className: "w-[300px] h-[250px]", format: "rectangle" as const },
  "sidebar-middle": { width: 250, height: 250, className: "w-[250px] h-[250px]", format: "rectangle" as const },
  "sidebar-bottom": { width: 300, height: 250, className: "w-[300px] h-[250px]", format: "rectangle" as const },
  "in-content-1": { width: 300, height: 250, className: "w-[300px] h-[250px]", format: "rectangle" as const },
  "in-content-2": { width: 300, height: 250, className: "w-[300px] h-[250px]", format: "rectangle" as const },
  "in-content-3": { width: 300, height: 250, className: "w-[300px] h-[250px]", format: "rectangle" as const },
}

export function SmartAdBanner({ type, className, label, showLabel = true }: SmartAdBannerProps) {
  const adSlot = getAdSlot(type.replace("-", "") as any) // Convert kebab-case to camelCase
  const adSize = adSizes[type]

  if (!adSlot) {
    return null
  }

  const defaultLabel = label || "Advertisement"

  return (
    <div className={cn("flex flex-col items-center justify-center my-4", className)}>
      {showLabel && <span className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{defaultLabel}</span>}
      <div
        className={cn("bg-muted/20 p-1 rounded-lg border border-dashed border-muted-foreground/20", adSize.className)}
      >
        <AdSenseBanner
          adSlot={adSlot}
          adFormat={adSize.format}
          style={{ width: adSize.width, height: adSize.height }}
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-muted/30 rounded">
              <div className="text-center text-muted-foreground">
                <div className="text-sm font-medium">Ad Space</div>
                <div className="text-xs">
                  {adSize.width} x {adSize.height}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
