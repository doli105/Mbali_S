import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-amber-500">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sweet <span className="font-dancing-script">Updates</span> & Special Offers
          </h2>
          <p className="text-pink-100 mb-8">
            Be the first to know about new cake designs, seasonal specials, and exclusive discounts!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border-0 text-amber-900 placeholder:text-amber-500"
            />
            <Button className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8">Subscribe</Button>
          </div>

          <p className="text-pink-100 text-sm mt-4">
            No spam, just sweet treats and cake inspiration! Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
