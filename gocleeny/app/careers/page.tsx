"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Upload } from "lucide-react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  })
  const [fileName, setFileName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to submit application
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting application:", error)
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Thank you for your interest in joining the GoCleeny team. We've received your application and will be in
            touch soon.
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
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-green-800 mb-4">Join Our Team</h1>
            <p className="text-gray-600 md:text-xl">
              Be part of our mission to provide eco-friendly cleaning services that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join GoCleeny?</h2>
              <p className="text-gray-600 mb-6">
                At GoCleeny, we're more than just a cleaning company. We're a team of passionate individuals committed
                to providing exceptional service while protecting our environment.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Competitive Pay",
                    description: "We offer above-industry rates and performance bonuses.",
                  },
                  {
                    title: "Flexible Schedules",
                    description: "Work hours that fit your lifestyle and commitments.",
                  },
                  {
                    title: "Growth Opportunities",
                    description: "Clear career paths and regular training to help you advance.",
                  },
                  {
                    title: "Supportive Environment",
                    description: "Join a team that values your wellbeing and contributions.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="GoCleeny team members"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. Check out our current
              opportunities below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Cleaner",
                type: "Full-time / Part-time",
                location: "London",
                description:
                  "Join our team of professional cleaners delivering exceptional service to homes and businesses.",
              },
              {
                title: "Team Leader",
                type: "Full-time",
                location: "Manchester",
                description: "Lead a team of cleaners, ensuring high-quality service and customer satisfaction.",
              },
              {
                title: "Customer Service Representative",
                type: "Full-time",
                location: "Remote",
                description: "Be the voice of GoCleeny, handling customer inquiries and booking management.",
              },
            ].map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.type}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {job.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <a href="#application-form" className="text-green-600 hover:text-green-700 font-medium">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white" id="application-form">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
              <p className="text-gray-600">
                Fill out the form below to apply for a position at GoCleeny. We'll review your application and get back
                to you soon.
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
                    <label htmlFor="position" className="text-sm font-medium text-gray-700">
                      Position Applied For
                    </label>
                    <Select value={formData.position} onValueChange={(value) => handleSelectChange("position", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cleaner">Professional Cleaner</SelectItem>
                        <SelectItem value="team-leader">Team Leader</SelectItem>
                        <SelectItem value="customer-service">Customer Service Representative</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => handleSelectChange("experience", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5+">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium text-gray-700">
                    Upload CV/Resume
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-gray-500" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PDF, DOC, DOCX (MAX. 2MB)</p>
                      </div>
                      <input
                        id="resume"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                    </label>
                  </div>
                  {fileName && <p className="text-sm text-gray-600 mt-2">Selected file: {fileName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Why do you want to join GoCleeny?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us why you're interested in joining our team and what you can bring to GoCleeny..."
                    rows={4}
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from the people who make GoCleeny great.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Professional Cleaner",
                years: "2 years",
                quote:
                  "Working at GoCleeny has been a great experience. The flexible hours allow me to balance work with my family commitments, and I love being part of a company that cares about the environment.",
              },
              {
                name: "David Chen",
                role: "Team Leader",
                years: "3 years",
                quote:
                  "I started as a cleaner and worked my way up to team leader. GoCleeny invests in their employees and provides real opportunities for growth. The supportive management makes it a pleasure to come to work every day.",
              },
              {
                name: "Emma Williams",
                role: "Customer Service",
                years: "1 year",
                quote:
                  "The positive company culture at GoCleeny is unlike anywhere I've worked before. We're like a family, and knowing that our work is making a difference in both our customers' lives and the environment is incredibly rewarding.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

