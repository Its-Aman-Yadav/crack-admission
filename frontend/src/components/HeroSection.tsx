import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Link href="/">
          <Image
            src="/images/bgImage.jpg" // Replace with the correct path to your local image
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </Link>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
          CONNECT, CONVERT & 
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
          GET NOTICED
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 max-w-md sm:max-w-lg">
          We help MBA aspirants get admission into the top business schools globally by turning their experiences into compelling stories that make them stand out and get recognized!
        </p>
        
        {/* Horizontal Buttons */}
        <div className="flex space-x-4">
          <Link href="/contact-us">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full">
              Free Consultation
            </button>
          </Link>
          <Link href="/about-us">
            <button className="border border-white hover:bg-gray-100 text-white hover:text-black font-semibold py-3 px-6 rounded-full">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
