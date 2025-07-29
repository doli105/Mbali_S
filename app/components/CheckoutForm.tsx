"use client"

import type React from "react"

import { useState } from "react"
import { X, CreditCard, Calendar, User, Phone, Mail, MapPin, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "./CartContext"

interface CheckoutFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function CheckoutForm({ isOpen, onClose }: CheckoutFormProps) {
  const { items, getTotalPrice, clearCart } = useCart()
  const [deliveryMethod, setDeliveryMethod] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    eventDate: "",
    customNotes: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const deliveryFee = deliveryMethod === "delivery" ? 15 : 0
  const totalAmount = getTotalPrice() + deliveryFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment processing here
    console.log("Payment submitted:", { deliveryMethod, formData, items, totalAmount })
    alert("Payment successful! Your order has been confirmed. We'll contact you within 24 hours.")
    clearCart()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-amber-200">
        <CardHeader className="bg-gradient-to-r from-yellow-500 to-amber-500 text-amber-900">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold flex items-center">
              <CreditCard className="mr-2 h-6 w-6" />
              Secure Checkout
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-amber-900 hover:bg-amber-100">
              <X className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <div>
                      <p className="font-medium text-amber-900">{item.name}</p>
                      <p className="text-sm text-amber-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-amber-800">R{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-amber-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-amber-700">Subtotal:</span>
                  <span className="text-amber-900">R{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-700">Delivery Fee:</span>
                  <span className="text-amber-900">R{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-amber-900 border-t border-amber-200 pt-2">
                  <span>Total:</span>
                  <span>R{totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Method */}
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-3">Delivery Method *</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`p-4 rounded-lg border transition-all flex items-center space-x-3 ${
                      deliveryMethod === "pickup"
                        ? "border-yellow-500 bg-yellow-50 text-amber-900"
                        : "border-amber-200 hover:border-amber-300 text-amber-700"
                    }`}
                  >
                    <MapPin className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Store Pickup</div>
                      <div className="text-sm opacity-75">Free</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`p-4 rounded-lg border transition-all flex items-center space-x-3 ${
                      deliveryMethod === "delivery"
                        ? "border-yellow-500 bg-yellow-50 text-amber-900"
                        : "border-amber-200 hover:border-amber-300 text-amber-700"
                    }`}
                  >
                    <MapPin className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">Home Delivery</div>
                      <div className="text-sm opacity-75">R15 fee</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-amber-200 focus:border-yellow-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-amber-200 focus:border-yellow-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-amber-200 focus:border-yellow-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Event Date *
                  </label>
                  <Input
                    required
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="border-amber-200 focus:border-yellow-500"
                  />
                </div>
              </div>

              {deliveryMethod === "delivery" && (
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Delivery Address *
                  </label>
                  <Textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="border-amber-200 focus:border-yellow-500"
                    placeholder="Full delivery address including street, city, and postal code"
                  />
                </div>
              )}

              {/* Payment Information */}
              <div className="border-t border-amber-200 pt-6">
                <h4 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Secure Payment
                </h4>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Card Number *</label>
                    <Input
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="border-amber-200 focus:border-yellow-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Expiry Date *</label>
                      <Input
                        required
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                        className="border-amber-200 focus:border-yellow-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">CVV *</label>
                      <Input
                        required
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="border-amber-200 focus:border-yellow-500"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Cardholder Name *</label>
                    <Input
                      required
                      value={formData.cardName}
                      onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                      className="border-amber-200 focus:border-yellow-500"
                      placeholder="Name as it appears on card"
                    />
                  </div>
                </div>
              </div>

              {/* Custom Notes */}
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Special Instructions</label>
                <Textarea
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  className="border-amber-200 focus:border-yellow-500"
                  placeholder="Any special requests or dietary requirements..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold py-3 text-lg"
                disabled={!deliveryMethod}
              >
                <Lock className="mr-2 h-5 w-5" />
                Complete Secure Payment - R{totalAmount.toFixed(2)}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
