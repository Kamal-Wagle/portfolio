interface BlogPostStructuredDataProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
  category: string
  tags: string[]
  readTime: string
}

export function BlogPostStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  category,
  tags,
  readTime,
}: BlogPostStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: [image],
    author: {
      "@type": "Person",
      name: author,
      url: "https://johndoe.dev/about",
    },
    publisher: {
      "@type": "Organization",
      name: "John Doe",
      logo: {
        "@type": "ImageObject",
        url: "https://johndoe.dev/logo.png",
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: category,
    keywords: tags.join(", "),
    timeRequired: readTime,
    inLanguage: "en-US",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface ProjectStructuredDataProps {
  title: string
  description: string
  author: string
  dateCreated: string
  image: string
  url: string
  category: string
  technologies: string[]
  client?: string
}

export function ProjectStructuredData({
  title,
  description,
  author,
  dateCreated,
  image,
  url,
  category,
  technologies,
  client,
}: ProjectStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: description,
    image: [image],
    creator: {
      "@type": "Person",
      name: author,
      url: "https://johndoe.dev/about",
    },
    dateCreated: dateCreated,
    url: url,
    genre: category,
    keywords: technologies.join(", "),
    ...(client && {
      sponsor: {
        "@type": "Organization",
        name: client,
      },
    }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
