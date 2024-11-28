'use client';

interface WhatsappReview {
  id: number;
  Name: string;
  School: string;
  screenshot: string; // Direct path to the image in the public folder
}

export default function WhatsappReviewsSection() {
  // Hardcoded WhatsApp reviews with image paths from the public folder
  const whatsappReviews: WhatsappReview[] = [
    {
      id: 1,
      Name: 'Aashita',
      School: 'ISB PGP',
      screenshot: '/whatsapp/Aashita 2.jpg',
    },
    {
      id: 2,
      Name: 'Aashita',
      School: 'IIM A PGPX',
      screenshot: '/whatsapp/Aashita.jpg',
    },
    {
      id: 3,
      Name: 'Aditi',
      School: 'ISB YLP',
      screenshot: '/whatsapp/Aditi.jpg',
    },
    {
      id: 4,
      Name: 'Anugrah',
      School: 'Cornell',
      screenshot: '/whatsapp/Anugrah 2.jpg',
    },
    {
      id: 5,
      Name: 'Anugrah',
      School: 'Cornell',
      screenshot: '/whatsapp/Anugrah.jpg',
    },
    {
      id: 6,
      Name: 'Debarati',
      School: 'Richard lvey',
      screenshot: '/whatsapp/Debarati.jpeg',
    },
    {
      id: 7,
      Name: 'Kush',
      School: 'ISB YLP',
      screenshot: '/whatsapp/Kush.jpg',
    },
    {
      id: 8,
      Name: 'Neeti',
      School: 'ISB PGB',
      screenshot: '/whatsapp/Neeti.jpg',
    },
    {
      id: 9,
      Name: 'Odufa',
      School: 'Cornell',
      screenshot: '/whatsapp/Odufa.jpg',
    },
    {
      id: 10,
      Name: 'Olayinka',
      School: 'Tuck',
      screenshot: '/whatsapp/Olayinka.jpg',
    },
    {
      id: 11,
      Name: 'Rishav',
      School: 'ISB PGP',
      screenshot: '/whatsapp/Rishav.jpg',
    },
    {
      id: 12,
      Name: 'Saketh',
      School: 'ISB PGP',
      screenshot: '/whatsapp/Saketh.jpg',
    },
    {
      id: 13,
      Name: 'Shouvick',
      School: 'IIM C PGPEx',
      screenshot: '/whatsapp/Shouvick.jpg',
    },
    {
      id: 14,
      Name: 'Anand Raj',
      School: 'ISB',
      screenshot: '/whatsapp/Anand.jpg',
    },
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">WhatsApp Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatsappReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full aspect-[9/16] overflow-hidden rounded-md">
                <img
                  src={review.screenshot}
                  alt={review.Name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-black">{review.Name}</h3>
                <p className="text-sm font-semibold text-gray-500">{review.School}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
