import Hero from "./components/Hero"
import CakeShowcase from "./components/CakeShowcase"
import WhyChooseUs from "./components/WhyChooseUs"
import AnimatedGallery from "./components/AnimatedGallery"
import InstagramCarousel from "./components/InstagramCarousel"
import NewsletterSignup from "./components/NewsletterSignup"

export default function Home() {
  return (
    <div>
      <Hero />
      <CakeShowcase />
      <WhyChooseUs />
      <AnimatedGallery />
      <InstagramCarousel />
      <NewsletterSignup />
    </div>
  )
}
