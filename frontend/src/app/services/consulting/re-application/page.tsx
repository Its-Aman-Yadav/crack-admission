'use client'
import Image from "next/image";
import Link from "next/link";
import { Compass, Users, MonitorPlay, FileEdit, FileText, FileCheck, GraduationCap, RefreshCw, PenTool, BarChart2, ClipboardList, ChevronDown, Check } from "lucide-react";
import { FaUserCheck, FaSchool, FaPen, FaEdit, FaFileAlt, FaHandshake, FaComments, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react"; // Import React hooks for the timer
import Head from "next/head";
import RushHour from "@/components/RushHour";

const successStories = [
    {
      name: "Hiti Taluja",
      field: "Shipping",
      image: "/images/success/Hiti.png", // Replace with actual image path
      school: {
        name: "Melbourne Business School",
        logo: "/images/success/Melbourne.png", // Replace with actual logo path
      },
    },
    {
      name: "Vaibhav Chandel",
      field: "Shipping",
      image: "/images/success/Vaibhav.png", // Replace with actual image path
      school: {
        name: "ISB",
        logo: "/images/success/ISB.png", // Replace with actual logo path
      },
    },
    {
      name: "Ashrith Kothapalli",
      field: "Manufacturing",
      image: "/images/success/Ashrith.png", // Replace with actual image path
      school: {
        name: "Chicago Booth",
        logo: "/images/success/chicago-booth.png", // Replace with actual logo path
      },
    },
    {
      name: "Pandu Chunduri",
      field: "IT Consulting",
      image: "/images/success/Pandu.png", // Replace with actual image path
      school: {
        name: "Wharton",
        logo: "/images/success/Wharton.png", // Replace with actual logo path
      },
    },
  ];
  

  const services = [
    { icon: ClipboardList, title: "MBA Profile Accelerator", description: "Strategic guidance to enhance profile before MBA applications", url: "/services/mba-profile-accelerator" },
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

const pricingData = [
  { schools: "Flat Price", package: "Basic", price: 150 },
];

export default function Component() {
  useEffect(() => {
    document.title = "Re-Application";
  }, []);
  return (
    <>
    <Head>
      <title>Re-Application</title>
      <meta
        name="description"
        content="Receive expert feedback and guidance to improve your MBA application. Strategize, refine, and reapply with confidence."
      />
      <meta name="keywords" content="Re-Application, MBA Applications, Feedback, Ding Analysis, Crack Admission" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Re-Application | Crack Admission" />
      <meta
        property="og:description"
        content="Get personalized strategies for improving your MBA application. Learn how to address weaknesses and highlight changes in your profile effectively."
      />
      <meta property="og:url" content="https://crackadmission.com/services/consulting/re-application" />
      <meta property="og:type" content="website" />
    </Head>
    
    <div className="w-full">
      {/* Philosophy Section */}
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-blue-500 mb-8">Re-Application​</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 italic text-center px-8">Your Setback is just a setup for your comeback</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-6 px-4 md:px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg md:text-xl lg:text-xl font-bold">
          Admission consultant will do a ding analysis on previous application and highlight changes in your profile effectively
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-64 md:h-auto">
            <Image src="/images/extra/write.jpg" alt="MBA consultants discussing with a client" layout="fill" objectFit="cover" />
          </div>
          <div className="bg-blue-500 text-white p-6 md:p-8">
            <h2 className="text-2xl md:text-xl font-bold mb-4">What's in it?</h2>
            <p className="mb-6">
            It's always tricky to decide the most apt re-applicant strategy — career progression or a different profile altogether. More importantly, should you even re-apply? We have a few tricks up our sleeve for you to answer these very critical questions and for you to emerge victorious on your second attempt. In Margaret Thatcher's words – 'You may have to fight a battle more than once to win it
            </p>
            <Link href="/contact-us">
            <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-all">
              GET FREE CONSULTATION
            </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/mbaresources/sample-essays">
          <button className="bg-blue-500 mb-10 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">SAMPLE ESSAYS</button>
          </Link>
        </div>

        {/* How it Works Section */}
        <div className="container mx-auto px-4 py-16">
  <div className="w-full max-w-6xl mx-auto p-6 border bg-blue-50 border-gray-300 rounded-lg shadow-sm">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How it Works?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 1</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Share Previous Documents</h4>
        <p className="text-sm text-gray-600">Share all essays, resume, and application forms from the previous year</p>
      </div>
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 2</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Receive Feedback</h4>
        <p className="text-sm text-gray-600">Receive feedback from consultant</p>
      </div>
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 3</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Devise Strategy</h4>
        <p className="text-sm text-gray-600">Devise strategy after narrowing down a theme</p>
      </div>
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 4</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Review and Finalize</h4>
        <p className="text-sm text-gray-600">Review essay(s) shared by consultant, send feedback, and finalize</p>
      </div>
    </div>
  </div>
</div>

{/* Pricing Table Section */}
<div className="container mx-auto px-4 py-16">
  <div className="w-full max-w-5xl mx-auto p-6 space-y-8 border border-gray-300 rounded-lg shadow-sm">
    <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-sm p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Plans</h2>
        <p className="text-gray-500">2-3 days for each round of delivery</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Structure</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Package</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Price</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pricingData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 text-sm text-gray-700">{item.schools}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.package === "Pro" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.package}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">${item.price}</td>
                <td className="px-4 py-3 text-right">
                  <Link href="/payment">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Choose →</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Minimalist Rush Hour Section */}
    <div className="border border-gray-300 rounded-lg shadow-sm p-6">
      <RushHour />
    </div>
  </div>
</div>


        <h2 className="text-2xl font-bold text-center text-black mb-2">Multiple Services, One Platform</h2>
      <p className="text-center text-gray-600 mb-8">We provide an array of services depending on where you are in your application process</p>
      <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
    </>
  );
}
