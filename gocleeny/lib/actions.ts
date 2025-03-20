"use server"

import { revalidatePath } from "next/cache"

// Types for our data
export type Booking = {
  id: string
  name: string
  email: string
  phone: string
  serviceType: string
  date: Date
  time: string
  notes?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  address?: string
  cancellationReason?: string
  createdAt: Date
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: Date
}

export type JobApplication = {
  id: string
  name: string
  email: string
  phone: string
  position: string
  experience: string
  message: string
  resumeUrl?: string
  createdAt: Date
}

export type FranchiseInquiry = {
  id: string
  name: string
  email: string
  phone: string
  location: string
  investment: string
  experience: string
  message?: string
  createdAt: Date
}

// Mock database - in a real app, this would be a database connection
const bookings: Booking[] = []
const contactMessages: ContactMessage[] = []
const jobApplications: JobApplication[] = []
const franchiseInquiries: FranchiseInquiry[] = []

// Generate a simple ID
const generateId = () => Math.random().toString(36).substring(2, 9)

// Booking actions
export async function createBooking(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const serviceType = formData.get("serviceType") as string
    const dateStr = formData.get("date") as string
    const time = formData.get("time") as string
    const notes = formData.get("notes") as string

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !dateStr || !time) {
      throw new Error("Missing required fields")
    }

    const date = new Date(dateStr)

    const newBooking: Booking = {
      id: generateId(),
      name,
      email,
      phone,
      serviceType,
      date,
      time,
      notes,
      status: "pending",
      address: "To be confirmed", // This would be collected in a real app
      createdAt: new Date(),
    }

    // In a real app, this would save to a database
    bookings.push(newBooking)

    // Send confirmation email (simulated)
    await sendEmail({
      to: email,
      subject: "Booking Confirmation - GoCleeny",
      body: `Thank you for booking with GoCleeny. Your ${serviceType} cleaning is scheduled for ${date.toLocaleDateString()} at ${time}.`,
    })

    // Also send notification to GoCleeny
    await sendEmail({
      to: "gocleeny@gmail.com",
      subject: "New Booking Received",
      body: `A new booking has been received from ${name} (${email}) for ${serviceType} cleaning on ${date.toLocaleDateString()} at ${time}.`,
    })

    revalidatePath("/bookings")
    return { success: true, bookingId: newBooking.id }
  } catch (error) {
    console.error("Error creating booking:", error)
    return { success: false, error: "Failed to create booking" }
  }
}

export async function updateBooking(bookingId: string, updates: Partial<Booking>) {
  try {
    const index = bookings.findIndex((b) => b.id === bookingId)

    if (index === -1) {
      throw new Error("Booking not found")
    }

    // Update the booking
    bookings[index] = { ...bookings[index], ...updates }

    // Send notification email about the update
    await sendEmail({
      to: bookings[index].email,
      subject: "Booking Update - GoCleeny",
      body: `Your booking has been updated. Please check your account for details.`,
    })

    revalidatePath("/bookings")
    return { success: true }
  } catch (error) {
    console.error("Error updating booking:", error)
    return { success: false, error: "Failed to update booking" }
  }
}

export async function cancelBooking(bookingId: string, reason?: string) {
  try {
    const index = bookings.findIndex((b) => b.id === bookingId)

    if (index === -1) {
      throw new Error("Booking not found")
    }

    // Update the booking status to cancelled
    bookings[index] = {
      ...bookings[index],
      status: "cancelled",
      cancellationReason: reason,
    }

    // Send cancellation email
    await sendEmail({
      to: bookings[index].email,
      subject: "Booking Cancellation - GoCleeny",
      body: `Your booking has been cancelled. ${reason ? `Reason: ${reason}` : ""}`,
    })

    revalidatePath("/bookings")
    return { success: true }
  } catch (error) {
    console.error("Error cancelling booking:", error)
    return { success: false, error: "Failed to cancel booking" }
  }
}

