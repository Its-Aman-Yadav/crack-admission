'use client';

import { useEffect, useState } from 'react';

interface ScreenshotFormat {
  url: string;
}

interface GoogleReview {
  id: number;
  name: string;
  caption: string;
  formats: {
    thumbnail?: ScreenshotFormat;
    medium?: ScreenshotFormat;
    large?: ScreenshotFormat;
  };
}

interface Review {
  id: number;
  GoogleReview: GoogleReview[];
}

interface ReviewsResponse {
  data: Review[];
}

export default function GoogleReviewsSection() {
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/reviews?populate[GoogleReview][populate]=*`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ReviewsResponse = await response.json();
        
        // Extract GoogleReview from the response
        const reviews = data.data.flatMap((review: Review) => review.GoogleReview);
        setGoogleReviews(reviews);
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
      }
    };

    fetchGoogleReviews();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Google Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleReviews.map((review) => {
            const imageUrl = review.formats
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${review.formats.large?.url || review.formats.medium?.url || review.formats.thumbnail?.url}`
              : null;

            return (
              <div
                key={review.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-300"
              >
                <div className="w-full aspect-square overflow-hidden rounded-md mx-auto flex items-center justify-center bg-gray-200">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p className="text-gray-500 text-center">Image not available</p>
                  )}
                </div>
                <div className="p-4 text-center">
                  {/* <h3 className="font-semibold text-black">{review.name}</h3> */}
                  <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐</p>
                  {/* <p className="text-sm text-gray-500 mt-2">{review.caption}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
