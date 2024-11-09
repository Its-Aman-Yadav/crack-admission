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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className='max-w-full bg-blue-50'>
    <div className="font-inter mt-10 p-4 max-w-6xl mx-auto overflow-hidden relative">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-3">Common Dream, Unique Journeys</h2>
        <p className="text-gray-500 mb-4">No Two Profiles are Alike</p>
      </div>

      {/* Testimonials */}
      <div className="relative mt-3 bg-white h-[300px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 flex flex-col md:flex-row items-start gap-4 w-full transition-opacity transform ${
              index === currentTestimonialIndex
                ? 'opacity-100 translate-x-0'
                : index < currentTestimonialIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
            style={{
              transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
            }}
          >
            {/* Image Section */}
            <div className="md:w-1/4 w-full mb-4 md:mb-0">
              <div className="w-full aspect-square rounded-lg overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-fill w-full h-full"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="md:w-3/4">
              <h2 className="text-2xl text-black font-bold mb-4">
                Meet <span className="text-blue-500">{testimonial.name}</span>, a {testimonial.title}
              </h2>
              <p className="text-gray-600 mb-4">{testimonial.description}</p>
              <p className="text-blue-500 font-semibold">{testimonial.leadershipQuestion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-4 font-bold">
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
    </>
  )
}
