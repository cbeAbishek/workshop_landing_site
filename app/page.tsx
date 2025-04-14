import Hero from "@/components/hero"
import EventDetails from "@/components/event-details"
import Agenda from "@/components/agenda"
import Benefits from "@/components/benefits"
import RegistrationSteps from "@/components/registration-steps"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventDetails />
      {/* <Agenda /> */}
      <Benefits />
      <RegistrationSteps />
      <Footer />
    </main>
  )
}
