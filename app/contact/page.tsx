"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Calendar,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Copy,
  MessageCircle,
  Video,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Check,
  ExternalLink,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

interface Appointment {
  date: number
  month: string
  year: number
  time: string
  duration: string
  meetingType: "virtual" | "onsite"
  projectAddress?: string
  meetLink?: string
  calendarEventId?: string
}

// Mock email function (logs to console)
function sendConfirmationEmail(appointment: Appointment, email = "client@example.com") {
  console.log("=== CONFIRMATION EMAIL ===")
  console.log(`To: ${email}`)
  console.log(`Subject: Your Antova Builders Consultation is Confirmed`)
  console.log(`---`)
  console.log(`Date: December ${appointment.date}, ${appointment.year}`)
  console.log(`Time: ${appointment.time}`)
  console.log(`Duration: ${appointment.duration}`)
  console.log(`Meeting Type: ${appointment.meetingType === "virtual" ? "Virtual (Google Meet)" : "On-Site"}`)
  if (appointment.meetingType === "virtual" && appointment.meetLink) {
    console.log(`Google Meet Link: ${appointment.meetLink}`)
  } else if (appointment.meetingType === "onsite" && appointment.projectAddress) {
    console.log(`Location: ${appointment.projectAddress}`)
  }
  console.log("==========================")
}