// Contact form actions
export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields")
    }

    const newMessage: ContactMessage = {
      id: generateId(),
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    }

    // In a real app, this would save to a database
    contactMessages.push(newMessage)

    // Send notification to GoCleeny
    await sendEmail({
      to: "gocleeny@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      body: `From: ${name} (${email})\n\nMessage: ${message}`,
    })

    // Send confirmation to user
    await sendEmail({
      to: email,
      subject: "We've received your message - GoCleeny",
      body: `Dear ${name},\n\nThank you for contacting GoCleeny. We've received your message and will get back to you within 24-48 hours.\n\nBest regards,\nThe GoCleeny Team`,
    })

    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, error: "Failed to submit contact form" }
  }
}

// Job application actions
export async function submitJobApplication(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string
    const resumeFile = formData.get("resume") as File

    // Validate required fields
    if (!name || !email || !phone || !position || !experience) {
      throw new Error("Missing required fields")
    }

    // In a real app, this would upload the resume to storage and get a URL
    const resumeUrl = resumeFile ? "https://example.com/resumes/sample-resume.pdf" : undefined

    const newApplication: JobApplication = {
      id: generateId(),
      name,
      email,
      phone,
      position,
      experience,
      message,
      resumeUrl,
      createdAt: new Date(),
    }

    // In a real app, this would save to a database
    jobApplications.push(newApplication)

    // Send notification to GoCleeny
    await sendEmail({
      to: "gocleeny@gmail.com",
      subject: `New Job Application: ${position}`,
      body: `From: ${name} (${email})\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}\n\nMessage: ${message}\n\nResume: ${resumeUrl || "Not provided"}`,
    })

    // Send confirmation to applicant
    await sendEmail({
      to: email,
      subject: "Application Received - GoCleeny",
      body: `Dear ${name},\n\nThank you for applying to GoCleeny. We've received your application for the ${position} position and will review it shortly.\n\nBest regards,\nThe GoCleeny Recruitment Team`,
    })

    return { success: true }
  } catch (error) {
    console.error("Error submitting job application:", error)
    return { success: false, error: "Failed to submit job application" }
  }
}

// Franchise inquiry actions
export async function submitFranchiseInquiry(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const location = formData.get("location") as string
    const investment = formData.get("investment") as string
    const experience = formData.get("experience") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !phone || !location || !investment || !experience) {
      throw new Error("Missing required fields")
    }

    const newInquiry: FranchiseInquiry = {
      id: generateId(),
      name,
      email,
      phone,
      location,
      investment,
      experience,
      message,
      createdAt: new Date(),
    }

    // In a real app, this would save to a database
    franchiseInquiries.push(newInquiry)

    // Send notification to GoCleeny
    await sendEmail({
      to: "gocleeny@gmail.com",
      subject: "New Franchise Inquiry",
      body: `From: ${name} (${email})\nPhone: ${phone}\nLocation: ${location}\nInvestment: ${investment}\nExperience: ${experience}\n\nMessage: ${message}`,
    })

    // Send confirmation to inquirer
    await sendEmail({
      to: email,
      subject: "Franchise Inquiry Received - GoCleeny",
      body: `Dear ${name},\n\nThank you for your interest in a GoCleeny franchise. We've received your inquiry and our franchise development team will contact you within 2-3 business days to discuss the next steps.\n\nBest regards,\nThe GoCleeny Franchise Team`,
    })

    return { success: true }
  } catch (error) {
    console.error("Error submitting franchise inquiry:", error)
    return { success: false, error: "Failed to submit franchise inquiry" }
  }
}

// Helper function to simulate sending emails
async function sendEmail({ to, subject, body }: { to: string; subject: string; body: string }) {
  // In a real app, this would use an email service like SendGrid, Mailgun, etc.
  console.log(`Sending email to ${to}`)
  console.log(`Subject: ${subject}`)
  console.log(`Body: ${body}`)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return { success: true }
}

