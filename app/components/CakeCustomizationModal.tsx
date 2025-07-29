"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { useCart } from "./CartContext"

interface CakeCustomizationModalProps {
  isOpen: boolean
  onClose: () => void
  cake: any
  category: string
  subcategory: string
}

const cakeSizes = [
  { name: "Small (6 inch)", serves: "6-8 people", multiplier: 1 },
  { name: "Medium (8 inch)", serves: "10-12 people", multiplier: 1.3 },
  { name: "Large (10 inch)", serves: "15-18 people", multiplier: 1.6 },
  { name: "Extra Large (12 inch)", serves: "20-25 people", multiplier: 2 },
  { name: "Two Tier", serves: "25-30 people", multiplier: 2.5 },
  { name: "Three Tier", serves: "40-50 people", multiplier: 3.5 },
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

const frostingOptions = [
  "Buttercream",
  "Cream Cheese Frosting",
  "Chocolate Ganache",
  "Fondant",
  "Whipped Cream",
  "Caramel Frosting",
]

const decorativeOptions = [
  { name: "Fresh Flowers", price: 150 },
  { name: "Sugar Flowers", price: 200 },
  { name: "Chocolate Drip", price: 100 },
  { name: "Gold Leaf Accents", price: 250 },
  { name: "Edible Pearls", price: 120 },
  { name: "Custom Topper", price: 180 },
  { name: "Macarons", price: 160 },
  { name: "Fresh Berries", price: 140 },
]

export default function CakeCustomizationModal({
  isOpen,
  onClose,
  cake,
  category,
  subcategory,
}: CakeCustomizationModalProps) {
  const [selectedSize, setSelectedSize] = useState(cakeSizes[1])
  const [selectedFlavor, setSelectedFlavor] = useState(cakeFlavors[0])
  const [selectedFrosting, setSelectedFrosting] = useState(frostingOptions[0])
  const [selectedDecorations, setSelectedDecorations] = useState<typeof decorativeOptions>([])
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!cake) return null

  const basePrice = cake.basePrice * selectedSize.multiplier
  const decorationsPrice = selectedDecorations.reduce((sum, decoration) => sum + decoration.price, 0)
  const totalPrice = (basePrice + decorationsPrice) * quantity

  const handleDecorationToggle = (decoration: (typeof decorativeOptions)[0]) => {
    setSelectedDecorations((prev) =>
      prev.find((d) => d.name === decoration.name)
        ? prev.filter((d) => d.name !== decoration.name)
        : [...prev, decoration],
    )
  }

  const handleAddToCart = () => {
    const customizedCake = {
      id: `${cake.name}-${Date.now()}`,
      name: cake.name,
      category,
      subcategory,
      size: selectedSize.name,
      flavor: selectedFlavor,
      frosting: selectedFrosting,
      decorations: selectedDecorations,
      specialInstructions,
      quantity,
      price: totalPrice,
      image: cake.image,
    }

    addToCart(customizedCake)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-900">Customize Your {cake.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Cake Image and Basic Info */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={cake.image || "/placeholder.svg"}
                alt={cake.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{cake.name}</h3>
              <p className="text-amber-700 mb-2">{cake.description}</p>
              <Badge variant="secondary" className="bg-yellow-100 text-amber-800">
                {category} → {subcategory}
              </Badge>
            </div>
          </div>

          {/* Right Column - Customization Options */}
          <div className="space-y-6">
            {/* Size Selection */}
            <div>
              <Label className="text-base font-semibold text-amber-900 mb-3 block">Choose Size</Label>
              <Select
                value={selectedSize.name}
                onValueChange={(value) => setSelectedSize(cakeSizes.find((s) => s.name === value) || cakeSizes[1])}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cakeSizes.map((size) => (
                    <SelectItem key={size.name} value={size.name}>
                      {size.name} - {size.serves}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Flavor Selection */}
            <div>
              <Label className="text-base font-semibold text-amber-900 mb-3 block">Choose Flavor</Label>
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

            {/* Frosting Selection */}
            <div>
              <Label className="text-base font-semibold text-amber-900 mb-3 block">Choose Frosting</Label>
              <Select value={selectedFrosting} onValueChange={setSelectedFrosting}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {frostingOptions.map((frosting) => (
                    <SelectItem key={frosting} value={frosting}>
                      {frosting}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Decorative Options */}
            <div>
              <Label className="text-base font-semibold text-amber-900 mb-3 block">Add Decorations (Optional)</Label>
              <div className="grid grid-cols-2 gap-2">
                {decorativeOptions.map((decoration) => (
                  <Card
                    key={decoration.name}
                    className={`cursor-pointer transition-all ${
                      selectedDecorations.find((d) => d.name === decoration.name)
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-200 hover:border-yellow-300"
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

            {/* Special Instructions */}
            <div>
              <Label className="text-base font-semibold text-amber-900 mb-3 block">Special Instructions</Label>
              <Textarea
                placeholder="Any special requests, dietary requirements, or custom messages..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                rows={3}
              />
            </div>

            {/* Quantity and Price */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <Label className="text-base font-semibold text-amber-900">Quantity</Label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2 text-sm text-amber-700">
                <div className="flex justify-between">
                  <span>Base Price ({selectedSize.name}):</span>
                  <span>R{(basePrice * quantity).toFixed(2)}</span>
                </div>
                {decorationsPrice > 0 && (
                  <div className="flex justify-between">
                    <span>Decorations:</span>
                    <span>R{(decorationsPrice * quantity).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg text-amber-900 border-t pt-2">
                  <span>Total:</span>
                  <span>R{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-bold"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart - R{totalPrice.toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
