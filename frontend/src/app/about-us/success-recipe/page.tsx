import { Users, BarChart2, CheckCircle, Network, DollarSign, UserCheck } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Users,
    title: "Dedicated Team",
    description: "\"None of us is as smart as all of us\" - a cohesive team of consultants, english experts, ex admission committee members work round the corner to make you standout"
  },
  {
    icon: BarChart2,
    title: "Our Approach",
    description: "\"No one size fits all\" - Each client's application is tailor made to suit his profile"
  },
  {
    icon: CheckCircle,
    title: "Our Success Stories",
    description: "\"Success is the sum of small efforts repeated day in day out\"- the rise in admission rates of our clients is testimony to our continuous endeavour"
  },
  {
    icon: Network,
    title: "Alumni Network",
    description: "\"Been there done that\"- Our 'brand champions' are alumni from top Business schools and know what works and what doesn't"
  },
  {
    icon: DollarSign,
    title: "ROI",
    description: "\"Invest in yourself. Your career is the engine of your wealth\" - we are dedicated to make sure that your investment in us reaps benefits"
  },
  {
    icon: UserCheck,
    title: "Customer Experience",
    description: "\"If you do build a great experience customers tell each other about that. Word of mouth is very powerful\" - Client satisfaction is the core of our service"
  }
];

interface SuccessStory {
    name: string;
    field: string;
    image: string;
    school: {
      name: string;
      logo: string;
    };
  }
  
  const successStories = [
    {
      name: "Prashant Singh",
      field: "Banking",
      image: "/images/success/Prashant.png", // Replace with actual image path
      school: {
        name: "USC",
        logo: "/images/success/usc.png", // Replace with actual logo path
      },
    },
    {
      name: "Prasanna",
      field: "Manufacturing",
      image: "/images/success/Prasanna.png", // Replace with actual image path
      school: {
        name: "ISB",
        logo: "/images/success/ISB.png", // Replace with actual logo path
      },
    },
    {
      name: "Sneha Nautiyal",
      field: "Financial Services",
      image: "/images/success/Sneha.png", // Replace with actual image path
      school: {
        name: "EDHEC",
        logo: "/images/success/edhec.png", // Replace with actual logo path
      },
    },
    {
      name: "Piyush Khuller",
      field: "Financial Services",
      image: "/images/success/Piyush.png", // Replace with actual image path
      school: {
        name: "IIM",
        logo: "/images/philosophy/IS.png", // Replace with actual logo path
      },
    },
  ];


export default function CombinedPage() {
  return (
    <div className="pt-20"> {/* Added padding-top to make room for the navbar */}
      {/* Philosophy Header */}
      <div className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">Success Recipe</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
              The secret of success is to do the common thing uncommonly well
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Plan Section */}
      <div className="max-w-6xl mt-10 mb-10 mx-auto px-4 py-8">
  {/* Header Section */}
  <div className="bg-blue-500 text-white p-6 rounded-lg mb-8 text-center">
    <p className="text-base md:text-lg">
      We maximize your chances of success by executing a strategic plan, which we call "Doing Things"
    </p>
  </div>

  {/* Features Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {features.map((feature, index) => (
      <div
        key={index}
        className="flex flex-col items-center md:items-start text-center md:text-left p-4 border rounded-lg shadow-sm bg-white"
      >
        <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-lg md:text-xl text-gray-600 font-semibold mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>
</div>


      <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Success Stories</h2>
            <p className="text-center font-semibold text-gray-600 mb-12">
              Each new addition to our <span className="text-blue-500">Hall of Fame </span> fills us with tremendous pride.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={96}
                        height={96}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{story.name}</h3>
                    <p className="text-gray-600 text-center font-se mb-4">{story.field}</p>
                    <div className="h-12 flex items-center justify-center">
                      <Image
                        src={story.school.logo}
                        alt={story.school.name}
                        width={100}
                        height={50}
                        className="max-h-full w-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
    
  );
}
