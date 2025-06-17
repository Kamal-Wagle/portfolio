// AdSense Configuration
export const adsConfig = {
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",
  enabled: process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true",
  showInDev: process.env.NEXT_PUBLIC_SHOW_ADS_IN_DEV === "true",
  testMode: process.env.NEXT_PUBLIC_AD_TEST_MODE === "true",

  // Ad Slot IDs
  slots: {
    banner: process.env.NEXT_PUBLIC_AD_SLOT_BANNER || "",
    rectangle: process.env.NEXT_PUBLIC_AD_SLOT_RECTANGLE || "",
    square: process.env.NEXT_PUBLIC_AD_SLOT_SQUARE || "",
    leaderboard: process.env.NEXT_PUBLIC_AD_SLOT_LEADERBOARD || "",
    skyscraper: process.env.NEXT_PUBLIC_AD_SLOT_SKYSCRAPER || "",
    mobileBanner: process.env.NEXT_PUBLIC_AD_SLOT_MOBILE_BANNER || "",

    // Sidebar slots
    sidebarTop: process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR_TOP || "",
    sidebarMiddle: process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR_MIDDLE || "",
    sidebarBottom: process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR_BOTTOM || "",

    // In-content slots
    inContent1: process.env.NEXT_PUBLIC_AD_SLOT_IN_CONTENT_1 || "",
    inContent2: process.env.NEXT_PUBLIC_AD_SLOT_IN_CONTENT_2 || "",
    inContent3: process.env.NEXT_PUBLIC_AD_SLOT_IN_CONTENT_3 || "",
  },
}

// Site Configuration
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://johndoe.dev",
  name: process.env.NEXT_PUBLIC_SITE_NAME || "John Doe - Web Developer & Designer",
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",

  // Verification codes
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || "",
  },
}

// Check if ads should be displayed
export const shouldShowAds = () => {
  const isDev = process.env.NODE_ENV === "development"
  return adsConfig.enabled && (!isDev || adsConfig.showInDev)
}

// Get ad slot by type
export const getAdSlot = (type: keyof typeof adsConfig.slots) => {
  return adsConfig.slots[type]
}
