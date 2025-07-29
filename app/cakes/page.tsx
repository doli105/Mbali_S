"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShoppingCart, Users, Heart, Crown, Palette, Building, Star, Upload, ArrowLeft } from "lucide-react"
import Image from "next/image"
import CakeCustomizationModal from "../components/CakeCustomizationModal"
import CustomCakeDesigner from "../components/CustomCakeDesigner"

const mainCategories = [
  {
    id: "birthday",
    title: "Birthday Cakes",
    icon: "🎂",
    description: "Celebrate another year of joy with our custom birthday creations",
    image: "/images/cakes/princess-crown-cake.jpg",
    subcategories: ["For Boys", "For Girls", "For Him", "For Her"],
  },
  {
    id: "baby",
    title: "Baby Celebration Cakes",
    icon: "👶",
    description: "Sweet celebrations for life's newest blessings",
    image: "/placeholder.svg?height=400&width=400&text=Soft+pastel+baby+shower+cake+with+teddy+bears",
    subcategories: ["Baby Shower Cakes", "Gender Reveal Cakes"],
  },
  {
    id: "wedding",
    title: "Wedding Cakes",
    icon: "💍",
    description: "Elegant designs for your special day",
    image: "/placeholder.svg?height=400&width=400&text=Elegant+white+3-tier+wedding+cake+with+roses",
    subcategories: ["Traditional Cakes", "Floral Cakes", "Luxurious Fondant Cakes"],
  },
  {
    id: "novelty",
    title: "Novelty & Themed Cakes",
    icon: "🎉",
    description: "Creative and fun custom designs",
    image: "/images/cakes/superhero-cake.jpg",
    subcategories: ["Money Cakes", "Drip Cakes"],
  },
  {
    id: "cupcakes",
    title: "Cupcake Range",
    icon: "🧁",
    description: "Individual treats perfect for any occasion",
    image: "/placeholder.svg?height=400&width=400&text=Assorted+decorated+cupcakes+with+colorful+frosting",
    subcategories: ["Themed Cupcakes"],
  },
  {
    id: "corporate",
    title: "Corporate & Custom Orders",
    icon: "🏢",
    description: "Professional cakes for business events",
    image: "/placeholder.svg?height=400&width=400&text=Professional+corporate+cake+with+company+logo",
    subcategories: ["Logo Cakes", "Product-Themed Cakes"],
  },
  {
    id: "customised",
    title: "Customised Cakes",
    icon: "🎨",
    description: "Design your own unique cake from scratch",
    image: "/placeholder.svg?height=400&width=400&text=Custom+cake+design+tools+and+options",
    subcategories: ["Design Your Own"],
  },
]

