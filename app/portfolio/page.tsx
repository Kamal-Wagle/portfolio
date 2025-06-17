"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AdBanner } from "@/components/ads/ad-banner"
import { StickyAd } from "@/components/ads/sticky-ad"
import { SmartAdBanner } from "@/components/ads/smart-ad-banner"
import { AdSenseBanner } from "@/components/ads/adsense-banner"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { AdBlockerDetector } from "@/components/ads/ad-blocker-detector"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <SmartAdBanner type="leaderboard" className="mb-16" />

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing
          together.
        </p>
      </div>

      {/* Top banner ad */}
      <AdBanner size="leaderboard" className="mb-16" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Sidebar ad */}
          <SmartAdBanner type="rectangle" />

          {/* Direct Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <Link href="mailto:john@example.com" className="text-muted-foreground hover:text-primary">
                    john@example.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                    +1 (234) 567-8900
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">Check out my code</p>
                  </div>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Professional network</p>
                  </div>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-muted-foreground">Latest thoughts</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Another sidebar ad */}
          <SmartAdBanner type="square" />

          {/* Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free to call me directly.
                </p>
                <Separator />
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                  <p>
                    <strong>Time Zone:</strong> PST (UTC-8)
                  </p>
                  <p>
                    <strong>Preferred Contact:</strong> Email
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Resume */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Interested in my work?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download my resume to learn more about my experience and skills.
              </p>
              <Button asChild className="w-full">
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">What's your typical project timeline?</h4>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary depending on scope and complexity. A typical website takes 2-4 weeks, while
                  larger applications can take 2-3 months.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you work with international clients?</h4>
                <p className="text-sm text-muted-foreground">
                  I work with clients worldwide and am comfortable with remote collaboration across different time
                  zones.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's your design process?</h4>
                <p className="text-sm text-muted-foreground">
                  I follow a user-centered design process: research, wireframing, prototyping, testing, and iteration. I
                  involve clients at every step.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Do you provide ongoing support?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! I offer maintenance packages and ongoing support to ensure your project continues to perform
                  optimally after launch.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom ad */}
      <SmartAdBanner type="leaderboard" className="mt-16" />

      <div className="fixed top-16 left-0 right-0 z-30 hidden lg:block">
        <div className="container mx-auto px-4">
          <SmartAdBanner type="banner" className="opacity-90" />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden">
        <div className="container mx-auto px-4">
          <SmartAdBanner type="mobile-banner" className="bg-background/95 backdrop-blur" />
        </div>
      </div>

      <AdBlockerDetector />
    </div>
  )
}
