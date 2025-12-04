"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />

      <section
        className="relative w-full min-h-[60vh] md:min-h-screen flex flex-col items-center md:items-start justify-start pt-24 md:pt-0 px-6 md:px-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%), url('/modern-luxury-home-at-night-with-warm-interior-lig.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="uppercase font-poppins text-center md:text-left w-full md:w-auto md:absolute"
          style={{
            fontSize: "clamp(48px, 12vw, 129.4px)",
            lineHeight: "1",
            letterSpacing: "-0.06em",
            fontWeight: 500,
            color: "#5a5f63",
            top: "15%",
            left: "2.5%",
          }}
        >
          ABOUT US
        </h1>

        <div
          className="text-[#c6912c] font-normal text-center md:text-left w-full max-w-[700px] mt-12 md:mt-0 md:absolute"
          style={{
            top: "40%",
            left: "30%",
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.5s ease-out",
          }}
        >
          <p
            className="mb-6 font-normal"
            style={{
              fontSize: "clamp(17px, 3.4vw, 39.36px)",
              lineHeight: "1.4",
            }}
          >
            Antova Builders began with a singular belief:
          </p>
          <p
            className="font-semibold"
            style={{
              fontSize: "clamp(20px, 4vw, 46.305px)",
              lineHeight: "1.4",
            }}
          >
            True luxury is the freedom to relax while experts handle the complexity.
          </p>
        </div>
      </section>

      <section
        className="relative w-full bg-black pb-8 md:pb-20"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <div className="w-full relative">
          <img
            src="/images/team-construction-new.png"
            alt="Construction team reviewing plans"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="relative w-full bg-black">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-[#c6912c] p-8 md:p-12 lg:p-16">
            <div className="lg:col-span-3">
              <div
                className="font-bold leading-none"
                style={{
                  fontSize: "clamp(80px, 20vw, 180px)",
                  color: "#c6912c",
                  lineHeight: "0.9",
                }}
              >
                01
              </div>
              <div
                className="mt-4 font-medium"
                style={{
                  fontSize: "clamp(32px, 8vw, 56px)",
                  color: "#c6912c",
                  lineHeight: "1.1",
                }}
              >
                Vision
              </div>
            </div>

            <div className="lg:col-span-4 flex items-start">
              <p className="text-white text-base md:text-lg leading-relaxed">
                Create a world where every detail is under control and every home reflects refined order. We envision
                spaces where precision meets artistry, and structure creates freedom.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-start">
              <p className="text-white text-base md:text-lg leading-relaxed">
                Through meticulous craftsmanship and unwavering quality, we transform visions into timeless realities
                that inspire and endure. Every project becomes a testament to excellence and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-[#c6912c] p-8 md:p-12 lg:p-16">
            <div className="lg:col-span-3">
              <div
                className="font-bold leading-none"
                style={{
                  fontSize: "clamp(80px, 20vw, 180px)",
                  color: "#c6912c",
                  lineHeight: "0.9",
                }}
              >
                02
              </div>
              <div
                className="mt-4 font-medium"
                style={{
                  fontSize: "clamp(32px, 8vw, 56px)",
                  color: "#c6912c",
                  lineHeight: "1.1",
                }}
              >
                Strategy
              </div>
            </div>

            <div className="lg:col-span-4 flex items-start">
              <p className="text-white text-base md:text-lg leading-relaxed">
                Establish clear structures, set the benchmark for craftsmanship, and deliver a seamless, worry-free
                client journey.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-start">
              <p className="text-white text-base md:text-lg leading-relaxed">
                Our strategic approach combines systematic planning with innovative execution, ensuring every phase
                aligns with your vision while exceeding industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-black">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-[#c6912c] border-b p-8 md:p-12 lg:p-16">
            <div className="lg:col-span-3">
              <div
                className="font-bold leading-none"
                style={{
                  fontSize: "clamp(80px, 20vw, 180px)",
                  color: "#c6912c",
                  lineHeight: "0.9",
                }}
              >
                03
              </div>
              <div
                className="mt-4 font-medium"
                style={{
                  fontSize: "clamp(32px, 8vw, 56px)",
                  color: "#c6912c",
                  lineHeight: "1.1",
                }}
              >
                Experience
              </div>
            </div>

            <div className="lg:col-span-4 flex items-start">
              <p className="text-white text-base md:text-lg leading-relaxed">
                Our team brings refined expertise to every project, combining technical mastery with creative
                problem-solving to deliver exceptional results.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-start">
              <p className="text-white text-base md:text-lg leading-relaxed">
                We've honed our craft through careful attention to detail and commitment to excellence, ensuring every
                build meets the highest standards of quality and precision.
              </p>
            </div>
          </div>
        </div>
        <div className="h-10 bg-black"></div>
      </section>

      <section className="relative w-full bg-white pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="px-8 md:px-16 lg:px-24">
          <h2
            className="font-poppins uppercase mb-16"
            style={{
              fontSize: "clamp(48px, 12vw, 129.4px)",
              color: "#5a5f63",
              fontWeight: 500,
              letterSpacing: "-0.06em",
              lineHeight: "1",
            }}
          >
            OUR TEAM
          </h2>

          <div className="max-w-4xl mb-16">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Antova's team blends master craftsmanship with AI-powered precision to shape complexity into timeless
              luxury. Every project is guided by experts who coordinate each detail with uncompromising standards.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex justify-start">
              <div className="relative bg-white shadow-sm w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] ml-auto">
                <div className="relative aspect-[16/10] bg-gray-100"></div>
                <div className="bg-[#c6912c] p-3">
                  <h3 className="font-semibold text-black text-base mb-0.5">Matthew Shaffer</h3>
                  <p className="text-black text-xs">CEO, Managing Principal</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-start">
              {[
                { name: "Ragnar", title: "Construction Engineer" },
                { name: "Lagertha", title: "Construction Engineer" },
                { name: "Rollo", title: "Construction Engineer" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-sm w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
                >
                  <div className="relative aspect-[16/10] bg-gray-100"></div>
                  <div className="bg-[#c6912c] p-3">
                    <h3 className="font-semibold text-black text-base mb-0.5">{member.name}</h3>
                    <p className="text-black text-xs">{member.title}</p>
                  </div>
                </div>
              ))}

              <div className="relative bg-white shadow-sm w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] lg:ml-auto">
                <div className="relative aspect-[16/10] bg-gray-100"></div>
                <div className="bg-[#c6912c] p-3">
                  <h3 className="font-semibold text-black text-base mb-0.5">Floki</h3>
                  <p className="text-black text-xs">Construction Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
