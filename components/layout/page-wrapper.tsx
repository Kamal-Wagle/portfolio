"use client"

import type React from "react"

import { AdManager } from "@/components/ads/ad-manager"
import { usePathname } from "next/navigation"

interface PageWrapperProps {
  children: React.ReactNode
  showSidebar?: boolean
  pageType?: "home" | "blog" | "blog-post" | "portfolio" | "portfolio-detail" | "about" | "contact"
}

export function PageWrapper({ children, showSidebar = true, pageType }: PageWrapperProps) {
  const pathname = usePathname()

  // Auto-detect page type if not provided
  const detectedPageType = pageType || detectPageType(pathname)

  return (
    <AdManager pageType={detectedPageType} showSidebar={showSidebar}>
      {children}
    </AdManager>
  )
}

function detectPageType(pathname: string): PageWrapperProps["pageType"] {
  if (pathname === "/") return "home"
  if (pathname === "/blog") return "blog"
  if (pathname.startsWith("/blog/")) return "blog-post"
  if (pathname === "/portfolio") return "portfolio"
  if (pathname.startsWith("/portfolio/")) return "portfolio-detail"
  if (pathname === "/about") return "about"
  if (pathname === "/contact") return "contact"
  return "home" // fallback
}
