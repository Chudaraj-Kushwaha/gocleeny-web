"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, Clock, Home, Building, Key, Bed, AlertTriangle, CheckCircle, X } from "lucide-react"

// Mock data for bookings
const mockBookings = {
  active: [
    {
      id: "1",
      serviceType: "home",
      date: new Date(2025, 3, 25),
      time: "09:00",
      status: "confirmed",
      address: "123 Main St, London",
    },
    {
      id: "2",
      serviceType: "office",
      date: new Date(2025, 3, 30),
      time: "14:00",
      status: "pending",
      address: "456 Business Ave, Manchester",
    },
  ],
  completed: [
    {
      id: "3",
      serviceType: "home",
      date: new Date(2025, 2, 15),
      time: "10:00",
      status: "completed",
      address: "123 Main St, London",
    },
  ],
  cancelled: [
    {
      id: "4",
      serviceType: "tenancy",
      date: new Date(2025, 2, 10),
      time: "13:00",
      status: "cancelled",
      address: "789 Apartment Blvd, Birmingham",
      cancellationReason: "Schedule conflict",
    },
  ],
}

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

const getServiceIcon = (serviceType: string) => {
  switch (serviceType) {
    case "home":
      return <Home className="h-5 w-5" />
    case "office":
      return <Building className="h-5 w-5" />
    case "tenancy":
      return <Key className="h-5 w-5" />
    case "airbnb":
      return <Bed className="h-5 w-5" />
    default:
      return <Home className="h-5 w-5" />
  }
}

