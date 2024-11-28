'use client';

interface GoogleReview {
  id: number;
  image: string; // Direct path to the image in the public folder
}

export default function GoogleReviewsSection() {
  // Hardcoded Google Reviews
  const googleReviews: GoogleReview[] = [
    {
      id: 1,
      image: '/Google/1.png',
    },
    {
      id: 2,
      image: '/Google/2.png',
    },
    {
      id: 3,
      image: '/Google/3.png',
    },
    {
      id: 4,
      image: '/Google/4.png',
    },
    {
      id: 5,
      image: '/Google/5.png',
    },
    {
      id: 6,
      image: '/Google/6.png',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Google Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {googleReviews.map((review) => (
            <div key={review.id} className="flex justify-center">
              <img
                src={review.image}
                alt={`Review ${review.id}`}
                className="w-full max-w-2xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
