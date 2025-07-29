"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    image: "/images/cakes/safari-adventure-cake.jpg",
    caption:
      "🦁 Safari Adventure Cake! Three tiers of jungle fun with all your favorite animals. Perfect for little explorers! 🐘🦒 #SafariCake #BirthdaySpecial",
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    image: "/images/cakes/princess-crown-cake.jpg",
    caption:
      "👑 Fit for a princess! Pink ombre perfection with golden crown and pearl details. Every little girl deserves to feel like royalty! ✨ #PrincessCake #BirthdayMagic",
    likes: 312,
    comments: 24,
  },
  {
    id: 3,
    image: "/images/cakes/superhero-cake.jpg",
    caption:
      "💥 Superhero powers activated! This action-packed cake brings all the favorite heroes together for an epic celebration! 🦸‍♂️ #SuperheroCake #BirthdayHero",
    likes: 189,
    comments: 15,
  },
  {
    id: 4,
    image: "/images/cakes/rose-gold-glamour-cake.jpg",
    caption:
      "✨ Rose Gold Glamour at its finest! Elegant balloon cluster and gold leaf details make this cake absolutely stunning 🎈 #RoseGold #ElegantCakes",
    likes: 428,
    comments: 31,
  },
  {
    id: 5,
    image: "/images/cakes/bmw-car-cake.jpg",
    caption:
      "🚗 For the BMW enthusiast! Custom car cake with that perfect blue drip effect. Rev up your celebration! 🏁 #BMWCake #CarLovers",
    likes: 156,
    comments: 12,
  },
  {
    id: 6,
    image: "/images/cakes/frozen-elsa-cake.jpg",
    caption:
      "❄️ Let it go, let it go! Frozen-themed magic with Elsa and beautiful snowflake details. Winter wonderland vibes! ⛄ #FrozenCake #ElsaCake",
    likes: 367,
    comments: 28,
  },
  {
    id: 7,
    image: "/images/cakes/floral-elegance-cake.jpg",
    caption:
      "🌸 Floral Elegance with delicate piping and a beautiful satin bow. Sometimes simple sophistication says it all 💕 #FloralCake #Elegant",
    likes: 203,
    comments: 19,
  },
  {
    id: 8,
    image: "/images/cakes/cocomelon-cake.jpg",
    caption:
      "🌈 Cocomelon first birthday magic! Rainbow colors and favorite characters make this little one's day extra special! 🎂 #CocomelonCake #FirstBirthday",
    likes: 278,
    comments: 22,
  },
]

export default function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === instagramPosts.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? instagramPosts.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === instagramPosts.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
              Follow Our <span className="font-dancing-script text-pink-600">Instagram</span>
            </h2>
          </div>
          <p className="text-amber-700 max-w-2xl mx-auto mb-6">
            Get daily inspiration from our latest cake creations and behind-the-scenes moments
          </p>
          <Button
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold"
            onClick={() => window.open("https://instagram.com/stanleysbakery", "_blank")}
          >
            <Instagram className="w-5 h-5 mr-2" />
            @stanleysbakery
          </Button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {instagramPosts.map((post) => (
                <div key={post.id} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                        {/* Image */}
                        <div className="relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Instagram post"
                            width={500}
                            height={500}
                            className="w-full h-80 md:h-96 object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col justify-center">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                              <Instagram className="w-5 h-5 text-white" />
                            </div>
                            <span className="ml-3 font-semibold text-amber-900">@stanleysbakery</span>
                          </div>

                          <p className="text-amber-700 mb-6 leading-relaxed">{post.caption}</p>

                          <div className="flex items-center text-amber-600 text-sm">
                            <span className="mr-4">❤️ {post.likes} likes</span>
                            <span>💬 {post.comments} comments</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-amber-200 text-amber-700"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-amber-200 text-amber-700"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-pink-500 scale-110" : "bg-amber-300 hover:bg-amber-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
