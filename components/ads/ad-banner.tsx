"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AdBannerProps {
  size: "banner" | "rectangle" | "leaderboard" | "skyscraper" | "mobile-banner" | "square"
  className?: string
  label?: string
}

const adSizes = {
  banner: { width: 728, height: 90, className: "w-full max-w-[728px] h-[90px]" },
  rectangle: { width: 300, height: 250, className: "w-[300px] h-[250px]" },
  leaderboard: { width: 970, height: 90, className: "w-full max-w-[970px] h-[90px]" },
  skyscraper: { width: 160, height: 600, className: "w-[160px] h-[600px]" },
  "mobile-banner": { width: 320, height: 50, className: "w-full max-w-[320px] h-[50px]" },
  square: { width: 250, height: 250, className: "w-[250px] h-[250px]" },
}

export function AdBanner({ size, className, label = "Advertisement" }: AdBannerProps) {
  const adSize = adSizes[size]

  return (
    <div className={cn("flex flex-col items-center justify-center my-4", className)}>
      <span className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{label}</span>
      <Card className={cn("bg-muted/30 border-dashed border-2 flex items-center justify-center", adSize.className)}>
        <div className="text-center text-muted-foreground">
          <div className="text-sm font-medium">AdSense Space</div>
          <div className="text-xs">
            {adSize.width} x {adSize.height}
          </div>
        </div>
      </Card>
    </div>
  )
}
