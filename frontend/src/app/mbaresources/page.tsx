'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
import Head from 'next/head';


import { 
    FaCompass as Compass, 
    FaUsers as Users, 
    FaPlay as MonitorPlay, 
    FaEdit as FileEdit, 
    FaFileAlt as FileText, 
    FaCheck as FileCheck, 
    FaGraduationCap as GraduationCap, 
    FaRedo as RefreshCw, 
    FaPen as PenTool, 
    FaChartBar as BarChart2, 
    FaClipboardList as ClipboardList 
  } from "react-icons/fa";
  

  const successStories = [
    { name: "Ammar Ahmad", field: "manufacturing", image: "/images/success/Ammar.png", school: { name: "ross", logo: "/images/success/mross.png" } },
    { name: "Aditya Banda", field: "software product engineering", image: "/images/success/aditya.png", school: { name: "isb", logo: "/images/success/isb.png" } },
    { name: "Shantanu Mukherjee", field: "it consulting", image: "/images/success/Shantanu.jpeg", school: { name: "tepper", logo: "/images/success/tepper.png" } },
    { name: "Mohamed Safey", field: "pharmaceuticals", image: "/images/success/Safey.png", school: { name: "london business school", logo: "/images/success/LBS.png" } }
  ];
  


  const services = [
    { icon: Compass, title: "Comprehensive Consulting", description: "Consultants assist in drafting school-specific essays from scratch", url: "/services/comprehensive-consulting" },
    { icon: Users, title: "Profile Presentations", description: "Consultants draft school-specific essays from scratch", url: "/services/consulting/profilepresentations" },
    { icon: MonitorPlay, title: "Mock Interviews", description: "2 in-depth mock interviews to simulate the real experience", url: "/services/consulting/mockinterviews" },
    { icon: FileEdit, title: "Essay Editing", description: "Consultants review your drafts and provide feedback", url: "/services/consulting/essay-editing" },
    { icon: FileText, title: "CV Editing", description: "Consultants help articulate experiences for a strong CV", url: "/services/consulting/resume" },
    { icon: FileCheck, title: "Recommendations", description: "Consultants help choose recommenders and draft LORs", url: "/services/consulting/recommendation" },
    { icon: GraduationCap, title: "Scholarships", description: "Consultants create reasoning for waiver eligibility", url: "/services/consulting/scholarshipessay" },
    { icon: RefreshCw, title: "Re-Applications", description: "Consultants analyze past applications and suggest improvements", url: "/services/consulting/re-application" },
    { icon: PenTool, title: "Essay Writing", description: "Consultants draft school-specific essays from scratch", url: "/services/consulting/essay-writing" },
    { icon: BarChart2, title: "Ding Analysis", description: "Consultants analyze past applications and suggest improvements", url: "/services/consulting/dinganalysis" },
    { icon: ClipboardList, title: "Profile Evaluation", description: "Connect with consultants to align your school choices with experience", url: "/services/consulting/profile-evaluation" }
  ];
  


export default function Component() {
  useEffect(() => {
    document.title = "MBA Resources";
  }, []);
  return (
    <>
    <Head>
  <title>MBA Resources</title>
  <meta
    name="description"
    content="Explore a variety of MBA resources including essays, CVs, recommendations, and more to help you craft a compelling MBA application."
  />
  <meta name="keywords" content="MBA resources, MBA essays, MBA CVs, MBA recommendations, business school applications" />
  <meta name="author" content="Crack Admission" />
</Head>


    <div className="bg-blue-50 py-12 mb-10 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">MBA Resources</h1>
      <div className="relative">
        <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
        <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
        <div className="border-t border-b border-blue-300 py-4">
          <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
          We make a living by what we get. We make a life by what we give
          </p>
        </div>
      </div>
    </div>
  </div>
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:w-1/2 p-4 flex items-center justify-center bg-gray-100">
        <Image
          src="/images/extra/mba.png"
          alt="Decorative gift boxes"
          width={900}
          height={600}
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2 bg-blue-500 p-6 text-white">
        <h2 className="text-3xl font-bold mb-4">What's in it?</h2>
        <div className="space-y-4">
          <p>
            At CrackAdmission, we are proud to have assisted numerous successful
            MBA applicants in realizing their dreams of attending their desired
            business schools.
          </p>
          <p>
            As a gesture of our commitment to helping aspiring MBA students, we
            would like to share some of the application materials from our clients who
            were admitted to their dream schools.
          </p>
          <p>
            It is important to note that while these materials may serve as a useful
            reference, every MBA candidate's profile and story is unique. It is not
            recommended to simply copy or replicate the content, but rather use it as
            inspiration. The admission committees have access to plagiarism
            detection software and it is crucial to maintain the integrity of the
            application materials.
          </p>
          <p>
            We encourage MBA aspirants to use these sample materials with caution
            and understand that their own personal journey and story is what sets
            them apart.
          </p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold text-center mt-20 text-black mb-2">Materials on Offer</h2>
      <p className="text-center text-gray-600 mb-8">Spectrum of content that will aid you in your MBA Application journey</p>
      <div className="grid grid-cols-1 text-center mb-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <service.icon className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg text-gray-800 font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <Link href={service.url}>
                <button className="text-blue-500 text-sm">Read More</button>
              </Link>
          </div>
        ))}
      </div>

      <section className="bg-gray-50 mt-10 py-16 px-4">
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
                  <p className="text-gray-600 text-center mb-4">{story.field}</p>
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
  )
}