export default function ContactPage() {
  const [selectedDuration, setSelectedDuration] = useState("30m")
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [meetingType, setMeetingType] = useState<"virtual" | "onsite">("virtual")
  const [projectAddress, setProjectAddress] = useState("")
  const [isBooked, setIsBooked] = useState(false)
  const [appointment, setAppointment] = useState<Appointment | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [bookingError, setBookingError] = useState<string | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")

  const handleMeetingTypeChange = (type: "virtual" | "onsite") => {
    setMeetingType(type)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setShowBookingModal(true)
  }

  const closeModal = () => {
    setShowBookingModal(false)
    setClientName("")
    setClientEmail("")
    setBookingError(null)
  }

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      setBookingError("Please select a date and time")
      return
    }

    if (!clientName.trim()) {
      setBookingError("Please enter your name")
      return
    }

    if (!clientEmail.trim() || !clientEmail.includes("@")) {
      setBookingError("Please enter a valid email address")
      return
    }

    if (meetingType === "onsite" && !projectAddress.trim()) {
      setBookingError("Please enter the project address for on-site meeting")
      return
    }

    setIsLoading(true)
    setBookingError(null)

    try {
      const koalendarBaseUrl = "https://koalendar.com/e/meet-with-antova-builders"

      // Build the date in YYYY-MM-DD format
      const year = 2025
      const month = 12 // December
      const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`

      // Convert time to 24-hour format for URL
      const timeParts = selectedTime.match(/(\d+):(\d+)(am|pm)/i)
      let hours = Number.parseInt(timeParts?.[1] || "0")
      const minutes = timeParts?.[2] || "00"
      const ampm = timeParts?.[3]?.toLowerCase()

      if (ampm === "pm" && hours !== 12) {
        hours += 12
      } else if (ampm === "am" && hours === 12) {
        hours = 0
      }

      const timeStr = `${String(hours).padStart(2, "0")}:${minutes}`

      // Build query parameters for Koalendar
      const params = new URLSearchParams()
      params.set("name", clientName.trim())
      params.set("email", clientEmail.trim())
      params.set("date", dateStr)
      params.set("time", timeStr)
      params.set("duration", selectedDuration === "30m" ? "30" : "60")
      params.set("type", meetingType === "virtual" ? "Virtual Meeting" : "On-Site Meeting")

      if (meetingType === "onsite" && projectAddress.trim()) {
        params.set("location", projectAddress.trim())
      }

      // Open Koalendar in a new tab
      const koalendarUrl = `${koalendarBaseUrl}?${params.toString()}`
      window.open(koalendarUrl, "_blank", "noopener,noreferrer")

      // Close modal and reset form
      setShowBookingModal(false)
      setClientName("")
      setClientEmail("")
      setProjectAddress("")
      setSelectedTime(null)
      setSelectedDate(null)
    } catch (error) {
      setBookingError(error instanceof Error ? error.message : "Failed to redirect to booking")
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const timeSlots = [
    "12:00am",
    "12:15am",
    "12:30am",
    "12:45am",
    "1:00am",
    "1:15am",
    "1:30am",
    "1:45am",
    "2:00am",
    "2:15am",
  ]

  const calendarDays = [
    { day: 1, disabled: false },
    { day: 2, disabled: false },
    { day: 3, disabled: false },
    { day: 4, disabled: false },
    { day: 5, disabled: false },
    { day: 6, disabled: false },
    { day: 7, disabled: false },
    { day: 8, disabled: false },
    { day: 9, disabled: false },
    { day: 10, disabled: false },
    { day: 11, disabled: false },
    { day: 12, disabled: false },
    { day: 13, disabled: false },
    { day: 14, disabled: false },
    { day: 15, disabled: false },
    { day: 16, disabled: false },
    { day: 17, disabled: false },
    { day: 18, disabled: false },
    { day: 19, disabled: false },
    { day: 20, disabled: false },
    { day: 21, disabled: false },
    { day: 22, disabled: false },
    { day: 23, disabled: false },
    { day: 24, disabled: false },
    { day: 25, disabled: false },
    { day: 26, disabled: false },
    { day: 27, disabled: false },
    { day: 28, disabled: false },
    { day: 29, disabled: false },
    { day: 30, disabled: false },
    { day: 31, disabled: false },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Contact Section */}
      <section className="relative bg-[#0a0a0a] py-20 lg:py-28 overflow-hidden mt-20">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative diamond shapes */}
        <div className="absolute left-20 top-40 w-3 h-3 border border-white/10 rotate-45 hidden lg:block" />
        <div className="absolute left-32 top-80 w-2 h-2 border border-white/10 rotate-45 hidden lg:block" />

        <div className="relative z-10 px-6 lg:px-12 xl:px-24 max-w-[1200px] mx-auto">
          {/* Header */}
          <div id="contact-section" className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide mb-6">
              CONTACT
            </h2>
            <p className="text-white/90 text-2xl sm:text-3xl md:text-4xl mb-4">
              <a href="tel:+12086258342" className="hover:text-[#C6912C] transition-colors">
                (208) 625-8342
              </a>
            </p>
            <p className="text-white/60 text-lg">Join 50+ satisfied clients. Response within 24 hours guaranteed.</p>
          </div>

          {/* Feature boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Zap className="w-5 h-5 text-white/80 mb-4" strokeWidth={1.5} />
              <h3 className="text-white font-medium mb-1">Project Completion</h3>
              <p className="text-white/40 text-sm">4-6 weeks</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Shield className="w-5 h-5 text-white/80 mb-4" strokeWidth={1.5} />
              <h3 className="text-white font-medium mb-1">100% Guarantee</h3>
              <p className="text-white/40 text-sm">Precision Built</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <Clock className="w-5 h-5 text-white/80 mb-4" strokeWidth={1.5} />
              <h3 className="text-white font-medium mb-1">24/7 Support</h3>
              <p className="text-white/40 text-sm">Always available</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
              <TrendingUp className="w-5 h-5 text-white/80 mb-4" strokeWidth={1.5} />
              <h3 className="text-white font-medium mb-1">Performance</h3>
              <p className="text-white/40 text-sm">Optimized</p>
            </div>
          </div>

          {/* Direct Email Section */}
          <div className="mb-12">
            <p className="text-white/40 text-sm tracking-widest mb-4">DIRECT EMAIL</p>
            <button
              className="w-full border border-white/10 rounded-lg p-6 flex items-center justify-between hover:border-white/20 transition-colors group"
              onClick={() => navigator.clipboard.writeText("sales@antovabuilders.com")}
            >
              <div className="text-left">
                <p className="text-white text-xl font-mono">sales@antovabuilders.com</p>
                <p className="text-white/40 text-sm mt-1">CLICK TO COPY</p>
              </div>
              <Copy className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
            </button>
          </div>

          {/* Other Ways Section */}
          <div className="mb-16">
            <p className="text-white/40 text-sm tracking-widest mb-4">OTHER WAYS</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={scrollToBooking}
                className="border border-white/10 rounded-lg p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors group"
              >
                <Calendar
                  className="w-6 h-6 text-white/60 mb-4 group-hover:text-white/80 transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="text-white font-medium mb-1">Virtual Consultation</h3>
                <p className="text-white/40 text-sm">Book 30min</p>
              </button>
              <a
                href="sms:+15096717386?body=Hi%2C%20I%20would%20like%20to%20schedule%20an%20on-site%20consultation."
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href =
                    "sms:+15096717386?body=Hi%2C%20I%20would%20like%20to%20schedule%20an%20on-site%20consultation."
                }}
                className="border border-white/10 rounded-lg p-8 flex flex-col items-center justify-center hover:border-white/20 transition-colors group cursor-pointer"
              >
                <MessageCircle
                  className="w-6 h-6 text-white/60 mb-4 group-hover:text-white/80 transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="text-white font-medium mb-1">On site Consultation</h3>
                <p className="text-white/40 text-sm">Direct message</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cal.com Style Booking Widget */}
      <section id="booking-section" className="bg-gray-100 py-20 lg:py-28">
        <div className="px-6 lg:px-12 xl:px-24 max-w-[1200px] mx-auto">
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg">
            {isBooked && appointment ? (
              // Confirmation Screen
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-500 mb-8">Your consultation has been scheduled.</p>

                <div className="bg-gray-50 rounded-xl p-8 max-w-md mx-auto text-left space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-gray-500 text-sm">Date</span>
                    <span className="text-gray-900 font-medium">
                      {appointment.month} {appointment.date}, {appointment.year}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-gray-500 text-sm">Time</span>
                    <span className="text-gray-900 font-medium">{appointment.time}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-gray-500 text-sm">Duration</span>
                    <span className="text-gray-900 font-medium">{appointment.duration}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                    <span className="text-gray-500 text-sm">Meeting Type</span>
                    <span className="text-gray-900 font-medium">
                      {appointment.meetingType === "virtual" ? "Virtual (Google Meet)" : "On-Site"}
                    </span>
                  </div>

                  {appointment.meetingType === "virtual" && appointment.meetLink ? (
                    <div className="pt-2">
                      <p className="text-gray-500 text-sm mb-2">Google Meet Link</p>
                      <a
                        href={appointment.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#F5A623] hover:text-[#d48f1f] transition-colors font-medium"
                      >
                        <Video className="w-4 h-4" />
                        {appointment.meetLink}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <p className="text-gray-400 text-xs mt-2">Your consultation will take place on Google Meet.</p>
                    </div>
                  ) : (
                    <div className="pt-2">
                      <p className="text-gray-500 text-sm mb-2">Meeting Location</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#F5A623] mt-0.5" />
                        <div>
                          <p className="text-gray-900 font-medium">{appointment.projectAddress}</p>
                          <p className="text-gray-400 text-xs mt-1">
                            Your meeting is scheduled at your project address.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setIsBooked(false)
                    setAppointment(null)
                    setSelectedTime(null)
                    setProjectAddress("")
                  }}
                  className="mt-8 px-6 py-3 bg-[#F5A623] text-white rounded-lg font-medium hover:bg-[#d48f1f] transition-colors"
                >
                  Book Another Consultation
                </button>
              </div>
            ) : (
              // Booking Form
              <div className="grid lg:grid-cols-[380px_1fr_280px]">
                {/* Left Panel - Profile Info */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 1500 1500"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                      >
                        <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                          <g transform="matrix(1,0,0,1,76.457,331.061)">
                            <path
                              d="M0,-102.938L103.164,-102.938L51.625,0L-51.543,0L0,-102.938Z"
                              style={{ fill: "rgb(198,145,44)" }}
                            />
                          </g>
                          <g transform="matrix(1,0,0,1,231.34,21.3845)">
                            <path
                              d="M0,309.676L103.676,309.676L-51.375,0L-103.031,103.18L-103.211,103.539L0,309.676Z"
                              style={{ fill: "rgb(198,145,44)" }}
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <span className="text-gray-500 text-sm">Antova Builders</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Let's plan your project together.</h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Whether you prefer a virtual consultation or an on-site walk-through, we're here to explore your
                    ideas, answer questions, and guide you toward a clear path forward. Let's discuss what you want to
                    build—and how to bring it to life.
                  </p>

                  <p className="text-gray-400 text-sm mb-4">View some of our work:</p>
                  <Link href="/projects" className="text-[#F5A623] text-sm hover:underline">
                    antovabuilders.com
                  </Link>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <div className="flex gap-2">
                        {["15m", "30m", "60m"].map((duration) => (
                          <button
                            key={duration}
                            onClick={() => setSelectedDuration(duration)}
                            className={`px-3 py-1 rounded text-sm transition-colors ${
                              selectedDuration === duration
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            {duration}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2">MEETING TYPE</p>
                      <div className="flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => handleMeetingTypeChange("virtual")}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
                            meetingType === "virtual"
                              ? "border-[#D4A84B] bg-[#D4A84B]/20 text-[#D4A84B] font-medium"
                              : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M15.2 11.8L19.4 9.4C19.8 9.2 20.2 9.2 20.5 9.4C20.8 9.6 21 9.9 21 10.3V13.7C21 14.1 20.8 14.4 20.5 14.6C20.2 14.8 19.8 14.8 19.4 14.6L15.2 12.2V11.8Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          Virtual Meeting (Google Meet)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMeetingTypeChange("onsite")}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-colors ${
                            meetingType === "onsite"
                              ? "border-[#D4A84B] bg-[#D4A84B]/20 text-[#D4A84B] font-medium"
                              : "border-gray-200 text-gray-500 hover:border-gray-300"
                          }`}
                        >
                          <MapPin className="w-4 h-4" />
                          On-Site Meeting (at project address)
                        </button>
                      </div>
                      <p className="text-gray-400 text-xs mt-2">
                        {meetingType === "virtual"
                          ? "A Google Meet link will be created automatically and emailed to you after booking."
                          : "Meeting details will be emailed to you after booking."}
                      </p>
                    </div>

                    {meetingType === "onsite" && (
                      <div className="mb-4">
                        <label className="text-gray-500 text-xs block mb-2">
                          Project address for the on-site meeting: <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={projectAddress}
                          onChange={(e) => setProjectAddress(e.target.value)}
                          placeholder="Enter your project address"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]"
                        />
                      </div>
                    )}

                    <p className="text-gray-500 text-xs flex items-center gap-1">America/Seattle</p>
                  </div>
                </div>

                {/* Middle Panel - Calendar */}
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">
                      <span className="font-medium">December</span> <span className="text-gray-400">2025</span>
                    </h4>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <ChevronLeft className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                      <div key={day} className="text-center text-gray-400 text-xs py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((item, index) => (
                      <button
                        key={index}
                        disabled={item.day === null}
                        onClick={() => item.day && setSelectedDate(item.day)}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                          item.day === null
                            ? "invisible"
                            : selectedDate === item.day
                              ? "bg-[#F5A623] text-white font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Panel - Time Slots */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">
                      <span className="font-medium">Mon</span> <span className="text-gray-400">{selectedDate}</span>
                    </h4>
                    <div className="flex gap-1 text-xs">
                      <button className="px-2 py-1 rounded text-gray-400 hover:text-gray-600 transition-colors">
                        12h
                      </button>
                      <button className="px-2 py-1 rounded bg-gray-100 text-gray-900">24h</button>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-[280px] overflow-y-auto pr-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`w-full py-3 px-4 rounded-lg border text-sm transition-colors ${
                          selectedTime === time
                            ? "border-[#F5A623] bg-[#F5A623]/10 text-[#F5A623]"
                            : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Confirm Your Booking</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Selected Date/Time Display */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-[#D4A84B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">
                  December {selectedDate}, 2025 at {selectedTime}
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 mt-2">
                <svg className="w-5 h-5 text-[#D4A84B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {selectedDuration} minutes • {meetingType === "virtual" ? "Virtual (Google Meet)" : "On-Site Meeting"}
                </span>
              </div>
            </div>

            {/* Client Info Form */}
            <div className="space-y-4">
              <div>
                <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A84B] focus:border-transparent text-gray-900 bg-white"
                />
              </div>

              <div>
                <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="clientEmail"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A84B] focus:border-transparent text-gray-900 bg-white"
                />
              </div>

              {meetingType === "onsite" && (
                <div>
                  <label htmlFor="projectAddressModal" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address *
                  </label>
                  <input
                    type="text"
                    id="projectAddressModal"
                    value={projectAddress}
                    onChange={(e) => setProjectAddress(e.target.value)}
                    placeholder="Enter the project address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A84B] focus:border-transparent text-gray-900 bg-white"
                  />
                </div>
              )}
            </div>

            {bookingError && <p className="text-red-500 text-sm mt-4 text-center">{bookingError}</p>}

            <div className="flex gap-3 mt-6">
              <button
                onClick={closeModal}
                className="flex-1 py-3 px-4 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                disabled={isLoading}
                className="flex-1 py-3 px-4 bg-[#D4A84B] text-white rounded-lg font-medium hover:bg-[#B8923F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Visit Us Section with Google Map */}
      <section className="bg-black py-20 lg:py-28">
        <div className="px-6 lg:px-12 xl:px-24 max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg">
            <div className="h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.5!2d-116.7686!3d48.0747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361e1a2a3c1a1a1%3A0x3b9d6e5d7f8c9e0a!2s280%20Tower%20Rd%2C%20Cocolalla%2C%20ID%2083813!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Antova Builders Location"
              />
            </div>

            <div className="bg-white p-12 lg:p-16 flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-[#C6912C]"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <h3 className="text-3xl font-semibold text-black mb-8">Visit us</h3>

              <div className="text-gray-700 text-lg leading-relaxed mb-8">
                <p>Antova Builders</p>
                <p>280 Tower Road</p>
                <p>Cocolalla, ID 83813</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=280+Tower+Road+Cocolalla+ID+83813"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium tracking-wider text-sm underline underline-offset-4 hover:text-[#C6912C] transition-colors"
              >
                GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
