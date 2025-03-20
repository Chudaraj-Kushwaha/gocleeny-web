import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-green-800 mb-4">
              Our Cleaning Services
            </h1>
            <p className="text-gray-600 md:text-xl">
              Professional, eco-friendly cleaning solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Cleaning Solutions</h2>
              <p className="text-gray-600 mb-4">
                At GoCleeny, we offer a wide range of cleaning services designed to meet the unique needs of homes and
                businesses. All our services use eco-friendly products and sustainable practices.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need regular home cleaning, a one-time deep clean, or specialized services like end of
                tenancy or Airbnb cleaning, our professional team is ready to exceed your expectations.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Professional cleaning services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50" id="home">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Cleaning</h2>
              <p className="text-gray-600 mb-6">
                Our regular home cleaning service keeps your living space spotless and healthy. Our trained
                professionals pay attention to every detail, from dusting and vacuuming to kitchen and bathroom
                sanitization.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    "Dusting of all accessible surfaces",
                    "Vacuuming of carpets and floors",
                    "Mopping of hard floors",
                    "Kitchen cleaning (countertops, sink, appliance exteriors)",
                    "Bathroom cleaning (toilet, shower, tub, sink)",
                    "Emptying trash bins",
                    "Bed making (linens not provided)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600 mb-2">
                  Starting from <span className="text-2xl font-bold text-green-600">£15/hr</span>
                </p>
                <p className="text-green-600 font-medium">20% off for first-time customers!</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/booking" className="flex items-center gap-2">
                  Book Home Cleaning <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Home cleaning service"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Cleaning */}
      <section className="py-16 bg-white" id="office">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Office cleaning service"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Office Cleaning</h2>
              <p className="text-gray-600 mb-6">
                Create a clean, healthy workspace for your team with our professional office cleaning services. We work
                around your schedule to minimize disruption to your business operations.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    "Cleaning and sanitizing of all workstations",
                    "Dusting of office furniture and equipment",
                    "Vacuuming and mopping of floors",
                    "Kitchen/break room cleaning",
                    "Bathroom sanitization",
                    "Glass and window cleaning",
                    "Trash removal and recycling",
                    "Restocking of supplies (if provided)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600">
                  Custom quotes based on office size and cleaning frequency. Contact us for a free assessment.
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/contact" className="flex items-center gap-2">
                  Request Office Cleaning Quote <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* End of Tenancy */}
      <section className="py-16 bg-gray-50" id="tenancy">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">End of Tenancy Cleaning</h2>
              <p className="text-gray-600 mb-6">
                Moving out? Our thorough end of tenancy cleaning service helps ensure you get your deposit back. We
                follow a comprehensive checklist that meets the standards required by most landlords and letting
                agencies.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    "Deep cleaning of kitchen (including inside appliances)",
                    "Thorough bathroom sanitization",
                    "Cleaning inside cupboards and drawers",
                    "Window cleaning (interior)",
                    "Carpet cleaning/floor washing",
                    "Dust removal from all surfaces including skirting boards",
                    "Cleaning of light fixtures and switches",
                    "Removal of limescale from taps and showers",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600 mb-2">
                  Starting from <span className="text-2xl font-bold text-green-600">£150</span> for a one-bedroom
                  property
                </p>
                <p className="text-gray-600">Price varies based on property size and condition</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/booking" className="flex items-center gap-2">
                  Book End of Tenancy Cleaning <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="End of tenancy cleaning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Airbnb Cleaning */}
      <section className="py-16 bg-white" id="airbnb">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Airbnb cleaning service"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Airbnb & Rental Property Cleaning</h2>
              <p className="text-gray-600 mb-6">
                Maximize your rental property's potential with our specialized Airbnb cleaning service. We offer quick
                turnaround times to accommodate guest schedules and ensure your property is always guest-ready.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    "Complete cleaning and sanitization of all rooms",
                    "Fresh bed making with clean linens (if provided)",
                    "Bathroom cleaning and fresh towel placement",
                    "Kitchen cleaning and organization",
                    "Restocking of guest supplies (if provided)",
                    "Dust and vacuum all areas",
                    "Trash removal",
                    "Special attention to high-touch surfaces",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                <p className="text-gray-600 mb-2">
                  Starting from <span className="text-2xl font-bold text-green-600">£65</span> per cleaning
                </p>
                <p className="text-gray-600">Discounts available for regular scheduling</p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/contact" className="flex items-center gap-2">
                  Discuss Airbnb Cleaning Needs <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond our core offerings, we provide specialized cleaning services to meet your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Deep Cleaning",
                description:
                  "A thorough cleaning that reaches areas often missed in regular cleaning, perfect for spring cleaning or special occasions.",
                price: "From £20/hr",
              },
              {
                title: "Post-Construction Cleaning",
                description:
                  "Specialized cleaning to remove dust, debris, and marks after renovation or construction work.",
                price: "Custom quote",
              },
              {
                title: "Carpet & Upholstery Cleaning",
                description: "Professional deep cleaning of carpets, rugs, sofas, and other upholstered furniture.",
                price: "From £80",
              },
              {
                title: "Window Cleaning",
                description:
                  "Interior and exterior window cleaning for a crystal-clear view and enhanced natural light.",
                price: "From £45",
              },
              {
                title: "Oven & Appliance Cleaning",
                description: "Detailed cleaning of ovens, refrigerators, and other kitchen appliances inside and out.",
                price: "From £55",
              },
              {
                title: "Event Cleaning",
                description:
                  "Pre and post-event cleaning services for parties, corporate events, and other gatherings.",
                price: "Custom quote",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-medium">{service.price}</span>
                  <Link
                    href="/contact"
                    className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                  >
                    Inquire <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the GoCleeny Difference?</h2>
            <p className="mb-8 text-lg">Book your cleaning service today and enjoy 20% off your first booking!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link href="/booking">Book a Service</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

