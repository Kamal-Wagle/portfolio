"use client"

import { SmartAdBanner } from "./smart-ad-banner"
import { cn } from "@/lib/utils"

interface InContentAdProps {
  slot?: "in-content-1" | "in-content-2" | "in-content-3"
  className?: string
  variant?: "default" | "minimal"
}

export function InContentAd({ slot = "in-content-1", className, variant = "default" }: InContentAdProps) {
  return (
    <div className={cn("flex justify-center my-8", className)}>
      <SmartAdBanner type={slot} showLabel={variant === "default"} label="Advertisement" />
    </div>
  )
}
