'use client';

import GoogleReviewsSection from '@/components/GoogleReview';
import TestimonialSection from '@/components/Testimonial';
import WhatsappReviewsSection from '@/components/WhatsappReview';

interface Video {
  id: number;
  link: string;
  Name: string;
  School: string;
}

interface Review {
  id: number;
  VideoSection: Video[];
}

export default function ReviewSection() {
  // Hardcoded data for reviews
  const reviews: Review[] = [
    {
      id: 1,
      VideoSection: [
        {
          id: 101,
          link: 'https://youtu.be/LvecKtZv9GI',
          Name: 'Apurv Upadhyay',
          School: 'ISB PGP',
        },
        {
          id: 102,
          link: 'https://youtu.be/XP_poPwo_lE',
          Name: 'Saheli Ghosh',
          School: 'ISB PGP, HEC Paris',
        },
      ],
    },
    {
      id: 2,
      VideoSection: [
        {
          id: 103,
          link: '/Vaibhav.mp4', // Local video
          Name: 'Vaibhav Chandel',
          School: 'ISB PGP',
        },
        {
          id: 104,
          link: '/Umang.mp4', // Local video
          Name: 'Umang Agarwal',
          School: 'ISB PGP',
        },
        {
          id: 105,
          link: '/Ashutosh.mp4', // Local video
          Name: 'Ashutosh',
          School: 'IIM B EPGP',
        },
      ],
    },
  ];

  const isYouTubeLink = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      let videoId = '';

      if (urlObj.hostname.includes('youtube.com')) {
        videoId = urlObj.searchParams.get('v') || '';
      } else if (urlObj.hostname.includes('youtu.be')) {
        videoId = urlObj.pathname.slice(1);
      }

      return `https://www.youtube.com/embed/${videoId}`;
    } catch {
      return '';
    }
  };

  return (
    <>
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-5 text-blue-500 mb-8">Reviews</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                The sole reason we are in business is to make life less difficult for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Student Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) =>
              review.VideoSection.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video">
                    {isYouTubeLink(video.link) ? (
                      <iframe
                        src={getYouTubeEmbedUrl(video.link)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <video
                        controls
                        className="w-full h-full"
                        src={video.link}
                      ></video>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
                        {video.Name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-black">{video.Name}</h3>
                        <p className="text-sm font-semibold text-gray-500">{video.School}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <WhatsappReviewsSection />
      <GoogleReviewsSection />
      <TestimonialSection />
    </>
  );
}