const getServiceName = (serviceType: string) => {
  switch (serviceType) {
    case "home":
      return "Home Cleaning"
    case "office":
      return "Office Cleaning"
    case "tenancy":
      return "End of Tenancy"
    case "airbnb":
      return "Airbnb Cleaning"
    case "deep":
      return "Deep Cleaning"
    default:
      return "Cleaning Service"
  }
}

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("active")
  const [bookings, setBookings] = useState(mockBookings)
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [modifyDate, setModifyDate] = useState<Date | undefined>(undefined)
  const [modifyTime, setModifyTime] = useState("")
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)
  const [cancelReason, setCancelReason] = useState("")
  const [isModifying, setIsModifying] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)
  const [actionSuccess, setActionSuccess] = useState<string | null>(null)

  const handleModifyBooking = (booking: any) => {
    setSelectedBooking(booking)
    setModifyDate(booking.date)
    setModifyTime(booking.time)
    setIsModifying(true)
  }

  const handleCancelBooking = (booking: any) => {
    setSelectedBooking(booking)
    setCancelDialogOpen(true)
  }

  const confirmModification = async () => {
    // Simulate API call to update booking
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update the booking in our state
      const updatedBookings = { ...bookings }
      const index = updatedBookings.active.findIndex((b) => b.id === selectedBooking.id)

      if (index !== -1) {
        updatedBookings.active[index] = {
          ...updatedBookings.active[index],
          date: modifyDate,
          time: modifyTime,
        }

        setBookings(updatedBookings)
        setIsModifying(false)
        setActionSuccess("Your booking has been successfully updated!")

        // Clear success message after a delay
        setTimeout(() => setActionSuccess(null), 3000)
      }
    } catch (error) {
      console.error("Error updating booking:", error)
    }
  }

  const confirmCancellation = async () => {
    setIsCancelling(true)

    // Simulate API call to cancel booking
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Move the booking from active to cancelled
      const updatedBookings = { ...bookings }
      const index = updatedBookings.active.findIndex((b) => b.id === selectedBooking.id)

      if (index !== -1) {
        const cancelledBooking = {
          ...updatedBookings.active[index],
          status: "cancelled",
          cancellationReason: cancelReason,
        }

        updatedBookings.active.splice(index, 1)
        updatedBookings.cancelled.push(cancelledBooking)

        setBookings(updatedBookings)
        setCancelDialogOpen(false)
        setIsCancelling(false)
        setCancelReason("")
        setActionSuccess("Your booking has been cancelled.")

        // Clear success message after a delay
        setTimeout(() => setActionSuccess(null), 3000)
      }
    } catch (error) {
      console.error("Error cancelling booking:", error)
      setIsCancelling(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-green-800 mb-4">My Bookings</h1>
            <p className="text-gray-600">View, modify, or cancel your cleaning service bookings.</p>
          </div>
        </div>
      </section>

      {/* Bookings Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            {actionSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <p>{actionSuccess}</p>
                </div>
                <button onClick={() => setActionSuccess(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
                <div className="border-b border-gray-200">
                  <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                    <TabsTrigger
                      value="active"
                      className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-green-600 data-[state=active]:bg-transparent"
                    >
                      Active Bookings ({bookings.active.length})
                    </TabsTrigger>
                    <TabsTrigger
                      value="completed"
                      className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-green-600 data-[state=active]:bg-transparent"
                    >
                      Completed ({bookings.completed.length})
                    </TabsTrigger>
                    <TabsTrigger
                      value="cancelled"
                      className="rounded-none border-b-2 border-transparent px-4 py-3 data-[state=active]:border-green-600 data-[state=active]:bg-transparent"
                    >
                      Cancelled ({bookings.cancelled.length})
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="active" className="p-0">
                  {bookings.active.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-gray-500 mb-4">You don't have any active bookings.</p>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Link href="/booking">Book a Cleaning</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {bookings.active.map((booking) => (
                        <div key={booking.id} className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div
                                className={`p-3 rounded-full ${booking.status === "confirmed" ? "bg-green-100" : "bg-yellow-100"}`}
                              >
                                {getServiceIcon(booking.serviceType)}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold">{getServiceName(booking.serviceType)}</h3>
                                <div className="flex items-center text-gray-500 mt-1">
                                  <CalendarIcon className="h-4 w-4 mr-1" />
                                  <span>{format(booking.date, "PPP")}</span>
                                  <span className="mx-2">•</span>
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{booking.time}</span>
                                </div>
                                <p className="text-gray-600 mt-1">{booking.address}</p>
                                <div className="mt-2">
                                  <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      booking.status === "confirmed"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {booking.status === "confirmed" ? "Confirmed" : "Pending Confirmation"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button variant="outline" onClick={() => handleModifyBooking(booking)}>
                                Modify
                              </Button>
                              <Button variant="destructive" onClick={() => handleCancelBooking(booking)}>
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="completed" className="p-0">
                  {bookings.completed.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-gray-500">You don't have any completed bookings yet.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {bookings.completed.map((booking) => (
                        <div key={booking.id} className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-blue-100">{getServiceIcon(booking.serviceType)}</div>
                            <div>
                              <h3 className="text-lg font-semibold">{getServiceName(booking.serviceType)}</h3>
                              <div className="flex items-center text-gray-500 mt-1">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                <span>{format(booking.date, "PPP")}</span>
                                <span className="mx-2">•</span>
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{booking.time}</span>
                              </div>
                              <p className="text-gray-600 mt-1">{booking.address}</p>
                              <div className="mt-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  Completed
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="cancelled" className="p-0">
                  {bookings.cancelled.length === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-gray-500">You don't have any cancelled bookings.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {bookings.cancelled.map((booking) => (
                        <div key={booking.id} className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-gray-100">{getServiceIcon(booking.serviceType)}</div>
                            <div>
                              <h3 className="text-lg font-semibold">{getServiceName(booking.serviceType)}</h3>
                              <div className="flex items-center text-gray-500 mt-1">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                <span>{format(booking.date, "PPP")}</span>
                                <span className="mx-2">•</span>
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{booking.time}</span>
                              </div>
                              <p className="text-gray-600 mt-1">{booking.address}</p>
                              <div className="mt-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  Cancelled
                                </span>
                              </div>
                              {booking.cancellationReason && (
                                <p className="text-gray-500 mt-2 text-sm">
                                  <span className="font-medium">Reason:</span> {booking.cancellationReason}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/booking">Book a New Cleaning</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modify Booking Dialog */}
      <Dialog open={isModifying} onOpenChange={setIsModifying}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Modify Booking</DialogTitle>
            <DialogDescription>Update the date and time for your cleaning service.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">New Date</label>
              <Calendar
                mode="single"
                selected={modifyDate}
                onSelect={setModifyDate}
                disabled={(date) => date < new Date()}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">New Time</label>
              <Select value={modifyTime} onValueChange={setModifyTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {time}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModifying(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={confirmModification}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Booking Dialog */}
      <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Cancel Booking
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Reason for Cancellation (Optional)</label>
              <Select value={cancelReason} onValueChange={setCancelReason}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Schedule conflict">Schedule conflict</SelectItem>
                  <SelectItem value="No longer needed">No longer needed</SelectItem>
                  <SelectItem value="Found alternative service">Found alternative service</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
              Keep Booking
            </Button>
            <Button variant="destructive" onClick={confirmCancellation} disabled={isCancelling}>
              {isCancelling ? "Cancelling..." : "Confirm Cancellation"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

