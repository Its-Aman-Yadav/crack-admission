'use client'
import Image from "next/image";
import { Compass, Users, MonitorPlay, FileEdit, FileText, FileCheck, GraduationCap, RefreshCw, PenTool, BarChart2, ClipboardList, ChevronDown, Check } from "lucide-react";
import { FaUserCheck, FaSchool, FaPen, FaEdit, FaFileAlt, FaHandshake, FaComments, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import React hooks for the timer
import Head from "next/head";

const successStories = [
    {
      name: "Aashutosh Sinha",
      field: "Strategy Consulting",
      image: "/images/success/Aashutosh.png", // Replace with actual image path
      school: {
        name: "Chicago Booth",
        logo: "/images/success/chicago-booth.png", // Replace with actual logo path
      },
    },
    {
      name: "Ishan Tayal",
      field: "IT Services",
      image: "/images/success/Ishan.png", // Replace with actual image path
      school: {
        name: "ISB",
        logo: "/images/success/ISB.png", // Replace with actual logo path
      },
    },
    {
      name: "Jatin Nagrani",
      field: "Financial Services",
      image: "/images/success/Jatin.png", // Replace with actual image path
      school: {
        name: "Rotterdam School of Management",
        logo: "/images/success/ucd.png", // Replace with actual logo path
      },
    },
    {
      name: "Muneeb Alam",
      field: "Manufacturing",
      image: "/images/success/Muneeb.png", // Replace with actual image path
      school: {
        name: "Chicago Booth",
        logo: "/images/success/chicago-booth.png", // Replace with actual logo path
      },
    },
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

const steps = [
  {
    icon: <FaUserCheck size={40} />,
    title: "Profile Assessment",
    description: "Initial profile assessment Deep dive into profile strengths",
  },
  {
    icon: <FaSchool size={40} />,
    title: "School Selection",
    description:
      "School research, compatibility assessment, and selection Development of a detailed and customized application strategy, aka creating your 'Brand'",
  },
  {
    icon: <FaPen size={40} />,
    title: "Essay Writing",
    description:
      "Breakdown of Essay Questions and mapping of profile information with relevant essays Draft of an essay blueprint Essay writing (unlimited drafts)",
  },
  {
    icon: <FaEdit size={40} />,
    title: "Essay Editing",
    description:
      "Essay Proofreading and language editing (till the client is satisfied) Connection with an alum/current student from the specific school",
  },
  {
    icon: <FaFileAlt size={40} />,
    title: "Resume Editing",
    description: "Resume strategy and editing (unlimited drafts)",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Recommendation Support",
    description: "Recommender choosing strategy Recommendation letter writing/editing",
  },
  {
    icon: <FaComments size={40} />,
    title: "Interview Preparation",
    description: "Access to Interview Preparation Questionnaire Mock Interview with role playing (Video & in person)",
  },
  {
    icon: <FaLinkedin size={40} />,
    title: "LinkedIn Profile Evaluation",
    description: "Initial profile assessment",
  },
];

const pricingData = [
  { schools: "Flat Price", package: "Basic", price: 150 },
];

// Minimalist Rush Hour component
const RushHour = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  const formatTime = (seconds:any) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Get 30% Off!</h2>
      <p className="text-gray-600 mb-4">Hurry up! This offer is valid for the next:</p>
      
      {/* Countdown Timer */}
      <div className="text-3xl font-bold text-blue-600 mb-4">
        {formatTime(timeLeft)}
      </div>

      {/* Simple button */}
      <Link href="/payment">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
        Apply 30% Discount
      </button>
      </Link>
    </div>
  );
};

export default function Component() {
  useEffect(() => {
    document.title = "Scholarship";
  }, []);

  return (
    <>
    <Head>
      <title>Scholarship Essay Writing | Crack Admission</title>
      <meta
        name="description"
        content="Get professional assistance to craft compelling scholarship essays. Maximize your chances of securing a scholarship with expert guidance."
      />
      <meta
        name="keywords"
        content="Scholarship Essays, Scholarship Guidance, MBA Scholarship, Crack Admission, Essay Writing Help"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Scholarship Essay Writing | Crack Admission" />
      <meta
        property="og:description"
        content="Craft a scholarship essay that stands out. Let us help you create a compelling reasoning for your waiver eligibility."
      />
      <meta property="og:url" content="https://crackadmission.com/services/consulting/scholarships" />
      <meta property="og:type" content="website" />
    </Head>
    <div className="w-full">
      {/* Philosophy Section */}
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-blue-500 mb-8">Scholarship Essay​</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 italic text-center px-8">You deserve better. You know you do</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-6 px-4 md:px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg md:text-xl lg:text-xl font-bold">
          Admission consultant will help you to create a compelling reasoning behind why you deserve a waiver.
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-64 md:h-auto">
            <Image src="/images/extra/scholarship.png" alt="MBA consultants discussing with a client" layout="fill" objectFit="cover" />
          </div>
          <div className="bg-blue-500 text-white p-6 md:p-8">
            <h2 className="text-2xl md:text-xl font-bold mb-4">What's in it?</h2>
            <p className="mb-6">
            More likely than not, the MBA will burn a hole in your pocket, unless you have a bag of gold hidden somewhere or are Richie Rich. All applicants should write their scholarship essays with as much dedication as they write their MBA application. We will ensure that you do not miss out on this opportunity to ease out this serious monetary commitment that you would make.
            </p>
            <Link href="/contact-us">
            <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-all">
             
              GET FREE CONSULTATION
            </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/mbaresources">
          <button className="bg-blue-500 mb-10 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">SAMPLE MBA RESOURCES</button>
          </Link>
        </div>

        {/* How it Works Section */}
        <div className="container mx-auto px-4 py-16">
  <div className="w-full max-w-6xl bg-blue-50 mx-auto p-6 border border-gray-300 rounded-lg shadow-sm">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How it Works?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 1</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Session Setup</h4>
        <p className="text-sm text-gray-600">Set up 45 min session with consultant</p>
      </div>
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 2</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Strategize on Scholarship</h4>
        <p className="text-sm text-gray-600">Finalize which scholarship is most suitable considering profile; strategize on scholarship theme</p>
      </div>
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 3</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Review Essay</h4>
        <p className="text-sm text-gray-600">Review essay written by consultant; share feedback</p>
      </div>
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white">
        <div className="mb-4 text-blue-400">
          {/* Insert icon here if available */}
        </div>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">Step 4</h3>
        <h4 className="text-lg font-medium text-blue-500 mb-2">Finalize Essay</h4>
        <p className="text-sm text-gray-600">Mutually finalize essay with consultant</p>
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
