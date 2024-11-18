'use client'
import Image from "next/image";
import Link from "next/link";
import { Compass, Users, MonitorPlay, FileEdit, FileText, FileCheck, GraduationCap, RefreshCw, PenTool, BarChart2, ClipboardList, ChevronDown, Check } from "lucide-react";
import { FaUserCheck, FaSchool,FaLightbulb, FaPen,FaUserFriends, FaEdit, FaFileAlt, FaHandshake, FaComments, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react"; // Import React hooks for the timer
import Head from "next/head";

const successStories = [
    {
      name: "Kevin Yan",
      field: "Financial Services",
      image: "/images/success/Kevin.png", // Replace with actual image path
      school: {
        name: "CKGSB Americas",
        logo: "/images/success/CKGSB.png", // Replace with actual logo path
      },
    },
    {
      name: "Chitransh Jain",
      field: "Banking",
      image: "/images/philosophy/Jain.png", // Replace with actual image path
      school: {
        name: "ISB",
        logo: "/images/success/isb.png", // Replace with actual logo path
      },
    },
    {
      name: "Preeti Singh",
      field: "Program Management",
      image: "/images/success/Preeti.png", // Replace with actual image path
      school: {
        name: "PGPPro",
        logo: "/images/success/pgp.png", // Replace with actual logo path
      },
    },
    {
      name: "Saurabh Gupta",
      field: "Financial Services",
      image: "/images/success/Saurabh.png", // Replace with actual image path
      school: {
        name: "Harvard Business School",
        logo: "/images/success/Harvard.png", // Replace with actual logo path
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
      icon: <FaLightbulb size={40} />, // Use the relevant icon
      title: "Step 1",
      description: "Brainstorm with consultant",
    },
    {
      icon: <FaUserFriends size={40} />, // Use the relevant icon
      title: "Step 2",
      description: "Share a brain dump with consultant",
    },
    {
      icon: <FaFileAlt size={40} />, // Use the relevant icon
      title: "Step 3",
      description: "Review essay written by consultant; share feedback",
    },
    {
      icon: <FaHandshake size={40} />, // Use the relevant icon
      title: "Step 4",
      description: "Mutually finalize essay with Consultant",
    },
  ];
  
const pricingData = [
  { schools: "300 Word", package: "Basic", price: 130 },
  { schools: "500 Word", package: "Advanced", price: 200 },
  { schools: "750 Word", package: "Pro", price: 275 },
  { schools: "1000 Word", package: "Pro", price: 300 },
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
      <Link href="/contact-us">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
        Apply 30% Discount
      </button>
      </Link>
    </div>
  );
};

export default function Component() {
  useEffect(() => {
    document.title = "Essay Writing";
  }, []);
  return (
    <>
    <Head>
        <title>Essay Writing</title>
        <meta
          name="description"
          content="Create standout essays with Crack Admission's professional Essay Writing service. From brainstorming to final draft, we've got you covered!"
        />
        <meta
          name="keywords"
          content="Essay Writing, MBA Application, Essay Drafting, Professional Writing Services, Crack Admission"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Essay Writing | Crack Admission" />
        <meta
          property="og:description"
          content="Get personalized help crafting your MBA essays with Crack Admission's Essay Writing services. Make your story stand out."
        />
        <meta property="og:url" content="https://crackadmission.com/services/consulting/essay-writing" />
        <meta property="og:type" content="website" />
      </Head>

    <div className="w-full">
      {/* Philosophy Section */}
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-blue-500 mb-8">Essay Writing​</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 italic text-center px-8">
              If a story is in you, it has got to come out</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-6 px-4 md:px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg md:text-xl lg:text-xl font-bold">
          Admission consultant will assist to draft school and program specific essays from scratch
          </h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-64 md:h-auto">
            <Image src="/images/success/think.png" alt="MBA consultants discussing with a client" layout="fill" objectFit="cover" />
          </div>
          <div className="bg-blue-500 text-white p-6 md:p-8">
            <h2 className="text-2xl md:text-xl font-bold mb-4">What's in it?</h2>
            <p className="mb-6">
            Have a zillion things racing through your mind but don’t know where to start? Worry not, we are like Snow White’s mirror, who will pen down your awesome story in the most marvelous and honest possible way. All we need is a few conversations to sculpt out parts of your life for your heavy-duty MBA strategy
            </p>
            <Link href="contact-us">
            <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-all">
              GET FREE CONSULTATION
            </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/mbaresources/sample-essays">
          <button className="bg-blue-500 mb-10 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">SAMPLE ESSAY</button>
          </Link>
        </div>

        {/* How it Works Section */}
        <div className="container mx-auto px-4 py-16">
  <div className="w-full max-w-6xl mx-auto p-6 bg-blue-50 border border-gray-300 rounded-lg shadow-sm">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How it Works?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center border border-gray-300 rounded-lg shadow-sm p-6 bg-white"
        >
          <div className="mb-4 text-blue-400">{step.icon}</div>
          <h3 className="text-xl text-gray-800 font-semibold mb-2">Step {index + 1}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Pricing Table Section */}
<div className="container mx-auto px-4 py-16">
  <div className="w-full max-w-5xl mx-auto p-6 space-y-8 border border-gray-300 rounded-lg shadow-sm">
    <div className="bg-gray-50 border border-gray-300 rounded-lg shadow-sm p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Plans Comparison</h2>
        <p className="text-gray-500">2-3 days for each round of delivery</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Word Limit</th>
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
