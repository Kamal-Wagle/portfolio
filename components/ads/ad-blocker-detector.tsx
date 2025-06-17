"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle } from "lucide-react"

export function AdBlockerDetector() {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Create a test ad element
    const testAd = document.createElement("div")
    testAd.innerHTML = "&nbsp;"
    testAd.className = "adsbox"
    testAd.style.position = "absolute"
    testAd.style.left = "-10000px"
    testAd.style.width = "1px"
    testAd.style.height = "1px"

    document.body.appendChild(testAd)

    // Check if ad blocker is present
    setTimeout(() => {
      const isBlocked =
        testAd.offsetHeight === 0 ||
        testAd.offsetWidth === 0 ||
        testAd.style.display === "none" ||
        testAd.style.visibility === "hidden"

      if (isBlocked) {
        setAdBlockerDetected(true)
        setShowMessage(true)
      }

      document.body.removeChild(testAd)
    }, 100)
  }, [])

  if (!adBlockerDetected || !showMessage) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">Ad Blocker Detected</h3>

          <p className="text-muted-foreground mb-6 text-sm">
            We noticed you're using an ad blocker. This website is supported by advertising revenue. Please consider
            disabling your ad blocker to support our content.
          </p>

          <div className="space-y-3">
            <Button onClick={() => setShowMessage(false)} className="w-full">
              <Shield className="h-4 w-4 mr-2" />
              I'll Disable Ad Blocker
            </Button>

            <Button variant="outline" onClick={() => setShowMessage(false)} className="w-full">
              Continue Anyway
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">Thank you for supporting independent content creators!</p>
        </CardContent>
      </Card>
    </div>
  )
}
