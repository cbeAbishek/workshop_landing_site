import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function RegistrationSteps() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How to Register</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Follow these simple steps to secure your spot in our workshop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="relative p-6 bg-slate-800 rounded-xl">
            <div className="absolute -top-4 -left-4 h-10 w-10 flex items-center justify-center bg-rose-600 rounded-full text-lg font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-2">Fill Out the Form</h3>
            <p className="text-slate-300">
              Complete our registration form with your details help us tailor the workshop.
            </p>
          </div>

          <div className="relative p-6 bg-slate-800 rounded-xl">
            <div className="absolute -top-4 -left-4 h-10 w-10 flex items-center justify-center bg-rose-600 rounded-full text-lg font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-2">Day 1 </h3>
            <p className="text-slate-300">
              Attend the first day of the workshop, where we will cover the basics and introduce advanced concepts.
            </p>
          </div>

          <div className="relative p-6 bg-slate-800 rounded-xl">
            <div className="absolute -top-4 -left-4 h-10 w-10 flex items-center justify-center bg-rose-600 rounded-full text-lg font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-2">Day 2</h3>
            <p className="text-slate-300">
              Join us for the second day, where we will dive deeper into advanced topics and hands-on projects.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Spots are limited to ensure a quality experience for all participants. Register early to avoid
            disappointment.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScK4NDRbykvp4OhlqqUmlTmUlhHRHTL2pD9v-ReoOGZvWAKtQ/viewform">
          <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
            Register Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
