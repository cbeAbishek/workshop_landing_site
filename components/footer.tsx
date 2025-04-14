import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Advanced React Workshop</h3>
            <p className="mb-4 max-w-md">
              Join us for an immersive learning experience that will transform your React development skills.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#details" className="hover:text-white transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>workshop@example.com</li>
              <li>(123) 456-7890</li>
              <li>
                123 Innovation Ave
                <br />
                Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div> */}

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="https://cbeabishek.github.io/Abishek-portfoilio/" className="text-sm hover:text-white transition-colors">
              Desgin and Developed by Abishek
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
