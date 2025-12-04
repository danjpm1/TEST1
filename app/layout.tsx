import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Antova Builders - Modern Precision Construction",
  description:
    "All Out Modern. All Out Precision. Built with Intelligence. Powered by AI-driven estimation and real-time material insights.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
