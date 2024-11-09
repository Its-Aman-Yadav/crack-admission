'use client'
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
  screenshot: Screenshot[];  // Changed to an array to match the response
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
        const response = await fetch('http://localhost:1337/api/reviews?populate[WhatsappReviews][populate]=*');
        const data: ReviewsResponse = await response.json();
        
        // Extract WhatsappReviews from the response
        const reviews = data.data.flatMap((review) => review.WhatsappReviews);
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
            // Access the first item in the screenshot array
            const screenshot = review.screenshot && review.screenshot[0];
            // Construct the image URL with a fallback
            const imageUrl = screenshot
              ? `http://localhost:1337${screenshot.formats?.medium?.url || screenshot.url}`
              : null;

            // Log the image URL to verify
            console.log("Image URL:", imageUrl);

            return (
              <div key={review.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-full aspect-[9/16] overflow-hidden rounded-md">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={review.Name}
                      className="w-full h-full object-contain" // Changed to object-contain
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
