"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleNavigation = (path: string) => {
    router.push(path)
    window.scrollTo(0, 0)
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Kaizen Pro Services" width={40} height={40} className="mr-3" />
            <span className="text-xl font-bold text-gray-900">Kaizen Pro Services</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleNavigation("/")}
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/privacy-policy")}
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/privacy-policy" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms-conditions")}
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/terms-conditions" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`px-3 py-2 text-sm font-medium ${
                  pathname === "/contact" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => handleNavigation("/")}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  pathname === "/" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/privacy-policy")}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  pathname === "/privacy-policy"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms-conditions")}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  pathname === "/terms-conditions"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  pathname === "/contact"
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
