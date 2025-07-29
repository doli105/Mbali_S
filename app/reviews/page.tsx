import ReviewSection from "../components/ReviewSection"

const reviews = [
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
  {
    id: 5,
    name: "Lisa Martinez",
    rating: 5,
    review:
      "I've ordered several cakes from Stanley's over the years, and they never disappoint. The quality is consistently excellent, and the customer service is outstanding. Highly recommend!",
    occasion: "Multiple Orders",
    date: "2 months ago",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "1,200+", label: "Cakes Created" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "3", label: "Years Running" },
]

export default function Reviews() {
  return <ReviewSection reviews={reviews} stats={stats} />
}