const categoryData = {
  birthday: {
    "For Boys": [
      {
        name: "Super Hero Cakes",
        description: "Action-packed superhero themed cakes with favorite characters",
        basePrice: 950,
        serves: "15-20 people",
        image: "/images/cakes/superhero-cake.jpg",
        popular: true,
      },
      {
        name: "Safari Adventure Cakes",
        description: "Wild safari adventure with jungle animals and nature themes",
        basePrice: 880,
        serves: "12-15 people",
        image: "/images/cakes/safari-adventure-cake.jpg",
        popular: true,
      },
      {
        name: "Cocomelon Cakes",
        description: "Fun Cocomelon themed cake with favorite characters and colors",
        basePrice: 880,
        serves: "12-15 people",
        image: "/images/cakes/cocomelon-cake.jpg",
        popular: true,
      },
    ],
    "For Girls": [
      {
        name: "Princess Cakes",
        description: "Magical princess cake with crowns, pearls and royal decorations",
        basePrice: 900,
        serves: "15-20 people",
        image: "/images/cakes/princess-crown-cake.jpg",
        popular: true,
      },
      {
        name: "Unicorn Fantasy Cakes",
        description: "Whimsical unicorn cake with rainbow colors and magical elements",
        basePrice: 850,
        serves: "12-15 people",
        image: "/images/cakes/frozen-elsa-cake.jpg",
        popular: true,
      },
      {
        name: "Cocomelon Cakes",
        description: "Colorful Cocomelon themed cake with beloved characters",
        basePrice: 880,
        serves: "12-15 people",
        image: "/images/cakes/cocomelon-cake.jpg",
        popular: true,
      },
    ],
    "For Him": [
      {
        name: "Sports Champion Cakes",
        description: "Themed cake celebrating his favorite sport or team",
        basePrice: 850,
        serves: "12-15 people",
        image: "/placeholder.svg?height=300&width=300&text=Sports+themed+mens+cake+with+team+colors",
        popular: true,
      },
      {
        name: "Suit and Gentleman Cakes",
        description: "Elegant masculine design with suit and tie theme",
        basePrice: 890,
        serves: "12-15 people",
        image: "/placeholder.svg?height=300&width=300&text=Elegant+gentleman+suit+themed+cake",
        popular: false,
      },
      {
        name: "Car Lovers Cakes",
        description: "Automotive themed cake with car brands and racing elements",
        basePrice: 920,
        serves: "15-20 people",
        image: "/images/cakes/bmw-car-cake.jpg",
        popular: true,
      },
      {
        name: "Whiskey Cakes",
        description: "Rich chocolate cake with whiskey bottle and masculine decorations",
        basePrice: 880,
        serves: "12-15 people",
        image: "/images/cakes/don-julio-cake.jpg",
        popular: false,
      },
    ],
    "For Her": [
      {
        name: "Floral Elegance Cakes",
        description: "Delicate floral designs with buttercream flowers and elegant details",
        basePrice: 780,
        serves: "10-12 people",
        image: "/images/cakes/floral-elegance-cake.jpg",
        popular: true,
      },
      {
        name: "Rose Gold Glamour Cakes",
        description: "Sophisticated design with rose gold accents, balloons and luxury elements",
        basePrice: 820,
        serves: "12-15 people",
        image: "/images/cakes/rose-gold-glamour-cake.jpg",
        popular: true,
      },
      {
        name: "Milestone Celebration Cakes",
        description: "Special milestone birthday cakes with elegant number decorations",
        basePrice: 950,
        serves: "15-20 people",
        image: "/images/cakes/milestone-60-cake.jpg",
        popular: false,
      },
    ],
  },
  baby: {
    "Baby Shower Cakes": [
      {
        name: "Teddy Bear Dreams",
        description: "Adorable teddy bear themed cake in soft pastels",
        basePrice: 750,
        serves: "15-20 people",
        image: "/placeholder.svg?height=300&width=300&text=Teddy+bear+baby+shower+cake+with+pastels",
        popular: true,
      },
      {
        name: "Baby Blocks Delight",
        description: "Cute baby blocks cake with alphabet and number decorations",
        basePrice: 680,
        serves: "12-15 people",
        image: "/placeholder.svg?height=300&width=300&text=Baby+blocks+cake+with+alphabet+decorations",
        popular: true,
      },
    ],
    "Gender Reveal Cakes": [
      {
        name: "Pink or Blue Surprise",
        description: "White exterior with pink or blue cake inside for the big reveal",
        basePrice: 680,
        serves: "12-15 people",
        image: "/placeholder.svg?height=300&width=300&text=Gender+reveal+cake+with+surprise+inside",
        popular: true,
      },
      {
        name: "Balloon Pop Reveal",
        description: "Cake with balloon decorations hiding the gender surprise",
        basePrice: 720,
        serves: "15-18 people",
        image: "/placeholder.svg?height=300&width=300&text=Balloon+gender+reveal+cake",
        popular: false,
      },
    ],
  },
  wedding: {
    "Traditional Cakes": [
      {
        name: "Classic Romance",
        description: "Three-tier traditional wedding cake with classic white design",
        basePrice: 2500,
        serves: "50-60 people",
        image: "/placeholder.svg?height=300&width=300&text=Traditional+3-tier+wedding+cake",
        popular: true,
      },
      {
        name: "Vintage Elegance",
        description: "Timeless vintage-style wedding cake with delicate piping",
        basePrice: 2800,
        serves: "60-70 people",
        image: "/placeholder.svg?height=300&width=300&text=Vintage+wedding+cake+with+piping",
        popular: false,
      },
    ],
    "Floral Cakes": [
      {
        name: "Garden Paradise",
        description: "Tiered cake with cascading sugar flowers and natural elements",
        basePrice: 2800,
        serves: "60-70 people",
        image: "/placeholder.svg?height=300&width=300&text=Floral+tiered+wedding+cake+with+flowers",
        popular: true,
      },
      {
        name: "Rose Garden Dream",
        description: "Romantic cake adorned with handcrafted sugar roses",
        basePrice: 3000,
        serves: "65-75 people",
        image: "/placeholder.svg?height=300&width=300&text=Rose+garden+wedding+cake",
        popular: true,
      },
    ],
    "Luxurious Fondant Cakes": [
      {
        name: "Royal Elegance",
        description: "Multi-tier fondant cake with intricate details and luxury finish",
        basePrice: 3200,
        serves: "70-80 people",
        image: "/placeholder.svg?height=300&width=300&text=Luxurious+fondant+wedding+cake+with+details",
        popular: false,
      },
      {
        name: "Pearl & Lace Luxury",
        description: "Sophisticated fondant cake with pearl and lace decorations",
        basePrice: 3500,
        serves: "80-90 people",
        image: "/placeholder.svg?height=300&width=300&text=Pearl+lace+luxury+wedding+cake",
        popular: false,
      },
    ],
  },
  novelty: {
    "Money Cakes": [
      {
        name: "Cash Celebration",
        description: "Cake decorated with edible money elements and luxury themes",
        basePrice: 950,
        serves: "15-20 people",
        image: "/placeholder.svg?height=300&width=300&text=Money+themed+cake+with+cash+decorations",
        popular: true,
      },
      {
        name: "Dollar Bill Stack",
        description: "Creative cake designed to look like a stack of money",
        basePrice: 1100,
        serves: "18-22 people",
        image: "/placeholder.svg?height=300&width=300&text=Dollar+bill+stack+cake",
        popular: false,
      },
    ],
    "Drip Cakes": [
      {
        name: "Golden Drip",
        description: "Chocolate or colored drip cake with elegant dripping effect",
        basePrice: 850,
        serves: "12-15 people",
        image: "/images/cakes/don-julio-cake.jpg",
        popular: true,
      },
      {
        name: "Rainbow Drip Delight",
        description: "Colorful drip cake with rainbow ganache and sprinkles",
        basePrice: 780,
        serves: "10-12 people",
        image: "/placeholder.svg?height=300&width=300&text=Rainbow+drip+cake+with+sprinkles",
        popular: true,
      },
    ],
  },
  cupcakes: {
    "Themed Cupcakes": [
      {
        name: "Birthday Celebration Pack",
        description: "12 themed cupcakes matching your party theme",
        basePrice: 520,
        serves: "12 people",
        image: "/placeholder.svg?height=300&width=300&text=Birthday+themed+cupcakes+with+decorations",
        popular: true,
      },
      {
        name: "Wedding Cupcake Tower",
        description: "Elegant cupcakes arranged in a beautiful tower display",
        basePrice: 850,
        serves: "24 people",
        image: "/placeholder.svg?height=300&width=300&text=Wedding+cupcake+tower+display",
        popular: true,
      },
      {
        name: "Corporate Event Pack",
        description: "Professional cupcakes with company branding",
        basePrice: 680,
        serves: "18 people",
        image: "/placeholder.svg?height=300&width=300&text=Corporate+branded+cupcakes",
        popular: false,
      },
    ],
  },
  corporate: {
    "Logo Cakes": [
      {
        name: "Corporate Branding",
        description: "Custom cake featuring your company logo and branding",
        basePrice: 1200,
        serves: "20-25 people",
        image: "/placeholder.svg?height=300&width=300&text=Corporate+logo+cake+with+branding",
        popular: true,
      },
      {
        name: "Anniversary Celebration",
        description: "Company anniversary cake with milestone decorations",
        basePrice: 1350,
        serves: "25-30 people",
        image: "/placeholder.svg?height=300&width=300&text=Company+anniversary+cake",
        popular: false,
      },
    ],
    "Product-Themed Cakes": [
      {
        name: "Product Launch",
        description: "Cake designed to match your product or service launch",
        basePrice: 1350,
        serves: "25-30 people",
        image: "/placeholder.svg?height=300&width=300&text=Product+themed+corporate+cake",
        popular: false,
      },
      {
        name: "Brand Showcase",
        description: "Creative cake showcasing your brand's products or services",
        basePrice: 1500,
        serves: "30-35 people",
        image: "/placeholder.svg?height=300&width=300&text=Brand+showcase+cake",
        popular: true,
      },
    ],
  },
  customised: {
    "Design Your Own": [
      {
        name: "Custom Cake Designer",
        description: "Create your perfect cake with our interactive design tool",
        basePrice: 800,
        serves: "Varies by design",
        image: "/placeholder.svg?height=300&width=300&text=Custom+cake+design+interface",
        popular: true,
        isCustomDesigner: true,
      },
    ],
  },
}

