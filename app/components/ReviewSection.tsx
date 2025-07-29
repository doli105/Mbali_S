"use client"

import type React from "react"

import { useState } from "react"
import { Star, Quote, Plus, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Stanley created the most beautiful wedding cake for us! Not only was it stunning to look at, but it tasted absolutely incredible. Every guest asked for the recipe. The attention to detail was perfect.",
    occasion: "Wedding Cake",
    date: "2 weeks ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    rating: 5,
    review:
      "My daughter's dinosaur birthday cake was a huge hit! The kids were amazed by how realistic it looked, and the chocolate cake inside was delicious. Stanley really knows how to make kids' dreams come true.",
    occasion: "Kids Birthday",
    date: "1 month ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 5,
    review:
      "I ordered cupcakes for my office party and they were absolutely perfect! Beautiful presentation and every flavor was delicious. The team at Stanley's is so professional and accommodating.",
    occasion: "Corporate Event",
    date: "3 weeks ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    review:
      "The anniversary cake Stanley made for my wife and me was beyond our expectations. The design was elegant and the red velvet flavor was to die for. We'll definitely be back for future celebrations!",
    occasion: "Anniversary",
    date: "1 week ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function ReviewSection() {
  const [reviews, setReviews] = useState(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
    occasion: "",
  })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      review: newReview.review,
      occasion: newReview.occasion,
      date: "Just now",
      avatar: "/placeholder.svg?height=100&width=100",
    }
    setReviews([review, ...reviews])
    setNewReview({ name: "", email: "", rating: 5, review: "", occasion: "" })
    setShowForm(false)
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Customer <span className="font-dancing-script text-pink-600">Reviews</span>
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
            Don't just take our word for it - hear what our customers have to say about their sweet experiences
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-amber-900">{averageRating.toFixed(1)} out of 5</span>
            <span className="text-amber-600">({reviews.length} reviews)</span>
          </div>

          <Button
            onClick={() => setShowForm(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold btn-modern"
          >
            <Plus className="mr-2 h-5 w-5" />
            Write a Review
          </Button>
        </div>

        {/* Review Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-amber-900">Write a Review</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowForm(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Name *</label>
                    <Input
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      className="border-amber-200 focus:border-pink-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Email *</label>
                    <Input
                      type="email"
                      required
                      value={newReview.email}
                      onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                      className="border-amber-200 focus:border-pink-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Rating *</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Occasion</label>
                    <Input
                      value={newReview.occasion}
                      onChange={(e) => setNewReview({ ...newReview, occasion: e.target.value })}
                      placeholder="e.g., Wedding, Birthday, Corporate Event"
                      className="border-amber-200 focus:border-pink-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Review *</label>
                    <Textarea
                      required
                      value={newReview.review}
                      onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                      placeholder="Tell us about your experience..."
                      className="border-amber-200 focus:border-pink-300 min-h-24"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={`bg-white border-amber-100 hover:shadow-lg transition-all duration-500 card-hover`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-pink-300 mb-4" />

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-amber-700 mb-6 leading-relaxed">"{review.review}"</p>

                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                    <AvatarFallback className="bg-pink-100 text-pink-600">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-amber-900">{review.name}</div>
                    <div className="text-sm text-amber-600">{review.occasion}</div>
                    <div className="text-sm text-amber-500">{review.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
