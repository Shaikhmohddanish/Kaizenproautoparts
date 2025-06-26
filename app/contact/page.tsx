"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contact Us Header */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Find our contact details and get in touch with our team for any assistance or inquiries.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">30 N GOULD ST, STE N, SHERIDAN, WY 82801</h3>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">(888) 926-4978</h3>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gray-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">SALES@KAIZENPROAUTOPARTS.COM</h3>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Direction <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <iframe
                  className="w-full h-80 rounded-lg border-0"
                  title="Google Map for Kaizen Pro Services"
                  src="https://maps.google.com/maps?q=30%20N%20Gould%20St%2C%20STE%20N%2C%20Sheridan%2C%20WY%2082801&z=12&hl=en&t=m&output=embed&iwloc=near"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right Column - Parts Request Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Parts Request Form</h2>
                  <form className="space-y-6">
                    <div>
                      <Input type="text" placeholder="Enter your name" className="w-full" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Enter your email" className="w-full" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Enter your phone number" className="w-full" />
                    </div>
                    <div>
                      <Textarea placeholder="Part Required" rows={4} className="w-full" />
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="sms-consent-contact" className="mt-1" />
                      <label htmlFor="sms-consent-contact" className="text-sm text-gray-600">
                        By checking this box, you agree to receive SMS messages from Kaizen Pro Services related to
                        delivery notifications. You may reply STOP to opt-out at any time. Reply HELP to (888) 926-4978
                        for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on
                        our privacy policy page and Term & Conditions.
                      </label>
                    </div>
                    <div className="text-center space-x-4">
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline text-sm">
                        Privacy Policy
                      </Link>
                      <Link href="/terms-conditions" className="text-blue-600 hover:underline text-sm">
                        Terms and Conditions
                      </Link>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">Submit</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
