'use client'

import React, { useState, useEffect } from 'react'
import '@fontsource/inter'
import Link from "next/link"

const testimonials = [
  {
    name: 'Sandhya',
    title: 'Business Woman',
    description: 'Wants to highlight the skills acquired by working in her family business. But, how can she avoid unnecessary banter about irrelevant experiences? How can she build her brand',
    leadershipQuestion: '',
    image: '/images/Sandhya.png',
  },
  {
    name: 'Ram',
    title: 'Hardcore Techie',
    description: 'With over 6 years of work experience. Stanford has been his lifelong dream, but, he does not want to be type casted as the typical Indian IT male. How can he stand out?',
    leadershipQuestion: '',
    image: '/images/Ram.png',
  },
  {
    name: 'Omar',
    title: 'Chartered Accountant',
    description: 'Wants to start his own VC fund and to do this desires to get into a top-tier Business School to upskill and build networks. He is concerned that he does not have significant team management skills to show as he was mostly a solo contributor.',
    leadershipQuestion: 'How does he demonstrate leadership potential in the application?',
    image: '/images/Omar.png',
  },
]

export default function TestimonialSlider() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        setFade(true)
      }, 500) // Adjust to match the CSS transition duration
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='max-w-full bg-blue-50'>
      <div className="font-inter mt-10 p-4 max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-3">Common Dream, Unique Journeys</h2>
          <p className="text-gray-500 mb-4">No Two Profiles are Alike</p>
        </div>

        {/* Testimonials */}
        <div className="mt-3 bg-white rounded-lg p-4">
          <div
            className={`flex flex-col md:flex-row items-center md:items-start gap-4 transition-opacity duration-500 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/4">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={testimonials[currentTestimonialIndex].image}
                  alt={testimonials[currentTestimonialIndex].name}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-3/4 text-center md:text-left mt-4 md:mt-0">
              <h2 className="text-2xl text-black font-bold mb-2">
                Meet <span className="text-blue-500">{testimonials[currentTestimonialIndex].name}</span>, a {testimonials[currentTestimonialIndex].title}
              </h2>
              <p className="text-gray-600 mb-3">{testimonials[currentTestimonialIndex].description}</p>
              {testimonials[currentTestimonialIndex].leadershipQuestion && (
                <p className="text-blue-500 font-semibold">{testimonials[currentTestimonialIndex].leadershipQuestion}</p>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 font-bold">
          <p className="text-gray-600 mb-4">
            Sounds familiar? Everyone's problems may vary but they all share the same dream:
            TO GET INTO THEIR DREAM MBA COLLEGE! CrackAdmission will help you do just that... So, what is holding you back?
          </p>
          <Link href="/success-stories">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
