'use client';

import React, { useState, useEffect } from 'react';
import '@fontsource/inter';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Sandhya',
    title: 'Business Woman',
    description:
      'Wants to highlight the skills acquired by working in her family business. But, how can she avoid unnecessary banter about irrelevant experiences? How can she build her brand',
    leadershipQuestion: '',
    image: '/images/Sandhya.png',
  },
  {
    name: 'Ram',
    title: 'Hardcore Techie',
    description:
      'With over 6 years of work experience. Stanford has been his lifelong dream, but, he does not want to be type casted as the typical Indian IT male. How can he stand out?',
    leadershipQuestion: '',
    image: '/images/Ram.png',
  },
  {
    name: 'Omar',
    title: 'Chartered Accountant',
    description:
      'Wants to start his own VC fund and to do this desires to get into a top-tier Business School to upskill and build networks. He is concerned that he does not have significant team management skills to show as he was mostly a solo contributor.',
    leadershipQuestion: 'How does he demonstrate leadership potential in the application?',
    image: '/images/Omar.png',
  },
];

export default function TestimonialSlider() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50">
      <div className="font-inter mt-10 p-4 max-w-6xl mx-auto overflow-hidden relative">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Common Dream, Unique Journeys
          </h2>
          <p className="text-gray-500 text-sm md:text-base">No Two Profiles are Alike</p>
        </div>

        {/* Testimonials */}
        <div className="relative h-[500px] md:h-[600px] bg-white rounded-lg overflow-hidden shadow-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity transform ${
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
              <div className="w-full h-full relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-full h-full"
                />

                {/* Text Section */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    Meet <span className="text-blue-400">{testimonial.name}</span>, a{' '}
                    {testimonial.title}
                  </h2>
                  <p className="text-sm md:text-base mb-2">{testimonial.description}</p>
                  {testimonial.leadershipQuestion && (
                    <p className="text-blue-400 font-semibold">{testimonial.leadershipQuestion}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Sounds familiar? Everyone's problems may vary but they all share the same dream:
            TO GET INTO THEIR DREAM MBA COLLEGE! CrackAdmission will help you do just that... So,
            what is holding you back?
          </p>
          <Link href="/success-stories">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
