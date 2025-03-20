import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, MapPin, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-green-800">
                Eco-Friendly Cleaning for a Spotless Home
              </h1>
              <p className="text-gray-600 md:text-xl max-w-[600px]">
                Professional cleaning services that care for your home and the environment. Experience the GoCleeny
                difference today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/booking" className="flex items-center gap-2">
                    Book a Cleaning <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-800"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">500+</span> happy customers
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Eco-friendly cleaning service"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GoCleeny?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine professional cleaning expertise with eco-friendly practices to deliver exceptional results for
              your home or business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600">
                We use only environmentally safe cleaning products that are tough on dirt but gentle on the planet.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
              <p className="text-gray-600">
                Our cleaners are trained professionals who take pride in delivering exceptional cleaning services.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book a one-time cleaning or set up a regular schedule that works for your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From regular home cleaning to specialized services, we've got all your cleaning needs covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Home Cleaning", icon: "🏠", description: "Regular cleaning for a spotless home environment" },
              { title: "Office Cleaning", icon: "🏢", description: "Professional cleaning for your workspace" },
              { title: "End of Tenancy", icon: "🔑", description: "Deep cleaning when moving in or out" },
              { title: "Airbnb Cleaning", icon: "🛏️", description: "Quick turnaround cleaning for rental properties" },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-green-600 hover:bg-green-700">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about GoCleeny.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "London",
                quote:
                  "GoCleeny has transformed my home cleaning routine. Their eco-friendly approach aligns perfectly with my values.",
              },
              {
                name: "Michael Chen",
                location: "Manchester",
                quote:
                  "As a busy professional, I rely on GoCleeny for regular cleaning. They're always thorough, professional, and on time.",
              },
              {
                name: "Emma Williams",
                location: "Birmingham",
                quote: "I used GoCleeny for end of tenancy cleaning and got my full deposit back! Highly recommended.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={12} className="mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Ready for a Cleaner, Greener Home?</h2>
              <p className="mb-0">Book your first cleaning today and enjoy 20% off as a new customer!</p>
            </div>
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

