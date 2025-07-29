"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import OrderForm from "./OrderForm"

const featuredCakes = [
  {
    id: 1,
    name: "Safari Adventure Cake",
    description: "Three-tier jungle themed cake with handcrafted safari animals",
    price: "From R1850",
    image: "/images/cakes/safari-adventure-cake.jpg",
    category: "Birthday - Boys",
  },
  {
    id: 2,
    name: "Princess Crown Cake",
    description: "Elegant pink ombre cake with golden crown and pearl details",
    price: "From R1250",
    image: "/images/cakes/princess-crown-cake.jpg",
    category: "Birthday - Girls",
  },
  {
    id: 3,
    name: "Rose Gold Glamour",
    description: "Sophisticated two-tier cake with balloon cluster and gold accents",
    price: "From R1650",
    image: "/images/cakes/rose-gold-glamour-cake.jpg",
    category: "Birthday - Her",
  },
  {
    id: 4,
    name: "BMW Car Lover's Dream",
    description: "Custom car-themed cake with blue drip and BMW branding",
    price: "From R1450",
    image: "/images/cakes/bmw-car-cake.jpg",
    category: "Birthday - Him",
  },
  {
    id: 5,
    name: "Superhero Adventure",
    description: "Action-packed cake featuring favorite superhero characters",
    price: "From R1350",
    image: "/images/cakes/superhero-cake.jpg",
    category: "Birthday - Boys",
  },
  {
    id: 6,
    name: "Floral Elegance",
    description: "Square cake with delicate piping and satin bow finish",
    price: "From R950",
    image: "/images/cakes/floral-elegance-cake.jpg",
    category: "Birthday - Her",
  },
]

export default function FeaturedCakes() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Featured <span className="font-dancing-script text-pink-600">Creations</span>
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Discover our most popular cake designs, each crafted with premium ingredients and artistic flair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCakes.map((cake) => (
            <Card key={cake.id} className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={cake.image || "/placeholder.svg"}
                    alt={cake.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {cake.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{cake.name}</h3>
                  <p className="text-amber-600 mb-4">{cake.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-800">{cake.price}</span>
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold"
                      onClick={() => setIsOrderFormOpen(true)}
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <OrderForm isOpen={isOrderFormOpen} onClose={() => setIsOrderFormOpen(false)} />

        <div className="text-center mt-12">
          <Link href="/cakes">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
            >
              View All Cakes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
