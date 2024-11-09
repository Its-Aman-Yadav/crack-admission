// components/ModernTestimonialsInfinite.tsx
'use client'
import React from 'react';

type Testimonial = {
  name: string;
  company: string;
  image: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: 'Anuj Shukla',
    company: 'Supply Chain Professional',
    image: '/images/testimonial/AnujShukla.png', // Replace with the actual image URL
    text: 'I will strongly attribute my admission offers from Duke Fuqua and ISB because of the essay review service provided by Arijit and the CrackAdmission team. I will definitely recommend others.',
    rating: 5,
  },
  {
    name: 'Anurag Prakash',
    company: 'Software Developer',
    image: '/images/testimonial/AnuragPrakash.png', // Replace with the actual image URL
    text: 'Arijit transformed my diverse experiences into a coherent and impactful story, leading to acceptance at UCLA Anderson. Forever grateful for his expertise!',
    rating: 5,
  },
  {
    name: 'Kevin Liu',
    company: 'Global Sourcing Manager',
    image: '/images/testimonial/KevinLiu.png', // Replace with the actual image URL
    text: 'With CrackAdmission’s expert guidance, I got into Emory Goizueta, my dream Executive MBA program! Heartfelt gratitude for the prompt and impactful support. A game-changer for a highly busy professional!',
    rating: 5,
  },
  {
    name: 'Venkatesh Baliga',
    company: 'Software Product Engineering',
    image: '/images/testimonial/VenkateshBliga.png', // Replace with the actual image URL
    text: 'Shruti helped me storyboard and translate my regular work experience into a high impact eye-catching narrative. Her thorough 1:1 mock interview sessions improved my confidence levels manifold.',
    rating: 5,
  },
];

const ModernTestimonialsInfinite: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">⭐⭐⭐⭐⭐</p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-6 animate-infinite-scroll testimonials-wrapper"
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              // Duplicate testimonials to ensure a seamless infinite loop
              <div
                key={index}
                className="flex-shrink-0 w-[350px] h-[500px] bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-24 h-24 rounded-full mb-4 object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="text-center">
                      <h3 className="font-bold text-gray-800 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-center">{testimonial.text}</p>
                <div className="flex justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.149c.97 0 1.371 1.24.588 1.81l-3.357 2.435a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.539 1.118l-3.357-2.435a1 1 0 00-1.176 0l-3.357 2.435c-.784.57-1.839-.197-1.539-1.118l1.286-3.945a1 1 0 00-.364-1.118L2.561 9.372c-.783-.57-.382-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.286-3.945z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adding CSS for Infinite Loop & Blurred Edges */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 30s linear infinite;
        }

        /* Applying blur effect to the testimonial slider wrapper only */
        .testimonials-wrapper {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        /* Adjusting the edge gradient effect to properly apply to the right side */
        .relative::before, .relative::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50px;
          z-index: 2;
          pointer-events: none;
        }

        /* Left side gradient for smooth entrance */
        .relative::before {
          left: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }

        /* Right side gradient for smooth exit */
        .relative::after {
          right: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
      `}</style>
    </section>
  );
};

export default ModernTestimonialsInfinite;
