'use client'

import { useEffect, useState } from 'react'
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  Service: string
  School: string
  Review: string
  Course: string
  GMAT: string
}

interface Review {
  id: number
  Testimonial: Testimonial[]
}

interface ReviewsResponse {
  data: Review[]
}

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/reviews?populate[Testimonial][populate]=*')
        const data: ReviewsResponse = await response.json()
        
        // Extract Testimonial data from the response
        const testimonials = data.data.flatMap((review) => review.Testimonial)
        setTestimonials(testimonials)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-indigo-600 font-semibold">
                    {testimonial.School.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.Service}</h3>
                    <p className="text-sm opacity-90">{testimonial.School}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{testimonial.Review}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">{testimonial.Course}</span>
                  {testimonial.GMAT && (
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded"> {testimonial.GMAT}</span>
                  )}
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <p className="text-sm text-gray-600">Verified Student</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
