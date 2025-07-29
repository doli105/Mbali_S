"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=400&text=Elegant+white+3-tier+wedding+cake+with+roses",
    alt: "Elegant Wedding Cake",
    category: "Wedding",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=400&text=Princess+castle+cake+pink+and+purple",
    alt: "Princess Castle Cake",
    category: "Birthday",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=400&text=Superhero+themed+cake+with+action+figures",
    alt: "Superhero Adventure Cake",
    category: "Birthday",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400&text=Corporate+branded+cake+with+logo",
    alt: "Corporate Branding Cake",
    category: "Corporate",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=400&text=Unicorn+cake+with+rainbow+mane",
    alt: "Unicorn Fantasy Cake",
    category: "Birthday",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=400&text=Money+drip+cake+with+chocolate+drip",
    alt: "Money Drip Cake",
    category: "Custom",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=400&text=Floral+tiered+wedding+cake+with+flowers",
    alt: "Floral Wedding Cake",
    category: "Wedding",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=400&text=3D+sculpted+custom+novelty+cake",
    alt: "3D Custom Sculpture",
    category: "Custom",
  },
]

export default function AnimatedGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const itemsPerView = 4

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("animated-gallery")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= galleryImages.length ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [itemsPerView])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= galleryImages.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, galleryImages.length - itemsPerView) : prevIndex - 1))
  }

  return (
    <section id="animated-gallery" className="py-16 bg-gradient-to-br from-amber-50 to-pink-50">
      <div className="container mx-auto px-4">
        

        
      </div>
    </section>
  )
}
