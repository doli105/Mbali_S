"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const faqs = [
  {
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer delivery within the Gauteng area using Uber Eats for fast and reliable service. Your cakes will be delivered fresh and on time right to your doorstep.",
  },
  {
    question: "Can I customize my cake?",
    answer:
      "We specialize in custom cakes. You can choose your flavor, theme, size, and even send us inspiration pictures — we'll bring your vision to life!",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes! Our website allows you to track your order status (Pending, Confirmed, Out for Delivery, Delivered). You'll also receive updates once your order is on its way.",
  },
  {
    question: "Do you cater for events and corporate orders?",
    answer:
      "Yes, we do! From weddings and birthdays to corporate events and logo cakes, we cater for all occasions with beautifully crafted designs.",
  },
]

export default function Contact() {
  const handleMapClick = () => {
    const address = "15 Turkmeinistan Cres, Randburg, Gauteng, South Africa"
    const encodedAddress = encodeURIComponent(address)
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    window.open(googleMapsUrl, "_blank")
  }

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Get In <span className="font-dancing-script text-pink-600">Touch</span>
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ready to order your dream cake? We'd love to hear from you! Contact us to discuss your sweet vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-amber-100">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-amber-700 mb-2">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="border-amber-200 focus:border-pink-300"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-amber-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="border-amber-200 focus:border-pink-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-amber-200 focus:border-pink-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-amber-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 10 335 1169"
                  className="border-amber-200 focus:border-pink-300"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-amber-700 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:border-pink-300"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-2">
                  Tell us about your dream cake
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe your vision, preferred flavors, size, design ideas, and event date..."
                  className="border-amber-200 focus:border-pink-300 min-h-32"
                />
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-pink-500" />
                    <div>
                      <p className="font-medium text-amber-900">+27 10 335 1169</p>
                      <p className="text-sm text-amber-600">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-amber-900">078 491 4587</p>
                      <p className="text-sm text-amber-600">Quick responses via WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-amber-900">orders@stanleysbakery.co.za</p>
                      <p className="text-sm text-amber-600">Email us your requirements</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <a
                    href="https://wa.me/27784914587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Message us on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Location & Hours */}
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Visit Our Bakery</h3>

                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium text-amber-900">15 Turkmeinistan Cres</p>
                    <p className="text-amber-600">Randburg, Gauteng</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 mb-6">
                  <Clock className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <p className="font-medium text-amber-900 mb-2">Business Hours</p>
                    <div className="text-sm text-amber-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Sunday</span>
                        <span>9:00 AM - 6:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Google Maps */}
                <div
                  className="w-full h-48 bg-gradient-to-br from-amber-100 to-pink-100 rounded-lg border-2 border-amber-200 cursor-pointer hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                  onClick={handleMapClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-pink-50/80 flex flex-col items-center justify-center text-center p-4">
                    <MapPin className="h-12 w-12 text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-amber-800 font-semibold text-lg mb-1">Stanley's Bakery</p>
                    <p className="text-amber-700 text-sm mb-3">15 Turkmeinistan Cres, Randburg</p>
                    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                      <span className="text-blue-600 font-medium text-sm">Click for Directions</span>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
                  <div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-amber-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-amber-100 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-start space-x-2 mb-2">
                        <span className="text-green-500 font-bold text-lg">✅</span>
                        <p className="font-semibold text-amber-900 text-sm leading-relaxed">{faq.question}</p>
                      </div>
                      <p className="text-amber-700 text-sm leading-relaxed ml-6">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
