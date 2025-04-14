import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Benefits() {
  const benefits = [
    "Hands-on experience with advanced React patterns",
    "Small group size for personalized attention",
    "Project-based learning with real-world applications",
    "Comprehensive workshop materials and resources",
    "Certificate of completion",
    "Post-workshop support and community access"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Attend This Workshop?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Elevate your skills and connect with a community of developers passionate about building better user
              experiences.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/thum.png"
              alt="Workshop in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
