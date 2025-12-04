import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NewConstructionPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section - GET IN TOUCH */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/image.png" alt="Construction worker" className="w-full h-full object-cover" />
          {/* Orange gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 via-orange-500/60 to-orange-400/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 lg:px-16 xl:px-24 max-w-[1600px] mx-auto w-full">
          <div className="max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl mb-4 tracking-wide font-light">CONTACT US</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
              GET IN TOUCH
            </h1>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
