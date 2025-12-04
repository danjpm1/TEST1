"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function CommercialProjectsPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      title: "Plan",
      description: "Strategic planning and design for spaces that drive business success.",
      image: "/modern-commercial-building-exterior-glass-facade.jpg",
      alt: "Modern commercial building exterior",
    },
    {
      title: "Build",
      description: "Expert construction with precision, efficiency, and minimal disruption.",
      image: "/luxury-modern-living-room-wood-ceiling-concrete-fi.jpg",
      alt: "Commercial construction in progress",
    },
    {
      title: "Deliver",
      description: "On-time, on-budget completion that exceeds expectations.",
      image: "/modern-luxury-home-at-night-with-warm-interior-lig.jpg",
      alt: "Completed commercial space",
    },
  ]

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }
    if (isRightSwipe) {
      setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
    }
  }

  return (
    <div className="w-full overflow-x-hidden bg-black">
      <Navbar />

      {/* Hero Section with COMMERCIAL PROJECTS text */}
      <section className="relative w-full">
        <div className="flex items-center justify-end px-4 sm:px-8 md:pr-24 lg:pr-32 h-[30vh] bg-black">
          <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-bold text-white tracking-tight text-right">
            COMMERCIAL PROJECTS
          </h1>
        </div>

        {/* Commercial building image - full width */}
        <div className="relative w-full h-[70vh]">
          <Image
            src="/modern-commercial-building-exterior-glass-facade.jpg"
            alt="Modern commercial building"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="bg-black h-16 md:h-32" />

      <div className="w-full h-[2px] bg-[#D4A574]" />

      <section className="bg-black text-white py-12 md:py-32">
        <div className="container mx-auto px-5 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 mb-10 md:mb-20">
            <div>
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
                Business Excellence.
              </h2>
              <p className="text-2xl md:text-5xl lg:text-6xl font-light italic text-gray-400">Built for Success.</p>
            </div>

            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg text-gray-300 leading-[1.7] md:leading-9 mt-4 md:mt-0">
              <p>
                Antova Builder brings residential-quality craftsmanship to every commercial project. Office spaces to
                retail environments, we create spaces that elevate your brand and enhance productivity.
              </p>
              <p>
                Commercial projects demand efficiency, minimal disruption, and strict adherence to timelines. Our
                experienced team delivers precision construction that meets the unique demands of business environments.
              </p>
              <p className="font-semibold text-[#D4A574]">Excellence today, legacy tomorrow.</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full justify-center px-6">
          <div className="w-full max-w-[1400px]">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px]">
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
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] transition-colors ${
                      activeStep === index ? "bg-white" : "bg-gray-700"
                    }`}
                  />
                  <h3
                    className={`pt-8 pb-4 text-xl font-semibold transition-colors ${
                      activeStep === index ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors ${activeStep === index ? "text-white" : "text-gray-500"}`}
                  >
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden px-5">
          {/* Swipeable image carousel */}
          <div
            ref={carouselRef}
            className="relative w-full overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative w-full h-[250px]">
                    <Image src={step.image || "/placeholder.svg"} alt={step.alt} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bars and titles in 3-column grid */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {steps.map((step, index) => (
              <button key={index} onClick={() => setActiveStep(index)} className="text-left">
                {/* Progress bar */}
                <div
                  className={`h-[3px] mb-3 transition-all duration-300 ${
                    activeStep === index ? "bg-white" : "bg-gray-600"
                  }`}
                />
                {/* Title */}
                <h3
                  className={`text-sm font-semibold transition-colors ${
                    activeStep === index ? "text-white" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Description below - updates based on active step */}
          <p className="text-gray-300 text-[15px] leading-[1.7] mt-4">{steps[activeStep].description}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
