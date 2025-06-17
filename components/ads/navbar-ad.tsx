"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NavbarAdProps {
  className?: string
}

export function NavbarAd({ className }: NavbarAdProps) {
  return (
    <div className={cn("w-full bg-muted/20 border-b", className)}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-center">
          <Card className="w-full max-w-[728px] h-[90px] bg-muted/30 border-dashed border-2 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-sm font-medium">Top Banner Ad</div>
              <div className="text-xs">728 x 90</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
