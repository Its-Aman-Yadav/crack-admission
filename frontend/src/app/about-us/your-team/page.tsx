"use client"
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect } from 'react';

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
      name: "Surya Tamada",
      field: "IT Consulting",
      image: "/images/success/Surya.png", // Replace with actual image path
      school: {
        name: "Oxford",
        logo: "/images/success/oxford.png", // Replace with actual logo path
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
      name: "Himanshu",
      field: "Supply Chain",
      image: "/images/success/Himanshu.png", // Replace with actual image path
      school: {
        name: "IIM",
        logo: "/images/success/iiml.png", // Replace with actual logo path
      },
    },
  ];



export default function TeamShowcase() {
  useEffect(() => {
    document.title = "Your Team";
  }, []);

  return (
    <>
    <Head>
        <title>Your Team</title>
        <meta
          name="description"
          content="Meet the team of top consultants and experts from premier B-schools who are dedicated to helping you achieve success in MBA admissions."
        />
        <meta
          name="keywords"
          content="Meet the team, Crack Admission, MBA consultants, admission experts, top business schools"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Meet the Team | Crack Admission" />
        <meta
          property="og:description"
          content="Get to know the team of MBA admission consultants and experts from premier B-schools, ready to guide you to success."
        />
        <meta property="og:url" content="https://crackadmission.com/about-us/your-team" />
        <meta property="og:type" content="website" />
      </Head>

       <div className="bg-blue-50 py-12 px-4 pt-20"> {/* Added pt-20 for top margin */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">Your Team</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                Alone we can do so little; together, we can do so much
              </p>
            </div>
          </div>
        </div>
      </div>


 {/* Top Consultants Section */}
 <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center font-semibold text-gray-600 mb-4">
          We are a group of graduates from premier B schools working relentlessly to ensure your success
        </p>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Top Consultants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {consultants.map((consultant, index) => (
            <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-sm">
               <Link href={consultant.linkedin}>
              <Image
                src={consultant.image}
                alt={consultant.name}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              </Link>
              <h3 className="font-semibold text-black text-lg mb-1">{consultant.name}</h3>
              <p className="text-sm font-semibold text-gray-600 mb-4">{consultant.expertise}</p>
              <Image
                src={consultant.school.logo}
                alt={consultant.school.name}
                width={100}
                height={50}
                className="mt-auto"
              />
            </div>
          ))}
        </div>
      </div>


      <div className="max-w-6xl mb-10 mx-auto p-4">
        {/* Hero Section */}
        <div className="flex flex-col  md:flex-row mb-10 rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <Image
              src="/images/extra/team.png"
              alt="Team members working together"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 bg-blue-500 p-6 flex items-center">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">A smart team, working synchronously, can translate to a "win" for you.</h2>
              <p className="text-sm">
                During the life cycle of your relationship with us, you will be interacting with our team of smart people from diverse backgrounds who have come together to create a unique solution.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-8">
          {[
            {
              title: 'School Alumni',
              description: 'Our alumni network allows you to tap into a vast pool of knowledge and experience.',
              image: '/images/extra/1.png'
            },
            {
              title: 'Language Experts',
              description: 'Our language experts ensure clear and effective communication across all platforms.',
              image: '/images/extra/2.png'
            },
            {
              title: 'Ex-Admission Committee Members',
              description: 'Gain insights from those who have been on the other side of the admissions process.',
              image: '/images/extra/3.png'
            },
            {
              title: 'Specialists From Various Spheres',
              description: 'Our diverse team brings a wide range of expertise to solve complex problems.',
              image: '/images/extra/4.png'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full">
             
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-center text-blue-600 font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-center font-semibold text-gray-600">{item.description}</p>
              </div>
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
    </>
  );
}

const consultants = [
  {
    name: "Arijit Biswas",
    expertise: "Tech Entrepreneurship",
    image: "/images/team/Arijit.png",
    school: { name: "ISB", logo: "/images/success/ISB.png" },
    linkedin: "https://www.linkedin.com/in/arijit-biswas-86507119/"
  },
  {
    name: "Shruti Sharma",
    expertise: "Alliances and Partnerships",
    image: "/images/team/Shruti.jpeg",
    school: { name: "ISB", logo: "/images/success/ISB.png" },
    linkedin: "https://www.linkedin.com/in/shruti-sharma-15697316/"
  },
  {
    name: "Mudit Gupta",
    expertise: "Product Management",
    image: "/images/team/Mudit.png",
    school: { name: "INSEAD", logo: "/images/team/insead.png" },
    linkedin: "https://www.linkedin.com/in/muditgupta/"
  },
  {
    name: "Ruchi Somaiya",
    expertise: "Business Development",
    image: "/images/team/Ruchi.png",
    school: { name: "ISB", logo: "/images/success/ISB.png" },
    linkedin: "https://www.linkedin.com/in/ruchisomaiya/"
  },
  {
    name: "Arjun Agarwala",
    expertise: "Strategy Consulting",
    image: "/images/team/Arjun.png",
    school: { name: "Other", logo: "/images/team/emory.png" },
    linkedin: "https://www.linkedin.com/in/arjun-agarwala-902b7081/"
  },
  {
    name: "Ashutosh",
    expertise: "Product Management",
    image: "/images/team/Ashutosh.png",
    school: { name: "Other", logo: "/images/philosophy/IIM.png" },
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-iimb/"
  },
  {
    name: "Nitish Barbaria",
    expertise: "Program Management",
    image: "/images/team/Nitish.png",
    school: { name: "ISB", logo: "/images/success/ISB.png" },
    linkedin: "https://www.linkedin.com/in/nitish-barbaria-331a5650/"
  },
  {
    name: "Raghav Dasson",
    expertise: "Product Management",
    image: "/images/team/Raghav.png",
    school: { name: "ISB", logo: "/images/success/ISB.png" },
    linkedin: "https://www.linkedin.com/in/raghavdasson/"
  }
];

