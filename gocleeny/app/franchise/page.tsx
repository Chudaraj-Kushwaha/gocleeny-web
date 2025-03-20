"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    investment: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to submit franchise inquiry
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting inquiry:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container px-4 md:px-6 py-16 mx-auto flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-green-600" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Inquiry Submitted!</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Thank you for your interest in a GoCleeny franchise. Our franchise development team will contact you within
            2-3 business days to discuss the next steps.
          </p>
          <Button variant="outline">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-green-800 mb-4">
              Own a GoCleeny Franchise
            </h1>
            <p className="text-gray-600 md:text-xl">
              Join the eco-friendly cleaning revolution and build a sustainable business with our proven model.
            </p>
          </div>
        </div>
      </section>

      {/* Franchise Opportunity */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The GoCleeny Franchise Opportunity</h2>
              <p className="text-gray-600 mb-6">
                The cleaning industry is booming, with more consumers and businesses seeking eco-friendly services.
                GoCleeny offers a unique franchise opportunity that combines profitability with purpose.
              </p>
              <p className="text-gray-600 mb-6">
                As a GoCleeny franchise owner, you'll benefit from our established brand, proven business model, and
                comprehensive support system while making a positive impact on your community and the environment.
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <a href="#inquiry-form" className="flex items-center gap-2">
                    Request Information <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="GoCleeny franchise opportunity"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GoCleeny */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose a GoCleeny Franchise?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our franchise model is designed to help you succeed while making a positive impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Growing Market",
                description:
                  "The eco-friendly cleaning market is expanding rapidly as consumers become more environmentally conscious.",
              },
              {
                title: "Proven Business Model",
                description:
                  "Our operational systems and marketing strategies have been refined to maximize efficiency and profitability.",
              },
              {
                title: "Comprehensive Training",
                description: "Receive thorough initial training and ongoing support to ensure your business thrives.",
              },
              {
                title: "Marketing Support",
                description: "Benefit from our national marketing campaigns and localized marketing strategies.",
              },
              {
                title: "Exclusive Territory",
                description: "Secure an exclusive territory with protection from other GoCleeny franchises.",
              },
              {
                title: "Multiple Revenue Streams",
                description: "Diversify your income with residential, commercial, and specialized cleaning services.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Returns */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="GoCleeny franchise investment"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment & Returns</h2>
              <p className="text-gray-600 mb-6">
                A GoCleeny franchise represents an attractive investment opportunity with a clear path to profitability.
                Our franchise model is designed to provide strong returns while minimizing overhead costs.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Initial Investment</h3>
                  <p className="text-gray-600">£25,000 - £50,000 (depending on territory size and market)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Franchise Fee</h3>
                  <p className="text-gray-600">£15,000</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Royalty Fee</h3>
                  <p className="text-gray-600">6% of gross sales</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing Fee</h3>
                  <p className="text-gray-600">2% of gross sales</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">
                *These figures are estimates and may vary based on location, market conditions, and individual
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Training */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Support & Training</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to your success and provide extensive support at every stage of your franchise journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Initial Training</h3>
              <ul className="space-y-3">
                {[
                  "2-week comprehensive training program at our headquarters",
                  "Hands-on operational training",
                  "Business management and financial systems",
                  "Marketing and customer acquisition strategies",
                  "Eco-friendly cleaning techniques and product knowledge",
                  "Staff recruitment and management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <ul className="space-y-3">
                {[
                  "Regular business development consultations",
                  "Marketing support and campaigns",
                  "Operational guidance and troubleshooting",
                  "Access to our proprietary management software",
                  "Regular updates on industry trends and best practices",
                  "Annual franchise conference and networking events",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidate */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Ideal Franchise Partner</h2>
              <p className="text-gray-600">
                While no specific industry experience is required, we look for franchise partners who share our values
                and possess certain qualities.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Passion for environmental sustainability",
                "Strong business acumen and entrepreneurial spirit",
                "Leadership skills and ability to manage teams",
                "Customer service orientation",
                "Marketing and networking abilities",
                "Financial stability and investment capability",
                "Commitment to following our proven systems",
                "Community involvement and local connections",
              ].map((quality, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-600">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Franchise Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process is designed to help you make an informed decision and get your business up and
              running efficiently.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              {[
                {
                  title: "Initial Inquiry",
                  description: "Complete our franchise inquiry form to express your interest.",
                },
                {
                  title: "Discovery Call",
                  description: "Speak with our franchise development team to learn more about the opportunity.",
                },
                {
                  title: "Franchise Disclosure Document",
                  description: "Review our FDD and conduct your due diligence.",
                },
                {
                  title: "Discovery Day",
                  description: "Visit our headquarters to meet the team and experience our operations firsthand.",
                },
                {
                  title: "Franchise Agreement",
                  description: "Sign the franchise agreement and secure your territory.",
                },
                {
                  title: "Training & Setup",
                  description: "Complete training and set up your business with our support.",
                },
                {
                  title: "Grand Opening",
                  description: "Launch your GoCleeny franchise with marketing support from our team.",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex items-start md:items-center mb-8 md:mb-12">
                  <div className="hidden md:flex flex-col items-center mr-4 md:mr-8">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-600 text-white font-bold text-sm z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`flex-1 md:${index % 2 === 0 ? "mr-12 md:text-right" : "ml-12"}`}>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-600 text-white font-bold text-sm mr-4">
                    {index + 1}
                  </div>
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? "ml-12" : "mr-12 text-right"}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white" id="inquiry-form">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Franchise Information</h2>
              <p className="text-gray-600">
                Fill out the form below to receive detailed information about our franchise opportunity. Our franchise
                development team will contact you to discuss the next steps.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 123 456 7890"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-gray-700">
                      Preferred Location/Territory
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., London, Manchester, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="investment" className="text-sm font-medium text-gray-700">
                      Available Investment
                    </label>
                    <Select
                      value={formData.investment}
                      onValueChange={(value) => handleSelectChange("investment", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25k-50k">£25,000 - £50,000</SelectItem>
                        <SelectItem value="50k-75k">£50,000 - £75,000</SelectItem>
                        <SelectItem value="75k-100k">£75,000 - £100,000</SelectItem>
                        <SelectItem value="100k+">£100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                      Business Experience
                    </label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleSelectChange("experience", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No business ownership experience</SelectItem>
                        <SelectItem value="some">Some business experience</SelectItem>
                        <SelectItem value="experienced">Experienced business owner</SelectItem>
                        <SelectItem value="cleaning">Experience in cleaning industry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your interest in a GoCleeny franchise and any specific questions you have..."
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Franchise Inquiry"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about the GoCleeny franchise opportunity.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need experience in the cleaning industry?",
                answer:
                  "No, prior cleaning industry experience is not required. Our comprehensive training program will teach you everything you need to know about running a successful GoCleeny franchise.",
              },
              {
                question: "How long does it take to open a GoCleeny franchise?",
                answer:
                  "Typically, it takes 3-4 months from signing the franchise agreement to opening your business. This includes training, equipment procurement, hiring staff, and marketing preparation.",
              },
              {
                question: "What ongoing support does GoCleeny provide?",
                answer:
                  "We provide continuous support including business coaching, marketing assistance, operational guidance, technology updates, and regular training on new cleaning techniques and products.",
              },
              {
                question: "Is financing available?",
                answer:
                  "While we don't provide direct financing, we can connect you with preferred lenders who are familiar with our business model and may offer favorable terms to qualified candidates.",
              },
              {
                question: "What makes GoCleeny different from other cleaning franchises?",
                answer:
                  "Our eco-friendly approach, comprehensive support system, and focus on both residential and commercial markets set us apart. We also offer exclusive territories and multiple revenue streams.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the GoCleeny Family?</h2>
            <p className="mb-8 text-lg">
              Take the first step toward owning a successful eco-friendly cleaning business.
            </p>
            <Button size="lg" variant="secondary">
              <a href="#inquiry-form">Request Information Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

