"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Upload, ImageIcon, Cake, Palette, ShoppingCart, ArrowRight, ArrowLeft, X } from "lucide-react"
import Image from "next/image"
import { useCart } from "./CartContext"

interface CustomCakeDesignerProps {
  isOpen: boolean
  onClose: () => void
}

const designSteps = [
  { id: 1, title: "Upload Images", description: "Share your inspiration" },
  { id: 2, title: "Choose Size", description: "Select cake dimensions" },
  { id: 3, title: "Pick Flavors", description: "Choose your favorites" },
  { id: 4, title: "Add Details", description: "Final customizations" },
]

const cakeSizes = [
  { name: "Small (6 inch)", serves: "6-8 people", price: 800 },
  { name: "Medium (8 inch)", serves: "10-12 people", price: 1000 },
  { name: "Large (10 inch)", serves: "15-18 people", price: 1300 },
  { name: "Extra Large (12 inch)", serves: "20-25 people", price: 1600 },
  { name: "Two Tier", serves: "25-30 people", price: 2000 },
  { name: "Three Tier", serves: "40-50 people", price: 2800 },
]

const cakeFlavors = [
  "Vanilla Sponge",
  "Chocolate Fudge",
  "Red Velvet",
  "Lemon Drizzle",
  "Carrot Cake",
  "Strawberry",
  "Coconut",
  "Coffee Mocha",
  "Funfetti",
]

const decorationOptions = [
  { name: "Fresh Flowers", price: 150 },
  { name: "Sugar Flowers", price: 200 },
  { name: "Chocolate Drip", price: 100 },
  { name: "Gold Leaf Accents", price: 250 },
  { name: "Edible Pearls", price: 120 },
  { name: "Custom Topper", price: 180 },
  { name: "Macarons", price: 160 },
  { name: "Fresh Berries", price: 140 },
  { name: "Fondant Figures", price: 300 },
  { name: "Edible Image Print", price: 180 },
]

export default function CustomCakeDesigner({ isOpen, onClose }: CustomCakeDesignerProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState(cakeSizes[1])
  const [selectedFlavor, setSelectedFlavor] = useState(cakeFlavors[0])
  const [selectedDecorations, setSelectedDecorations] = useState<typeof decorationOptions>([])
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [eventDate, setEventDate] = useState("")
  const { addToCart } = useCart()

  const progress = (currentStep / designSteps.length) * 100
  const decorationsPrice = selectedDecorations.reduce((sum, decoration) => sum + decoration.price, 0)
  const totalPrice = selectedSize.price + decorationsPrice

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && uploadedImages.length < 5) {
      const newImages = Array.from(files).slice(0, 5 - uploadedImages.length)
      newImages.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages((prev) => [...prev, e.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleDecorationToggle = (decoration: (typeof decorationOptions)[0]) => {
    setSelectedDecorations((prev) =>
      prev.find((d) => d.name === decoration.name)
        ? prev.filter((d) => d.name !== decoration.name)
        : [...prev, decoration],
    )
  }

  const handleNext = () => {
    if (currentStep < designSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmitOrder = () => {
    const customCake = {
      id: `custom-${Date.now()}`,
      name: "Custom Designed Cake",
      category: "Custom",
      subcategory: "Design Your Own",
      size: selectedSize.name,
      flavor: selectedFlavor,
      decorations: selectedDecorations,
      specialInstructions,
      customerInfo: {
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
        eventDate,
      },
      uploadedImages,
      quantity: 1,
      price: totalPrice,
      image: uploadedImages[0] || "/placeholder.svg?height=300&width=300&text=Custom+Cake+Design",
    }

    addToCart(customCake)
    onClose()
    // Reset form
    setCurrentStep(1)
    setUploadedImages([])
    setSelectedSize(cakeSizes[1])
    setSelectedFlavor(cakeFlavors[0])
    setSelectedDecorations([])
    setSpecialInstructions("")
    setCustomerName("")
    setCustomerEmail("")
    setCustomerPhone("")
    setEventDate("")
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Upload className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Upload Your Inspiration</h3>
              <p className="text-amber-700">Share up to 5 images that inspire your dream cake design</p>
            </div>

            <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <ImageIcon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-600 font-medium">Click to upload images</p>
                <p className="text-sm text-purple-400">PNG, JPG up to 10MB each</p>
              </label>
            </div>

            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Uploaded ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-1 right-1 h-6 w-6 p-0"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Cake className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Choose Your Cake Size</h3>
              <p className="text-amber-700">Select the perfect size for your celebration</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cakeSizes.map((size) => (
                <Card
                  key={size.name}
                  className={`cursor-pointer transition-all ${
                    selectedSize.name === size.name
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-amber-900">{size.name}</h4>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        R{size.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-amber-600">{size.serves}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Palette className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Choose Flavors & Decorations</h3>
              <p className="text-amber-700">Select your favorite flavors and decorative elements</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold text-amber-900 mb-3 block">Cake Flavor</Label>
                <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cakeFlavors.map((flavor) => (
                      <SelectItem key={flavor} value={flavor}>
                        {flavor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base font-semibold text-amber-900 mb-3 block">
                  Decorations & Toppers (Optional)
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {decorationOptions.map((decoration) => (
                    <Card
                      key={decoration.name}
                      className={`cursor-pointer transition-all ${
                        selectedDecorations.find((d) => d.name === decoration.name)
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() => handleDecorationToggle(decoration)}
                    >
                      <CardContent className="p-3">
                        <div className="text-sm font-medium text-amber-900">{decoration.name}</div>
                        <div className="text-xs text-amber-600">+R{decoration.price}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <ShoppingCart className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Final Details</h3>
              <p className="text-amber-700">Add your contact information and special instructions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customerName">Your Name *</Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="customerEmail">Email Address *</Label>
                <Input
                  id="customerEmail"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <Label htmlFor="customerPhone">Phone Number *</Label>
                <Input
                  id="customerPhone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+27 XX XXX XXXX"
                />
              </div>
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input id="eventDate" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
              </div>
            </div>

            <div>
              <Label htmlFor="specialInstructions">Special Instructions</Label>
              <Textarea
                id="specialInstructions"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Any specific details, dietary requirements, or special requests..."
                rows={4}
              />
            </div>

            {/* Order Summary */}
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4">
                <h4 className="font-semibold text-amber-900 mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cake Size:</span>
                    <span>{selectedSize.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flavor:</span>
                    <span>{selectedFlavor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>R{selectedSize.price}</span>
                  </div>
                  {decorationsPrice > 0 && (
                    <div className="flex justify-between">
                      <span>Decorations:</span>
                      <span>R{decorationsPrice}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>R{totalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-600">Custom Cake Designer</DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {designSteps.map((step) => (
              <div
                key={step.id}
                className={`text-center flex-1 ${step.id <= currentStep ? "text-purple-600" : "text-gray-400"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center text-sm font-bold ${
                    step.id <= currentStep ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-xs font-medium">{step.title}</div>
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-6">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center bg-transparent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < designSteps.length ? (
            <Button onClick={handleNext} className="bg-purple-500 hover:bg-purple-600 text-white flex items-center">
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmitOrder}
              disabled={!customerName || !customerEmail || !customerPhone}
              className="bg-purple-500 hover:bg-purple-600 text-white flex items-center"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart - R{totalPrice}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
