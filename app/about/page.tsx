import { Heart, Award, Users, Clock } from "lucide-react"
import BakerySlideshow from "../components/BakerySlideshow"

export default function About() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            About <span className="font-dancing-script text-pink-600">Stanley's Bakery</span>
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            A sweet story of passion, artistry, and the joy of creating unforgettable moments through cake
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-amber-900">Our Sweet Beginning</h2>
            <p className="text-amber-700 leading-relaxed">
              Stanley's Bakery began in 2015 with a simple dream: to create beautiful, delicious cakes that bring
              families together and make celebrations truly special. What started as a small home kitchen operation has
              grown into the community's beloved bakery.
            </p>
            <p className="text-amber-700 leading-relaxed">
              Our founder, Sfiso Linda, discovered his passion for baking during college when he started making birthday
              cakes for friends. Word spread quickly about his incredible talent for both flavor and design, and soon he
              was taking orders from across campus.
            </p>
            <p className="text-amber-700 leading-relaxed">
              Today, we're proud to be part of hundreds of celebrations each year, from intimate birthday parties to
              grand weddings. Every cake we create carries forward our commitment to quality, creativity, and the belief
              that every celebration deserves something extraordinary.
            </p>
          </div>
          <div className="relative">
            <BakerySlideshow />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-200">
                <span className="text-amber-700 font-medium text-center px-4">Insert Sfiso's Photo HERE</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Sfiso Linda</h3>
              <p className="text-pink-600 font-medium mb-4">Founder & Head Baker</p>
              <p className="text-amber-700">
                With over 10 years of experience, Sfiso combines traditional techniques with modern artistry. His
                passion for perfection shows in every creation.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center border-4 border-amber-200">
                <span className="text-amber-700 font-medium text-center px-4">Insert Maria's Photo HERE</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Maria Santos</h3>
              <p className="text-pink-600 font-medium mb-4">Senior Cake Decorator</p>
              <p className="text-amber-700">
                Maria's artistic background brings our most intricate designs to life. She specializes in wedding cakes
                and custom sculpted creations.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-amber-50 to-pink-50 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-amber-700">Every cake is crafted with genuine care and attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-amber-700">We use only the finest ingredients and proven techniques</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Community First</h3>
              <p className="text-amber-700">We're proud to be part of your most important celebrations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Always Fresh</h3>
              <p className="text-amber-700">Everything is baked fresh daily with no preservatives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
