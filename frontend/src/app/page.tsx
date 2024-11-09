import HeroSection from '@/components/HeroSection'
import BlogSection from '@/components/BlogSection'
import HomeReview from '@/components/HomeReview'
import HomeTestimonial from '@/components/HomeTestimonial'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <HomeReview/>
      <Services/>
      <HomeTestimonial/>
      <BlogSection/>
    </div>
  )
}

export default page
