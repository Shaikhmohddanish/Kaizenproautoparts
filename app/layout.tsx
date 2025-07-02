import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaizen Auto Parts - Quality Used Auto Parts",
  description:
    "Your trusted partner for quality used auto parts. Extensive inventory, competitive prices, and expert service for all your automotive needs.",
  keywords: "used auto parts, car parts, automotive parts, engine parts, transmission parts",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
