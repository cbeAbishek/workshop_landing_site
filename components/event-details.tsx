import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventDetails() {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Event Details</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our upcoming workshop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl">
            <div className="h-12 w-12 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Date</h3>
            <p className="text-slate-600 text-center">April 15-16, 2025</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl">
            <div className="h-12 w-12 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Time</h3>
            <p className="text-slate-600 text-center">9:00 AM - 5:00 PM</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl">
            <div className="h-12 w-12 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-slate-600 text-center">
              Tech Hub Conference Center
              <br />
              123 Innovation Ave
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl">
            <div className="h-12 w-12 flex items-center justify-center bg-rose-100 text-rose-600 rounded-full mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Participants</h3>
            <p className="text-slate-600 text-center">
              Limited to 30 attendees
              <br />
              Intermediate to advanced
            </p>
          </div>
        </div>

        <div className="mt-16 bg-slate-100 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">About the Workshop</h3>
          <p className="text-slate-600 mb-4">
            This intensive two-day workshop is designed for developers who want to take their React skills to the next
            level. You'll learn advanced patterns, performance optimization techniques, and best practices from industry
            experts.
          </p>
          <p className="text-slate-600">
            Whether you're building complex applications or looking to improve your current projects, this workshop will
            provide you with practical knowledge you can apply immediately.
          </p>
        </div>
      </div>
    </section>
  )
}
