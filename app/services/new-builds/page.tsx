"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function NewBuildsPage() {
  const [activeStep, setActiveStep] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      title: "Planning",
      description: "Custom design and engineering tailored to your vision and site requirements.",
      image: "/aerial.jpg",
      alt: "Luxury home aerial view with pool",
    },
    {
      title: "Construction",
      description: "Precision building with our experienced team and advanced project management.",
      image: "/luxury-modern-cabin-interior-with-large-windows-wo1.jpg",
      alt: "Construction phase",
    },
    {
      title: "Completion",
      description: "Final inspections and handover of your dream home, built to perfection.",
      image: "/modern-luxury-home-at-night-with-warm-interior-lig.jpg",
      alt: "Completed luxury home",
    },
  ]

  const handleTouchStart = useRef<number>(0)
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = handleTouchStart.current - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveStep((prev) => (prev + 1) % 3)
      } else {
        setActiveStep((prev) => (prev - 1 + 3) % 3)
      }
    }
  }

  return (
    <div className="w-full overflow-x-hidden bg-black">
      <Navbar />

      {/* Hero Section with NEW BUILDS text */}
      <section className="relative w-full">
        <div className="flex items-center justify-end px-4 sm:px-8 md:pr-24 lg:pr-32 h-[30vh] bg-black">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-bold text-white tracking-tight">
            NEW BUILDS
          </h1>
        </div>

        {/* Mountain house image - full width */}
        <div className="relative w-full h-[70vh]">
          <Image
            src="/modern-minimalist-architecture-exterior-detail-bla.jpg"
            alt="Modern new build home"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="bg-black h-32" />

      <div className="w-full h-[2px] bg-[#D4A574]" />

      <section className="bg-black text-white py-12 md:py-32">
        <div className="container mx-auto px-5 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-16 mb-10 md:mb-20">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-4">
                Design + Precision.
              </h2>
              <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-gray-400">
                From Vision to Reality.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg text-gray-300 mt-4 lg:mt-0">
              <p className="leading-[1.7] md:leading-8">
                Antova Builders has redefined luxury home construction — creating spaces that balance timeless elegance
                with modern comfort.
              </p>
              <p className="leading-[1.7] md:leading-8">
                True luxury lies in precision, collaboration, and craftsmanship — turning every project into a lasting
                work of art.
              </p>
              <p className="font-semibold text-white pt-1 md:pt-2">Excellence today, legacy tomorrow.</p>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full px-5">
          <div
            ref={carouselRef}
            onTouchStart={(e) => (handleTouchStart.current = e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
            className="relative overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {/* Image */}
                  <div className="relative w-full h-[300px] mb-6">
                    <Image src={step.image || "/placeholder.svg"} alt={step.alt} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4 w-full">
            {steps.map((step, barIndex) => (
              <div key={barIndex} className="flex flex-col">
                {/* Progress bar */}
                <div
                  className={`h-[2px] w-full transition-colors duration-300 ${
                    activeStep === barIndex ? "bg-white" : "bg-gray-600"
                  }`}
                />
                {/* Title */}
                <h3
                  className={`text-sm font-semibold mt-3 transition-colors duration-300 ${
                    activeStep === barIndex ? "text-white" : "text-gray-600"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Description for active step */}
          <div className="text-left pr-8 mt-2">
            <p className="text-sm text-gray-300 leading-relaxed">{steps[activeStep].description}</p>
          </div>
        </div>

        {/* Desktop view - Original design */}
        <div className="hidden md:flex w-full justify-center px-6">
          <div className="w-full max-w-[1400px]">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
              <Image
                src={steps[activeStep].image || "/placeholder.svg"}
                alt={steps[activeStep].alt}
                fill
                className="object-cover transition-opacity duration-300"
                key={activeStep}
              />
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative text-center cursor-pointer transition-all hover:opacity-80"
                >
                  {/* Top border line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] transition-colors ${
                      activeStep === index ? "bg-[#D4A574]" : "bg-gray-700"
                    }`}
                  />

                  {/* Step title */}
                  <h3
                    className={`pt-4 sm:pt-8 pb-2 sm:pb-4 text-base sm:text-xl font-semibold transition-colors ${
                      activeStep === index ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed px-1 sm:px-0 transition-colors ${activeStep === index ? "text-white" : "text-gray-500"}`}
                  >
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
