"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const bakeryImages = [
  {
    src: "/images/bakery/baker-working.jpg",
    alt: "Professional baker decorating red velvet cakes in our kitchen",
    caption: "Crafting perfection in our professional kitchen",
  },
  {
    src: "/images/bakery/sfiso-display.jpg",
    alt: "Sfiso Linda showcasing our beautiful cake collection",
    caption: "Our founder Sfiso with our signature creations",
  },
  {
    src: "/images/bakery/team-photo.jpg",
    alt: "Stanley's Bakery team in our workspace",
    caption: "Our dedicated team of skilled bakers",
  },
  {
    src: "/images/bakery/baker-with-kfc-cake.jpg",
    alt: "Baker proudly displaying a custom KFC-themed cake",
    caption: "Custom themed cakes are our specialty",
  },
  {
    src: "/images/bakery/radio-station-visit.jpg",
    alt: "Stanley's Bakery team at Cosmo FM with celebration cake",
    caption: "Celebrating milestones with our community",
  },
]

export default function BakerySlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === bakeryImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? bakeryImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === bakeryImages.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-amber-50 to-pink-50 rounded-xl overflow-hidden shadow-2xl border-4 border-amber-200">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={bakeryImages[currentIndex].src || "/placeholder.svg"}
          alt={bakeryImages[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out filter sepia-[0.2] contrast-[1.1] brightness-[0.95]"
        />

        {/* Vintage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-100/10 pointer-events-none" />

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 text-amber-900 shadow-lg backdrop-blur-sm"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 text-amber-900 shadow-lg backdrop-blur-sm"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/80 to-transparent p-6">
          <p className="text-white text-lg font-medium text-center drop-shadow-lg">
            {bakeryImages[currentIndex].caption}
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bakeryImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Vintage Frame Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border-8 border-amber-200 rounded-xl" />
        <div className="absolute inset-2 border-2 border-amber-300/50 rounded-lg" />
      </div>
    </div>
  )
}
