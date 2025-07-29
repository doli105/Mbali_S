"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    id: 1,
    src: "/images/cakes/safari-adventure-cake.jpg",
    alt: "Safari Adventure Cake",
    category: "Birthday - Boys",
    title: "Safari Adventure",
    description: "Three-tier jungle themed cake with handcrafted safari animals",
  },
  {
    id: 2,
    src: "/images/cakes/superhero-cake.jpg",
    alt: "Superhero Cake",
    category: "Birthday - Boys",
    title: "Superhero Adventure",
    description: "Action-packed cake featuring favorite superhero characters",
  },
  {
    id: 3,
    src: "/images/cakes/princess-crown-cake.jpg",
    alt: "Princess Crown Cake",
    category: "Birthday - Girls",
    title: "Princess Crown",
    description: "Elegant pink ombre cake with golden crown and pearl details",
  },
  {
    id: 4,
    src: "/images/cakes/frozen-elsa-cake.jpg",
    alt: "Frozen Elsa Cake",
    category: "Birthday - Girls",
    title: "Frozen Fantasy",
    description: "Purple and teal cake with Elsa and magical snowflakes",
  },
  {
    id: 5,
    src: "/images/cakes/cocomelon-cake.jpg",
    alt: "Cocomelon Cake",
    category: "Birthday - Kids",
    title: "Cocomelon Fun",
    description: "Colorful first birthday cake with rainbow and characters",
  },
  {
    id: 6,
    src: "/images/cakes/bmw-car-cake.jpg",
    alt: "BMW Car Cake",
    category: "Birthday - Him",
    title: "BMW Car Lover's Dream",
    description: "Custom car-themed cake with blue drip and BMW branding",
  },
  {
    id: 7,
    src: "/images/cakes/don-julio-cake.jpg",
    alt: "Don Julio Cake",
    category: "Birthday - Him",
    title: "Don Julio Celebration",
    description: "Sophisticated whiskey-themed cake for special occasions",
  },
  {
    id: 8,
    src: "/images/cakes/rose-gold-glamour-cake.jpg",
    alt: "Rose Gold Glamour Cake",
    category: "Birthday - Her",
    title: "Rose Gold Glamour",
    description: "Elegant two-tier cake with balloon cluster and gold accents",
  },
  {
    id: 9,
    src: "/images/cakes/floral-elegance-cake.jpg",
    alt: "Floral Elegance Cake",
    category: "Birthday - Her",
    title: "Floral Elegance",
    description: "Square cake with delicate piping and satin bow finish",
  },
  {
    id: 10,
    src: "/images/cakes/milestone-60-cake.jpg",
    alt: "60th Birthday Cake",
    category: "Birthday - Her",
    title: "Milestone Celebration",
    description: "Sophisticated cake for special milestone birthdays",
  },
]

const categories = [
  "All",
  "Birthday - Boys",
  "Birthday - Girls",
  "Birthday - Kids",
  "Birthday - Him",
  "Birthday - Her",
  "Wedding",
  "Baby Celebration",
  "Corporate",
  "Novelty",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our <span className="font-dancing-script text-pink-600">Gallery</span>
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Explore our collection of handcrafted cakes, each one a unique work of art created with love and attention
            to detail
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "border-amber-300 text-amber-700 hover:bg-amber-50"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-pink-500 text-white">{image.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">{image.title}</h3>
                    <p className="text-amber-600">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-amber-700">
                No cakes found in this category. Check back soon for more amazing creations!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
