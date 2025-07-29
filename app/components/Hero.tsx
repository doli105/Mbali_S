"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles, ShoppingCart, Package } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "./CartContext"
import CartModal from "./CartModal"
import OrderTracking from "./OrderTracking"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const totalItems = cart.isLoaded ? cart.getTotalItems() : 0

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-gentleFloat"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-gentleFloat"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-200 rounded-full opacity-15 animate-gentleFloat"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Quick Action Buttons - Top Right */}
      <div className="absolute top-20 right-4 sm:right-8 z-20 flex flex-col space-y-3">
        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-white/90 backdrop-blur-sm hover:bg-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          disabled={!cart.isLoaded}
          title="View Cart"
        >
          <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-amber-800 group-hover:text-amber-900" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-amber-900 text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center animate-pulse">
              {totalItems}
            </span>
          )}
        </button>

        {/* Track Order Button */}
        <button
          onClick={() => setIsOrderTrackingOpen(true)}
          className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          title="Track Your Order"
        >
          <Package className="h-5 w-5 sm:h-6 sm:w-6 text-amber-800 group-hover:text-amber-900" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 xl:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              {/* Rating Section */}
              <div
                className={`flex items-center justify-center lg:justify-start space-x-2 ${isVisible ? "animate-slideInFromLeft stagger-1" : "opacity-0"}`}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 sm:h-5 sm:w-5 fill-yellow-500 text-yellow-500 transition-all duration-300 hover:scale-125 ${isVisible ? "animate-scaleIn" : ""}`}
                      style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-amber-800 font-medium">500+ Happy Customers</span>
                <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
              </div>

              {/* Main Heading */}
              <div className={`${isVisible ? "animate-slideInFromLeft stagger-2" : "opacity-0"}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                  <span className="inline-block hover:animate-pulse transition-all duration-300">Baked</span>{" "}
                  <span className="inline-block hover:animate-pulse transition-all duration-300">with</span>
                  <span className="font-dancing-script text-amber-800 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:text-pink-600 transition-colors duration-500">
                    Love,
                  </span>
                  <span className="inline-block hover:animate-pulse transition-all duration-300">Naturally!</span>
                </h1>
              </div>

              {/* Description */}
              <p
                className={`text-base sm:text-lg text-amber-700 max-w-lg mx-auto lg:mx-0 leading-relaxed ${isVisible ? "animate-slideInFromLeft stagger-3" : "opacity-0"}`}
              >
                From elegant wedding cakes to playful birthday creations, we bring your sweetest dreams to life with
                artisan craftsmanship and love in every bite.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start ${isVisible ? "animate-slideInFromBottom stagger-4" : "opacity-0"}`}
            >
              <Link href="/cakes">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-amber-900 font-bold px-6 sm:px-8 btn-dynamic hover-lift group"
                >
                  <span className="relative z-10">VIEW CAKE OPTIONS</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-amber-600 text-amber-800 hover:bg-amber-100 bg-white/80 backdrop-blur-sm font-medium hover-lift btn-dynamic"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>

            {/* Quick Actions Row */}
            <div
              className={`flex items-center justify-center lg:justify-start space-x-4 ${isVisible ? "animate-slideInFromBottom stagger-5" : "opacity-0"}`}
            >
              {/* Cart Quick Access */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                disabled={!cart.isLoaded}
              >
                <ShoppingCart className="h-4 w-4 text-amber-800 group-hover:text-amber-900" />
                <span className="text-sm font-medium text-amber-800 group-hover:text-amber-900">
                  Cart {totalItems > 0 && `(${totalItems})`}
                </span>
              </button>

              {/* Track Order Quick Access */}
              <button
                onClick={() => setIsOrderTrackingOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <Package className="h-4 w-4 text-amber-800 group-hover:text-amber-900" />
                <span className="text-sm font-medium text-amber-800 group-hover:text-amber-900">Track Order</span>
              </button>
            </div>

            {/* Features */}
            <div
              className={`flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 text-xs sm:text-sm text-amber-700 ${isVisible ? "animate-slideInFromBottom stagger-6" : "opacity-0"}`}
            >
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <span className="font-medium">Custom Designs</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Logo Section */}
          <div className="relative order-first lg:order-last">
            {/* Desktop Logo Display */}
            <div
              className={`relative w-full h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden sm:block hover-lift ${isVisible ? "animate-slideInFromRight" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50 to-yellow-100 p-4 sm:p-8 flex items-center justify-center">
                <Image
                  src="/images/stanley-logo-full.jpg"
                  alt="Stanley's Bakery - Made from scratch. Baked fresh. Simply delicious"
                  width={400}
                  height={300}
                  className="object-contain hover:scale-105 transition-transform duration-500 animate-gentleFloat max-w-full max-h-full"
                  priority
                />
              </div>

              {/* Shimmer Effect Overlay */}
              <div className="absolute inset-0 animate-shimmer opacity-30"></div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Mobile Logo Display */}
            <div className={`sm:hidden flex justify-center ${isVisible ? "animate-slideInFromRight" : "opacity-0"}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-amber-200 shadow-2xl w-full max-w-sm hover-lift glass-effect">
                <Image
                  src="/images/stanley-logo-full.jpg"
                  alt="Stanley's Bakery - Made from scratch. Baked fresh. Simply delicious"
                  width={320}
                  height={240}
                  className="object-contain w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden lg:block">
              <Link href="/cakes">
                <Button
                  size="lg"
                  className="rounded-full bg-pink-500 hover:bg-pink-600 text-white shadow-2xl hover-glow animate-gentleFloat"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modals */}
      {cart.isLoaded && <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
      <OrderTracking isOpen={isOrderTrackingOpen} onClose={() => setIsOrderTrackingOpen(false)} />
    </section>
  )
}
