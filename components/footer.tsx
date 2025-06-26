import Image from "next/image"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <Image src="/images/logo.png" alt="Kaizen Pro Services" width={32} height={32} className="mr-2" />
              <span className="text-xl font-bold">Kaizen Pro Services</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality used auto parts. DBA: Kaizen Auto Parts
            </p>
            <p className="text-gray-400 text-sm">
              30 N Gould St, STE N<br />
              Sheridan, WY 82801
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <Phone className="inline h-4 w-4 mr-2" />
                (888) 926-4978
              </p>
              <p className="text-gray-400">
                <Mail className="inline h-4 w-4 mr-2" />
                sales@kaizenproautoparts.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kaizen Pro Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
