'use client'
import { Globe, Target, Users, User, FileSearch, Laptop, TrendingUp, GraduationCap, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface SuccessStory {
  name: string;
  field: string;
  image: string;
  school: {
    name: string;
    logo: string;
  };
}

const successStories: SuccessStory[] = [
  {
    name: "Mohamed Safey",
    field: "Pharmaceuticals",
    image: "/images/success/Safey.png",
    school: {
      name: "London Business School",
      logo: "/images/success/LBS.png"
    }
  },
  {
    name: "Aditya Banda",
    field: "Software Product Engineering",
    image: "/images/success/Aditya.png",
    school: {
      name: "ISB",
      logo: "/images/success/ISB.png"
    }
  },
  {
    name: "Shantanu Mukherjee",
    field: "IT Consulting",
    image: "/images/success/Shantanu.jpeg",
    school: {
      name: "Tepper",
      logo: "/images/success/TEPPER.png"
    }
  },
  {
    name: "Ammar Ahmad",
    field: "Manufacturing",
    image: "/images/success/Ammar.png",
    school: {
      name: "Ross",
      logo: "/images/success/mross.png"
    }
  }
];

export default function Component() {
  return (
    <div>
      <div className="bg-gray-50 p-8 max-w-full font-sans">
        {/* About Us Section */}
        <div className="bg-blue-100 p-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-blue-500 mb-10 mt-5 text-center">ABOUT US</h2>
            <blockquote className="relative text-xl italic text-gray-600 mb-4 text-center">
              <div className="block-underline relative inline-block">
                <span className="text-blue-500 text-4xl absolute -left-8 top-0">"</span>
                <p className="inline-block font-bold">
                  Be with someone who brings out the best in you. We are that someone.
                </p>
                <span className="text-blue-500 text-4xl absolute -right-8 top-0">"</span>
              </div>
            </blockquote>
          </div>
        </div>

        <h3 className="text-4xl text-black font-bold text-center mt-20 mb-5">Who are We?</h3>
        <p className="text-center font-semibold text-gray-600 mb-16">
          We are a group of graduates from premier B schools working relentlessly to ensure your success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col items-center text-center">
            <Globe className="w-16 h-16 text-blue-500 mb-4" />
            <h4 className="font-semibold text-black mb-2">Wide MBA Network</h4>
            <p className="text-sm text-gray-600">
              Personalised assistance from alumni and ex-admission committee members of top Business schools globally including INSEAD, ISB, CEIBS, LBS, Duke, UCLA, etc.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="w-16 h-16 text-blue-500 mb-4" />
            <h4 className="font-semibold text-black mb-2">Tested Strategies</h4>
            <p className="text-sm text-gray-600">
              The admission consultants have gone through the rigor themselves and have supported clients from various professional backgrounds to differentiate their stories from the competitive pool.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users className="w-16 h-16 text-blue-500 mb-4" />
            <h4 className="font-semibold text-black mb-2">Essay Specialists</h4>
            <p className="text-sm text-gray-600">
              While admission consultants provide the logic in your application, the essay specialists provide the art and the passion. They have experience editing professional and academic content.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href='/about-us/ourphilosophy'>
          <button className="bg-blue-500 text-white px-6 py-2 mb-20 rounded-md hover:bg-blue-600 transition-colors">
            Know our Philosophy
          </button>
          </Link>
        </div>

        {/* Impact Section */}
        <div className='bg-blue-50 pb-5'>
          <div className="w-full bg-blue-50 mt-10 mb-10">
            <h2 className="text-3xl text-black font-bold mt-5 p-5 text-center mb-4">Impact we have created</h2>
            <p className="text-center font-semibold text-gray-600 mb-12">
              Over the years, we have created a highly successful pool of CrackAdmission alums whom we also consider as our brand champions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center">
                <User className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-blue-500">550+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileSearch className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-blue-500">1700+</h3>
                <p className="text-gray-600">Applications Reviewed</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Laptop className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-blue-500">60+</h3>
                <p className="text-gray-600">Schools Admitted to</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-blue-500">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-blue-500">$5 Mn+</h3>
                <p className="text-gray-600">Scholarships Generated</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserPlus className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-4xl font-bold text-blue-500">03</h3>
                <p className="text-gray-600">Avg. Referrals/Client</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href='/about-us/success-recipe'>
            <button className="bg-blue-500 text-white px-6 py-2 mb-10 rounded-md hover:bg-blue-600 transition-colors">
              Check our Success Recipe
            </button>
            </Link>
          </div>
        </div>

        {/* Founding Team Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Founding Team</h2>
            <p className="text-center font-semibold text-gray-600 mb-12 max-w-2xl mx-auto">
              Serial Entrepreneurship and Management Consulting are at the core of our founder's experience.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Link href="https://www.linkedin.com/in/arijit-biswas-86507119/">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/images/team/Arijit.png" // Relative path to an image in the public folder
                      alt="Arijit Biswas"
                      width={128}
                      height={128}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl text-black font-bold text-center mb-2">Arijit Biswas</h3>
                  <p className="text-gray-600 font-semibold text-center">Tech Entrepreneur</p>
                </div>
                <div className="h-2 bg-blue-500"></div>
              </div>
              </Link>
              
              <Link href="https://www.linkedin.com/in/shruti-s-15697316/">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/images/team/Shruti.jpeg" // Relative path to an image in the public folder
                      alt="Shruti Sharma"
                      width={128}
                      height={128}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black text-center mb-2">Shruti Sharma</h3>
                  <p className="text-gray-600 font-semibold text-center">Leadership stints with TBI, KPMG, ICF</p>
                </div>
                <div className="h-2 bg-blue-500"></div>
              </div>
              </Link>
            </div>
            <div className="text-center">
               <Link href='/about-us/your-team'>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Meet the Team
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
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
                    <h3 className="text-xl font-semibold text-black text-center mb-2">{story.name}</h3>
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

        {/* CSS for the underlines and quote styling */}
        <style jsx>{`
          .block-underline::before, .block-underline::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            height: 1px;
            background-color: #3b82f6;
            width: 100%;
            margin: 0 auto;
          }

          .block-underline::before {
            top: -20px;
          }

          .block-underline::after {
            bottom: -20px;
          }

          blockquote span:first-child {
            top: 0;
          }

          blockquote span:last-child {
            top: 0;
          }
        `}</style>
      </div>
    </div>
  );
}
