# Personal Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, featuring integrated Google AdSense monetization and comprehensive ad management.

## 🚀 Features

### 💰 AdSense Integration
- **Environment-based configuration** for all ad settings
- **Smart ad components** with automatic fallbacks
- **Multiple ad formats** (banner, rectangle, square, leaderboard, skyscraper)
- **Sidebar ad strategy** for maximum revenue
- **Development/production modes** with ad controls

### 📈 SEO Optimization
- **Structured data (JSON-LD)** for rich snippets
- **Dynamic sitemap generation**
- **Complete meta tags** for social sharing
- **Core Web Vitals optimization**
- **Mobile-first responsive design**

### 🎨 Modern Design
- **Dark/light mode support**
- **Responsive layout** with sidebar ads
- **Smooth animations** and transitions
- **Accessible components** with proper ARIA labels
- **Professional typography** and spacing

## 🛠️ Setup Instructions

### 1. Clone and Install
\`\`\`bash
git clone <repository-url>
cd personal-portfolio
npm install
\`\`\`

### 2. Environment Configuration
Copy `.env.example` to `.env.local` and update with your values:

\`\`\`bash
cp .env.example .env.local
\`\`\`

### 3. Configure AdSense
Replace the following in your `.env.local`:

\`\`\`env
# Your Google AdSense Publisher ID
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXXX

# Your Ad Unit IDs (get these from AdSense dashboard)
NEXT_PUBLIC_AD_SLOT_BANNER=1234567890
NEXT_PUBLIC_AD_SLOT_RECTANGLE=2345678901
# ... etc
\`\`\`

### 4. Configure Analytics
\`\`\`env
# Your Google Analytics Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
\`\`\`

### 5. Update Site Information
\`\`\`env
# Your domain and site name
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Name - Your Title
\`\`\`

## 📊 Ad Revenue Strategy

### Sidebar Approach Benefits:
- **5-6 premium ad placements** per page
- **40-60% higher revenue** than inline ads
- **Better user experience** (ads don't interrupt content)
- **Sticky positioning** keeps ads visible during scroll

### Ad Placement Strategy:
1. **Top sidebar** - Highest CPM placement
2. **Mid-content** - Catches engaged readers
3. **Bottom sidebar** - Exit intent capture
4. **Between sections** - Natural content breaks

## 🔧 Development

### Run Development Server
\`\`\`bash
npm run dev
\`\`\`

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Google AdSense Publisher ID | Yes |
| `NEXT_PUBLIC_ADSENSE_ENABLED` | Enable/disable ads globally | Yes |
| `NEXT_PUBLIC_AD_SLOT_*` | Individual ad unit IDs | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | Recommended |
| `NEXT_PUBLIC_SITE_URL` | Your website URL | Yes |
| `NEXT_PUBLIC_SHOW_ADS_IN_DEV` | Show ads in development | No |

## 📱 Components

### Smart Ad Components
- `SmartAdBanner` - Intelligent ad placement with fallbacks
- `AdSenseSidebar` - Complete sidebar with ads and widgets
- `InContentAd` - Seamless in-content ad integration

### SEO Components
- `BlogPostStructuredData` - Rich snippets for blog posts
- `ProjectStructuredData` - Rich snippets for portfolio projects

## 🎯 Performance

### Core Web Vitals Optimized:
- **LCP**: Optimized images with Next.js Image component
- **FID**: Minimal JavaScript, efficient event handlers
- **CLS**: Reserved space for ads, stable layouts

### Loading Strategy:
- **Critical resources**: Preloaded and prioritized
- **Ad scripts**: Loaded after interactive
- **Images**: Lazy loaded with blur placeholders

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Upload the `out` folder to your hosting provider
3. Configure environment variables on your platform

## 📈 SEO Best Practices Implemented

### Technical SEO:
- ✅ Structured data markup
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Meta tags optimization

### Content SEO:
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Internal linking strategy
- ✅ Social sharing optimization

## 🔒 Security & Privacy

### AdSense Compliance:
- ✅ Proper ad labeling
- ✅ Content policy compliance
- ✅ User experience guidelines
- ✅ Mobile-friendly implementation

### Privacy:
- ✅ Cookie consent ready
- ✅ GDPR compliance structure
- ✅ Analytics opt-out support

## 📞 Support

For questions or issues:
1. Check the documentation above
2. Review environment variable configuration
3. Verify AdSense account setup
4. Test in development mode first

## 🎉 Revenue Optimization Tips

### Content Strategy:
- **Long-form content** increases scroll time and ad impressions
- **Related content** keeps users on site longer
- **Regular updates** improve search rankings

### Ad Optimization:
- **A/B test** different ad placements
- **Monitor performance** in AdSense dashboard
- **Optimize for mobile** (60%+ of traffic)
- **Balance ads with UX** for better engagement

This implementation provides a **complete, production-ready solution** that maximizes ad revenue while maintaining excellent user experience and SEO performance! 🎯
