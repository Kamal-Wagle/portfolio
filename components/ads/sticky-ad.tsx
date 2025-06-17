"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface StickyAdProps {
  position: "top" | "bottom"
  className?: string
}

export function StickyAd({ position, className }: StickyAdProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-30 transition-transform duration-300",
        position === "top"
          ? "top-16" // Position below navbar (navbar height is h-16 = 64px)
          : "bottom-0",
        position === "top" && !isScrolled && "transform -translate-y-full",
        className,
      )}
    >
      <Card className="mx-auto max-w-[728px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border shadow-lg">
        <div className="relative p-2">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1 h-6 w-6 p-0 z-10"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-3 w-3" />
          </Button>
          <div className="flex items-center justify-center h-[90px] bg-muted/30 border-dashed border-2 rounded">
            <div className="text-center text-muted-foreground">
              <div className="text-sm font-medium">Sticky AdSense</div>
              <div className="text-xs">728 x 90</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
