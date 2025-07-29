"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Building, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const showcaseCakes = [
  {
    id: 1,
    category: "Wedding Cakes",
    title: "Elegant Wedding Collection",
    description: "Stunning multi-tier cakes that make your special day unforgettable",
    image: "/placeholder.svg?height=400&width=400&text=Elegant+3-tier+wedding+cake+with+white+fondant+and+roses",
    icon: Heart,
    color: "from-pink-100 via-rose-50 to-pink-100",
    borderColor: "border-pink-200",
    cakes: [
      {
        name: "Classic Romance",
        price: "From R2500",
        image: "/placeholder.svg?height=200&width=200&text=Classic+wedding+cake",
      },
      {
        name: "Royal Elegance",
        price: "From R3200",
        image: "/placeholder.svg?height=200&width=200&text=Luxury+wedding+cake",
      },
      {
        name: "Garden Paradise",
        price: "From R2800",
        image: "/placeholder.svg?height=200&width=200&text=Floral+wedding+cake",
      },
    ],
  },
  {
    id: 2,
    category: "Birthday Cakes",
    title: "Birthday Celebration Cakes",
    description: "Custom birthday cakes that bring joy to every celebration",
    image: "/placeholder.svg?height=400&width=400&text=Colorful+birthday+cake+with+decorations",
    icon: Users,
    color: "from-yellow-100 via-amber-50 to-yellow-100",
    borderColor: "border-yellow-200",
    cakes: [
      {
        name: "Princess Castle",
        price: "From R900",
        image: "/placeholder.svg?height=200&width=200&text=Princess+castle+cake",
      },
      {
        name: "Superhero Adventure",
        price: "From R950",
        image: "/placeholder.svg?height=200&width=200&text=Superhero+cake",
      },
      { name: "Unicorn Fantasy", price: "From R850", image: "/placeholder.svg?height=200&width=200&text=Unicorn+cake" },
    ],
  },
  {
    id: 3,
    category: "Corporate & Custom",
    title: "Corporate & Custom Cakes",
    description: "Professional cakes for business events and unique custom designs",
    image: "/placeholder.svg?height=400&width=400&text=Corporate+branded+cake+with+logo",
    icon: Building,
    color: "from-blue-100 via-indigo-50 to-blue-100",
    borderColor: "border-blue-200",
    cakes: [
      {
        name: "Corporate Branding",
        price: "From R1200",
        image: "/placeholder.svg?height=200&width=200&text=Corporate+logo+cake",
      },
      { name: "3D Sculpture", price: "From R1500", image: "/placeholder.svg?height=200&width=200&text=3D+custom+cake" },
      {
        name: "Money Drip Cake",
        price: "From R850",
        image: "/placeholder.svg?height=200&width=200&text=Money+drip+cake",
      },
    ],
  },
]

export default function CakeShowcase() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cake-showcase")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % showcaseCakes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const activeShowcase = showcaseCakes[activeCategory]
  const IconComponent = activeShowcase.icon

  return (
    <section
      id="cake-showcase"
      className="py-20 bg-gradient-to-br from-white via-amber-50/30 to-pink-50/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full opacity-10 animate-gentleFloat"></div>
        <div
          className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-10 animate-gentleFloat"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "animate-slideInFromTop" : "opacity-0"}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-500 mr-2 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
              Our <span className="font-dancing-script text-pink-600">Signature Collections</span>
            </h2>
            <Sparkles className="h-8 w-8 text-pink-500 ml-2 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover our most popular cake categories, each crafted with premium ingredients and artistic flair
          </p>
        </div>

        {/* Category Navigation */}
        <div
          className={`flex justify-center mb-12 lg:mb-16 ${isVisible ? "animate-slideInFromBottom stagger-2" : "opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-amber-100 w-full max-w-4xl">
            {showcaseCakes.map((category, index) => {
              const IconComp = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-xl transition-all duration-500 transform hover:scale-105 flex-1 sm:flex-none ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-amber-900 shadow-lg scale-105"
                      : "text-amber-700 hover:bg-amber-100/50"
                  }`}
                >
                  <IconComp className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-medium text-sm sm:text-base">{category.category}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Category Showcase */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "animate-slideInFromBottom stagger-3" : "opacity-0"}`}
        >
          <div
            className={`bg-gradient-to-br ${activeShowcase.color} rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 border-2 ${activeShowcase.borderColor} shadow-2xl hover-lift transition-all duration-700`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-amber-800" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-amber-900">{activeShowcase.title}</h3>
                </div>
                <p className="text-amber-700 text-lg sm:text-xl leading-relaxed">{activeShowcase.description}</p>
                <Link href="/cakes">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-amber-900 font-bold btn-dynamic hover-lift group">
                    Explore {activeShowcase.category}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500">
                  <Image
                    src={activeShowcase.image || "/placeholder.svg"}
                    alt={activeShowcase.title}
                    width={500}
                    height={400}
                    className="object-cover w-full h-64 sm:h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-bounce opacity-80"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Mini Cake Gallery */}
        </div>
      </div>
    </section>
  )
}
