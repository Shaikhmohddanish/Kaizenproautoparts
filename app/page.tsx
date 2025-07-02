"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Settings,
  Zap,
  Car,
  RotateCcw,
  Wrench,
  Cpu,
  Star,
  User,
  Briefcase,
  Shield,
  DollarSign,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Welcome to Kaizen Auto Parts</h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're looking for a rare replacement part or want to save money on vehicle repairs, our extensive
              inventory and dedicated service make us your ultimate destination for used auto parts.
            </p>
            <div className="mb-12">
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <a href="tel:+18889285936">
                  <Phone className="mr-2 h-5 w-5" />
                  USA Toll Free (888) 928-5936
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Car Image */}
        <div className="relative">
          <Image src="/images/bmw-hero.png" alt="BMW Car" width={800} height={400} className="mx-auto" />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-0 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Address:</h3>
                <p className="text-blue-100">30 N Gould St, STE N, Sheridan, WY 82801</p>
                <Button 
                  asChild
                  variant="outline" 
                  className="mt-4 bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Link href="/contact">CONTACT US</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <div className="space-y-2 text-blue-100">
                  <div className="flex items-center justify-center">
                    <span>✓ Week Days: 08:00 – 20:00</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span>✓ Saturday: 08:00 – 16:00</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span>✓ Sunday: 08:00-14:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Give us a call</h3>
                <a href="tel:+18889285936" className="text-3xl font-bold mb-4 block hover:text-blue-200 transition-colors">
                  (888) 928-5936
                </a>
                <Button 
                  asChild
                  variant="outline" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <a href="tel:+18889285936">CALL NOW</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Kaizen Auto Parts?</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              When it comes to maintaining or upgrading your vehicle, every decision matters. From cost-efficiency to
              environmental responsibility, buying used auto parts is an intelligent choice. At Kaizen Auto Parts, we
              aim to make this decision even easier by providing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unmatched Variety</h3>
              <p className="text-gray-600">
                Whether you're looking for engine components, transmission systems, or cosmetic parts, our warehouse is
                stocked with parts for almost every make and model.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top-Notch Quality</h3>
              <p className="text-gray-600">
                Every part we sell is inspected and tested to ensure functionality, durability, and compatibility.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Prices</h3>
              <p className="text-gray-600">
                Save significantly compared to buying new parts without sacrificing quality or performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our mission is simple: to provide reliable, affordable, and sustainable solutions for your automotive
              needs. Whether you're a car enthusiast, a repair shop owner, or just someone trying to keep their vehicle
              running smoothly, we are here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent pricing</h3>
                <p className="text-gray-300">
                  When buying used auto parts, you'll enjoy clear and upfront pricing with no hidden fees, ensuring you
                  get the best value for your money.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert guidance</h3>
                <p className="text-gray-300">
                  Our knowledgeable team is here to help you find the right parts for your vehicle, making the process
                  quick and stress- free.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <RotateCcw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Guarantee Service</h3>
                <p className="text-gray-300">
                  Every part you purchase is backed by a reliable guarantee, giving you peace of mind about quality and
                  performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hassle-free returns</h3>
                <p className="text-gray-300">
                  If something isn't right, our straightforward return policy ensures a smooth and hassle-free
                  experience, so you can shop with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Inventory Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Inventory</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              When it comes to maintaining or upgrading your vehicle, every decision matters. From cost-efficiency to
              environmental responsibility, buying used auto parts is an intelligent choice. At Kaizen Auto Parts, we
              aim to make this decision even easier by providing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engines and Transmissions</h3>
              <p className="text-gray-600">
                Whether you're looking for engine or engine components, our warehouse is stocked with parts for almost
                every make and model.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Electrical Systems</h3>
              <p className="text-gray-600">
                Every used electrical part we sell is inspected and tested to ensure functionality, durability, and
                compatibility.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Used Suspension</h3>
              <p className="text-gray-600">
                Save significantly compared to buying new suspensions without sacrificing quality or performance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Used ABS</h3>
              <p className="text-gray-600">
                No matter where you are in the USA, we'll deliver the parts you need right to your doorstep.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mechanical Parts</h3>
              <p className="text-gray-600">
                Buy A Grade used mechanical parts like Engine, transmission at the best price. Call USA Toll Free Today.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ECU & ECM</h3>
              <p className="text-gray-600">
                Looking for Electrical Parts like ECU, ECM, Wiring harness? Look no Further Kaizen Auto Parts is here
                to help you make wise decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Input type="text" placeholder="VIN Number (Optional)" className="w-full" />
                </div>
                <div>
                  <Textarea placeholder="Part Required" rows={4} className="w-full" />
                </div>
                <div>
                  <Textarea placeholder="Additional Comments" rows={3} className="w-full" />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="sms-consent" className="mt-1" />
                  <label htmlFor="sms-consent" className="text-sm text-gray-600">
                    By checking this box, you agree to receive SMS messages from Kaizen Auto Parts related to delivery
                    notifications. You may reply STOP to opt-out at any time. Reply HELP to (888) 928-5936 for
                    assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our
                    privacy policy page and Term & Conditions.
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
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  Kaizen Auto Parts saved me both time and money! I was struggling to find a replacement engine for my
                  2014 Toyota Camry, and their team not only had the part in stock but also helped me confirm it was the
                  right fit for my car. The part arrived quickly and was in excellent condition—just as described.
                  Thanks to them, my car is running like new again! Highly recommend their service to anyone looking for
                  quality used auto parts.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Michael R</p>
                    <p className="text-gray-600">Chicago, IL</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6">
                  "I've been a loyal customer of Kaizen Auto Parts for over two years now. As the owner of a repair
                  shop, I need reliable, affordable parts to keep my business running smoothly. Kaizen Auto Parts
                  never disappoints —they always have what I need, and their customer service is top-notch. Plus, their
                  fast shipping ensures I can get parts to my clients quickly. They're my go-to source for used auto
                  parts!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JP</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Jack P.</p>
                    <p className="text-gray-600">Brooklyn, NY</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Review Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-blue-600 fill-current" />
                ))}
              </div>
              <p className="text-blue-600 font-semibold">Based on 642 Reviews</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-blue-600 fill-current" />
                ))}
              </div>
              <p className="text-blue-600 font-semibold">Based on 642 Reviews</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-blue-600 fill-current" />
                ))}
              </div>
              <p className="text-blue-600 font-semibold">Based on 248 Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">30 N Gould St, STE N, Sheridan, WY 82801</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+18889285936" className="text-gray-600 hover:text-blue-600 transition-colors">
                      (888) 928-5936
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:sales@kaizenproautoparts.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      sales@kaizenproautoparts.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sun: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <iframe
                className="w-full h-96 rounded-lg border-0"
                title="Google Map for Kaizen Auto Parts"
                src="https://maps.google.com/maps?q=30%20N%20Gould%20St%2C%20STE%20N%2C%20Sheridan%2C%20WY%2082801&z=12&hl=en&t=m&output=embed&iwloc=near"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
