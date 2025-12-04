"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AntovaBuilders() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [bgColor, setBgColor] = useState("bg-white")
  const [textColor, setTextColor] = useState("text-black")
  const [smartBgColor, setSmartBgColor] = useState("bg-[#F5F5F5]")
  const [smartTextColor, setSmartTextColor] = useState("text-black")
  const philosophyRef = useRef<HTMLDivElement>(null)
  const smartRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      if (philosophyRef.current) {
        const rect = philosophyRef.current.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.8) {
          setBgColor("bg-black")
          setTextColor("text-white")
        } else {
          setBgColor("bg-white")
          setTextColor("text-black")
        }
      }

      if (smartRef.current) {
        const rect = smartRef.current.getBoundingClientRect()

        if (rect.top <= window.innerHeight * 0.5) {
          setSmartBgColor("bg-white")
          setSmartTextColor("text-black")
        } else {
          setSmartBgColor("bg-black")
          setSmartTextColor("text-white")
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300 ease-in-out`}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-winter-mountain-home.png"
            alt="Luxury mountain chalet in winter with warm interior lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 px-6 lg:px-12 xl:px-16 text-center w-full -mt-32 md:-mt-40">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight text-balance text-white">
            Antova Builders
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 tracking-wide text-balance">
            Precision Built. Luxury Perfected.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="min-w-[264px] h-[40px] bg-[#c6912c] hover:bg-[#a67923] text-black font-medium px-[34px] py-0 text-sm tracking-wide rounded-[4px] shadow-lg hover:shadow-[#c6912c]/50 transition-all hover:scale-105"
            >
              AI Estimator
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[264px] h-[40px] border-2 border-white text-white hover:bg-white hover:text-black font-medium px-[34px] py-0 text-sm tracking-wide rounded-[4px] transition-all hover:scale-105 bg-transparent"
              >
                Consult With Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Building Types Showcase Section */}
      <section className="py-20 lg:py-28">
        <div className="px-4 lg:px-8 xl:px-16 w-full max-w-[1600px] mx-auto mb-32 lg:mb-40 xl:mb-48">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {/* Custom Homes Lifestyle Card */}
            <Link href="/contact">
              <div className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02] aspect-[3/2]">
                <img
                  src="/images/image.png"
                  alt="Custom homes lifestyle"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)",
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                  <h3 className="text-white font-medium text-base">Custom Homes.</h3>
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Renovations Lifestyle Card */}
            <Link href="/contact">
              <div className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02] aspect-[3/2]">
                <img
                  src="/images/renovation-fireplace.png"
                  alt="Renovations lifestyle"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)",
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                  <h3 className="text-white font-medium text-base">Renovations.</h3>
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* New Construction Lifestyle Card */}
            <Link href="/contact">
              <div className="group relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02] aspect-[3/2]">
                <img
                  src="/human3.jpg"
                  alt="New construction lifestyle"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)",
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                  <h3 className="text-white font-medium text-base">New Construction.</h3>
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Company Philosophy Text Section */}
        <div ref={philosophyRef} className="px-8 lg:px-16 xl:px-32 w-full max-w-[1320px] mx-auto mb-32 lg:mb-40">
          <div className="max-w-2xl space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold leading-relaxed text-balance">
              Antova Builders began with a belief: luxury is the freedom to relax while experts handle complexity.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-semibold leading-relaxed text-balance">
              From blueprint to flourish, Antova commands each variable: harnessing seasoned artisans, AI-powered
              estimating, and a concierge-grade client experience.
            </p>
          </div>
        </div>

        <div className="px-4 lg:px-8 xl:px-12 w-full max-w-[1800px] mx-auto">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-left ${textColor} transition-colors duration-300 ease-in-out`}
          >
            Get your offer now.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Engineering & Consulting Card */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="relative aspect-[4/5] sm:aspect-[3/2] overflow-hidden">
                <img
                  src="/images/engineering-blueprints.png"
                  alt="Architects working on architectural blueprints and floor plans"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white tracking-wide">
                    Engineering & Consulting
                  </h3>
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                    Expert structural solutions and professional consulting for complex builds.
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm font-medium">Consultation from $500</p>
                  <div className="flex gap-3 pt-2">
                    <Link href="/services/engineering-consulting" scroll={true}>
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-white/90 font-semibold text-xs px-4 py-2 transition-all"
                      >
                        Explore Engineering
                      </Button>
                    </Link>
                    <Link href="/contact" scroll={true}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-black text-xs px-4 py-2 transition-all bg-transparent"
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Renovation Card */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <div className="relative aspect-[4/5] sm:aspect-[3/2] overflow-hidden">
                <img
                  src="/modern-luxury-home-at-night-with-warm-interior-lig.jpg"
                  alt="Modern luxury home at night with mountains"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white tracking-wide">Renovation</h3>
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                    Modern renovation spaces designed for business excellence.
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm font-medium">$2k-5k credits</p>
                  <div className="flex gap-3 pt-2">
                    <Link href="/services/renovation" scroll={true}>
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-white/90 font-semibold text-xs px-4 py-2 transition-all"
                      >
                        Explore Renovation
                      </Button>
                    </Link>
                    <Link href="/contact" scroll={true}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-black text-xs px-4 py-2 transition-all bg-transparent"
                      >
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Block - Smart. Thin. Strong. */}
      <section
        id="about"
        ref={smartRef}
        className={`py-24 lg:py-32 ${smartBgColor} ${smartTextColor} transition-colors duration-300 ease-in-out`}
      >
        <div className="px-6 lg:px-12 xl:px-24 w-full max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Smart. Thin. Strong.
              </h2>
              <p
                className={`text-lg md:text-xl leading-relaxed transition-colors duration-300 ${smartTextColor === "text-white" ? "text-white/80" : "text-gray-700"}`}
              >
                Our builds redefine precision and performance — crafted with purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" scroll={true}>
                  <Button
                    size="lg"
                    className="min-w-[200px] w-[200px] min-h-[48px] h-[48px] bg-[#c6912c] hover:bg-[#a67923] text-white font-medium text-sm tracking-wide rounded-[4px] shadow-lg transition-all hover:scale-105"
                  >
                    Consult With Us
                  </Button>
                </Link>
                <Link href="/projects" scroll={true}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[200px] w-[200px] min-h-[48px] h-[48px] border border-[#c6912c] text-[#c6912c] hover:bg-[#c6912c] hover:text-white bg-transparent font-medium text-sm tracking-wide rounded-[4px] transition-all hover:scale-105"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:ml-auto flex justify-end">
              <div className="rounded-3xl overflow-hidden shadow-2xl w-full max-w-[520px] lg:max-w-[580px]">
                <img
                  src="/modern-minimalist-architecture-exterior-detail-bla.jpg"
                  alt="Modern architectural detail"
                  className="w-full h-auto object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement Block - Built with Intelligence */}
      <section id="services" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-luxury-home-at-night-with-warm-interior-lig.jpg"
            alt="Modern home at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 lg:px-12 xl:px-16 text-center w-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-balance">
            Built with Intelligence.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-black/90 max-w-3xl mx-auto text-balance">
            Powered by AI-driven estimation and real-time material insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="min-w-[264px] h-[40px] bg-[#c6912c] hover:bg-[#a67923] text-white font-medium text-sm tracking-wide rounded-[4px] shadow-lg transition-all hover:scale-105"
            >
              Explore AI Estimator
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-[264px] h-[40px] border border-[#c6912c] text-white hover:bg-[#c6912c] hover:text-white bg-transparent font-medium text-sm tracking-wide rounded-[4px] transition-all hover:scale-105"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Contact */}
      <Footer />
    </div>
  )
}