export default function Cakes() {
  const [currentView, setCurrentView] = useState<"main" | "category" | "subcategory">("main")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")
  const [customizationModal, setCustomizationModal] = useState<{
    isOpen: boolean
    cake: any
    category: string
    subcategory: string
  }>({
    isOpen: false,
    cake: null,
    category: "",
    subcategory: "",
  })
  const [showCustomDesigner, setShowCustomDesigner] = useState(false)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentView("category")
  }

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory)
    setCurrentView("subcategory")
  }

  const handleAddToCart = (cake: any) => {
    if (cake.isCustomDesigner) {
      setShowCustomDesigner(true)
    } else {
      setCustomizationModal({
        isOpen: true,
        cake,
        category: selectedCategory,
        subcategory: selectedSubcategory,
      })
    }
  }

  const handleBackToMain = () => {
    setCurrentView("main")
    setSelectedCategory("")
    setSelectedSubcategory("")
  }

  const handleBackToCategory = () => {
    setCurrentView("category")
    setSelectedSubcategory("")
  }

  const selectedCategoryData = mainCategories.find((cat) => cat.id === selectedCategory)
  const subcategoryData =
    selectedCategory && selectedSubcategory ? categoryData[selectedCategory]?.[selectedSubcategory] : []

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our <span className="font-dancing-script text-pink-600">Cake Menu</span>
          </h1>
          <p className="text-amber-700 max-w-2xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Choose from our signature collections or design your perfect custom cake
          </p>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 max-w-3xl mx-auto">
            <p className="text-amber-800 font-medium text-xs sm:text-sm">
              📅 <strong>Important:</strong> Orders must be placed 72 hours in advance. Rush orders available with extra
              fee.
            </p>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        {currentView !== "main" && (
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-amber-600">
              <button onClick={handleBackToMain} className="hover:text-amber-800 transition-colors flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Cake Menu
              </button>
              {currentView === "category" && (
                <>
                  <span>/</span>
                  <span className="text-amber-800 font-medium">{selectedCategoryData?.title}</span>
                </>
              )}
              {currentView === "subcategory" && (
                <>
                  <span>/</span>
                  <button onClick={handleBackToCategory} className="hover:text-amber-800 transition-colors">
                    {selectedCategoryData?.title}
                  </button>
                  <span>/</span>
                  <span className="text-amber-800 font-medium">{selectedSubcategory}</span>
                </>
              )}
            </nav>
          </div>
        )}

        {/* Main Category View */}
        {currentView === "main" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mainCategories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={400}
                      height={300}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="bg-white rounded-full p-1.5 sm:p-2 shadow-md">
                        <span className="text-lg sm:text-2xl">{category.icon}</span>
                      </div>
                    </div>
                    {category.id === "customised" && (
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <div className="bg-yellow-500 text-amber-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                          <Upload className="h-3 w-3 mr-1" />
                          NEW
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">{category.title}</h3>
                    <p className="text-amber-700 mb-3 sm:mb-4 text-sm sm:text-base">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-amber-600">
                        {category.subcategories.length} {category.id === "customised" ? "option" : "subcategories"}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-amber-700 hover:text-amber-900 hover:bg-amber-50 text-xs sm:text-sm"
                      >
                        {category.id === "customised" ? "Design Now" : "Explore"}{" "}
                        <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Category Subcategories View */}
        {currentView === "category" && selectedCategoryData && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-2">{selectedCategoryData.title}</h2>
              <p className="text-amber-600">{selectedCategoryData.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategoryData.subcategories.map((subcategory) => (
                <Card
                  key={subcategory}
                  className="group hover:shadow-lg transition-all duration-300 border-amber-200 bg-white cursor-pointer"
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {subcategory.includes("Boys") && <Users className="h-6 w-6 text-blue-600" />}
                      {subcategory.includes("Girls") && <Crown className="h-6 w-6 text-pink-600" />}
                      {subcategory.includes("Him") && <Users className="h-6 w-6 text-amber-600" />}
                      {subcategory.includes("Her") && <Heart className="h-6 w-6 text-rose-600" />}
                      {subcategory.includes("Wedding") && <Heart className="h-6 w-6 text-pink-600" />}
                      {subcategory.includes("Baby") && <Heart className="h-6 w-6 text-blue-400" />}
                      {subcategory.includes("Corporate") && <Building className="h-6 w-6 text-gray-600" />}
                      {subcategory.includes("Design") && <Palette className="h-6 w-6 text-purple-600" />}
                      {!subcategory.includes("Boys") &&
                        !subcategory.includes("Girls") &&
                        !subcategory.includes("Him") &&
                        !subcategory.includes("Her") &&
                        !subcategory.includes("Wedding") &&
                        !subcategory.includes("Baby") &&
                        !subcategory.includes("Corporate") &&
                        !subcategory.includes("Design") && <Star className="h-6 w-6 text-amber-600" />}
                    </div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{subcategory}</h3>
                    <p className="text-amber-600 text-sm mb-4">
                      {categoryData[selectedCategory]?.[subcategory]?.length || 0} options available
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      {subcategory.includes("Design") ? "Start Designing" : "View Options"}{" "}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Subcategory Cakes View */}
        {currentView === "subcategory" && subcategoryData.length > 0 && (
          <div>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-2">{selectedSubcategory}</h2>
              <p className="text-amber-600 text-sm sm:text-base">
                {selectedSubcategory.includes("Design")
                  ? "Create your perfect custom cake"
                  : `Choose from our ${selectedSubcategory.toLowerCase()} collection`}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {subcategoryData.map((cake, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={cake.image || "/placeholder.svg"}
                        alt={cake.name}
                        width={300}
                        height={300}
                        className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {cake.popular && (
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <div className="bg-yellow-500 text-amber-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </div>
                        </div>
                      )}
                      {cake.isCustomDesigner && (
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                            <Palette className="h-3 w-3 mr-1" />
                            Custom
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">{cake.name}</h4>
                      <p className="text-amber-700 mb-2 sm:mb-3 text-sm sm:text-base">{cake.description}</p>
                      <p className="text-xs sm:text-sm text-amber-600 mb-3 sm:mb-4">Serves {cake.serves}</p>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-xl sm:text-2xl font-bold text-amber-800">From R{cake.basePrice}</span>
                        <Button
                          className={`w-full sm:w-auto font-bold text-sm ${
                            cake.isCustomDesigner
                              ? "bg-purple-500 hover:bg-purple-600 text-white"
                              : "bg-yellow-500 hover:bg-yellow-600 text-amber-900"
                          }`}
                          onClick={() => handleAddToCart(cake)}
                        >
                          {cake.isCustomDesigner ? (
                            <>
                              <Palette className="h-4 w-4 mr-2" />
                              Start Designing
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Customize & Add
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Customization Modal */}
        <CakeCustomizationModal
          isOpen={customizationModal.isOpen}
          onClose={() => setCustomizationModal({ isOpen: false, cake: null, category: "", subcategory: "" })}
          cake={customizationModal.cake}
          category={customizationModal.category}
          subcategory={customizationModal.subcategory}
        />

        {/* Custom Cake Designer Modal */}
        <CustomCakeDesigner isOpen={showCustomDesigner} onClose={() => setShowCustomDesigner(false)} />
      </div>
    </div>
  )
}
