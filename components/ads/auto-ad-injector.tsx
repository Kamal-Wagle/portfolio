"use client"

import { useEffect, useRef } from "react"
import { shouldShowAds } from "@/lib/config/ads"

interface AutoAdInjectorProps {
  content: string
  adFrequency?: number // Insert ad every N paragraphs
}

export function AutoAdInjector({ content, adFrequency = 3 }: AutoAdInjectorProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldShowAds() || !contentRef.current) return

    const contentDiv = contentRef.current
    const paragraphs = contentDiv.querySelectorAll("p")

    // Insert ads automatically every N paragraphs
    paragraphs.forEach((paragraph, index) => {
      if ((index + 1) % adFrequency === 0 && index < paragraphs.length - 1) {
        const adContainer = document.createElement("div")
        adContainer.className = "my-8 flex justify-center"

        // Create ad element
        const adElement = document.createElement("div")
        adElement.innerHTML = `
          <div class="bg-muted/20 p-1 rounded-lg">
            <div class="text-xs text-muted-foreground text-center mb-1">Advertisement</div>
            <ins class="adsbygoogle"
                 style="display:block; width:300px; height:250px;"
                 data-ad-client="${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}"
                 data-ad-slot="${process.env.NEXT_PUBLIC_AD_SLOT_IN_CONTENT_1}">
            </ins>
          </div>
        `

        adContainer.appendChild(adElement)
        paragraph.parentNode?.insertBefore(adContainer, paragraph.nextSibling)

        // Initialize the ad
        if (window.adsbygoogle) {
          try {
            window.adsbygoogle.push({})
          } catch (error) {
            console.error("Auto ad injection error:", error)
          }
        }
      }
    })
  }, [content, adFrequency])

  return (
    <div
      ref={contentRef}
      className="prose prose-gray dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
