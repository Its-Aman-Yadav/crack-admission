'use client';

import { useEffect, useState } from 'react';

interface ScreenshotFormat {
  url: string;
}

interface Screenshot {
  id: number;
  url: string;
  formats: {
    thumbnail?: ScreenshotFormat;
    medium?: ScreenshotFormat;
  };
}

interface WhatsappReview {
  id: number;
  Name: string;
  School: string;
  screenshot: Screenshot[];
}

interface Review {
  id: number;
  WhatsappReviews: WhatsappReview[];
}

interface ReviewsResponse {
  data: Review[];
}

export default function WhatsappReviewsSection() {
  const [whatsappReviews, setWhatsappReviews] = useState<WhatsappReview[]>([]);

  useEffect(() => {
    const fetchWhatsappReviews = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews?populate[WhatsappReviews][populate]=*`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ReviewsResponse = await response.json();

        // Extract WhatsappReviews from the response
        const reviews = data.data.flatMap((review: Review) => review.WhatsappReviews);
        setWhatsappReviews(reviews);
      } catch (error) {
        console.error('Error fetching WhatsApp reviews:', error);
      }
    };

    fetchWhatsappReviews();
  }, []);

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">WhatsApp Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatsappReviews.map((review) => {
            const screenshot = review.screenshot?.[0];
            const imageUrl = screenshot
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${screenshot.formats?.medium?.url || screenshot.url}`
              : null;

            return (
              <div
                key={review.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full aspect-[9/16] overflow-hidden rounded-md">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={review.Name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <p className="text-gray-500 text-center">Image not available</p>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black">{review.Name}</h3>
                  <p className="text-sm font-semibold text-gray-500">{review.School}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
