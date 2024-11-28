"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Users,
  MonitorPlay,
  FileEdit,
  FileText,
  FileCheck,
  GraduationCap,
  RefreshCw,
  PenTool,
  BarChart2,
  ClipboardList,
  ChevronDown,
  Check,
} from "lucide-react";
import {
  FaUserCheck,
  FaSchool,
  FaPen,
  FaEdit,
  FaFileAlt,
  FaHandshake,
  FaComments,
  FaLinkedin,
} from "react-icons/fa";
import { useState, useEffect } from "react"; // Import React hooks for the timer
import Head from "next/head";

const successStories = [
  {
    name: "Akhil Golla",
    field: "Operations",
    image: "/images/success/Akhil.png", // Replace with actual image path
    school: {
      name: "IE",
      logo: "/images/success/ie.png", // Replace with actual logo path
    },
  },
  {
    name: "Revant Miglani",
    field: "Real Estate",
    image: "/images/success/Revant.png", // Replace with actual image path
    school: {
      name: "ISB",
      logo: "/images/success/ISB.png", // Replace with actual logo path
    },
  },
  {
    name: "Debarati Dasgupta",
    field: "Content Creation",
    image: "/images/success/Debarati.png", // Replace with actual image path
    school: {
      name: "ISB",
      logo: "/images/success/ISB.png", // Replace with actual logo path
    },
  },
  {
    name: "Rahul Syal",
    field: "Operations",
    image: "/images/success/Rahul.png", // Replace with actual image path
    school: {
      name: "IIM",
      logo: "/images/success/IIM.png", // Replace with actual logo path
    },
  },
];

const services = [
  {
    icon: Compass,
    title: "Comprehensive Consulting",
    description:
      "Consultants assist in drafting school-specific essays from scratch",
    url: "/services/comprehensive-consulting",
  },
  {
    icon: Users,
    title: "Profile Presentations",
    description: "Consultants draft school-specific essays from scratch",
    url: "/services/consulting/profilepresentations",
  },
  {
    icon: MonitorPlay,
    title: "Mock Interviews",
    description: "2 in-depth mock interviews to simulate the real experience",
    url: "/services/consulting/mockinterviews",
  },
  {
    icon: FileEdit,
    title: "Essay Editing",
    description: "Consultants review your drafts and provide feedback",
    url: "/services/consulting/essay-editing",
  },
  {
    icon: FileText,
    title: "CV Editing",
    description: "Consultants help articulate experiences for a strong CV",
    url: "/services/consulting/resume",
  },
  {
    icon: FileCheck,
    title: "Recommendations",
    description: "Consultants help choose recommenders and draft LORs",
    url: "/services/consulting/recommendation",
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Consultants create reasoning for waiver eligibility",
    url: "/services/consulting/scholarshipessay",
  },
  {
    icon: RefreshCw,
    title: "Re-Applications",
    description:
      "Consultants analyze past applications and suggest improvements",
    url: "/services/consulting/re-application",
  },
  {
    icon: PenTool,
    title: "Essay Writing",
    description: "Consultants draft school-specific essays from scratch",
    url: "/services/consulting/essay-writing",
  },
  {
    icon: BarChart2,
    title: "Ding Analysis",
    description:
      "Consultants analyze past applications and suggest improvements",
    url: "/services/consulting/dinganalysis",
  },
  {
    icon: ClipboardList,
    title: "Profile Evaluation",
    description:
      "Connect with consultants to align your school choices with experience",
    url: "/services/consulting/profile-evaluation",
  },
];

// Minimalist Rush Hour component
const RushHour = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      document.title = "MBA Profile Accelerator";
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  const formatTime = (seconds: any) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Head>
        <title>MBA Profile Accelerator</title>
        <meta
          name="description"
          content="Get expert guidance for your MBA application with Crack Admission's Comprehensive Consulting services. Tailored strategies, essay support, interview prep, and more!"
        />
        <meta
          name="keywords"
          content="Comprehensive Consulting, MBA Application, Essay Editing, Interview Preparation, Resume Editing, Recommendation Letters"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Comprehensive Consulting | Crack Admission"
        />
        <meta
          property="og:description"
          content="Explore Crack Admission's Comprehensive Consulting services to maximize your MBA application success. Tailored support for every stage of your application."
        />
        <meta
          property="og:url"
          content="https://crackadmission.com/services/mba-profile-accelerator"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Get 30% Off!</h2>
        <p className="text-gray-600 mb-4">
          Hurry up! This offer is valid for the next:
        </p>

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
    </>
  );
};

export default function Component() {
  return (
    <div className="w-full">
      {/* Philosophy Section */}
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-blue-500 mb-8">
            MBA Profile Accelerator​
          </h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">
              "
            </div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">
              "
            </div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 italic text-center px-8">
                Success doesn’t come from what you do occasionally; it comes
                from what you do consistently. Keep going!.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* <div className="bg-blue-500 text-white text-center py-6 px-4 md:px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg md:text-xl lg:text-xl font-bold">
            Get focused attention on all aspects of your application in one single package
          </h1>
        </div>
      </div> */}

      {/* Main Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 overflow-hidden rounded-lg shadow-lg">
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/extra/profile.webp"
              alt="MBA consultants discussing with a client"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="bg-blue-500 text-white p-6 md:p-8">
            <h2 className="text-2xl md:text-xl font-bold mb-4">
              What's in it?
            </h2>
            <p className="mb-6">
              The MBA Profile Accelerator is a personalized guidance package
              designed for MBA aspirants aiming to strategically enhance their
              profiles over the next 10–12 months before applying to top
              business schools. This service focuses on identifying high-impact
              extracurricular activities, community engagement, professional
              projects, certifications, and leadership initiatives aligned with
              your target MBA programs and career aspirations.
            </p>
            <Link href="/contact-us">
              <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100 transition-all">
                GET FREE CONSULTATION
              </button>
            </Link>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="w-full max-w-4xl mx-auto bg-blue-50 p-8 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              How it Works
            </h2>
            <h4 className="text-2xl font-semibold text-center text-blue-600 mb-8">
              Nature of Interaction
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <FaUserCheck size={50} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Scheduled Zoom Meetings
                </h3>
                <p className="text-gray-600 text-sm">
                  Engage in two 1-hour sessions per month for in-depth
                  discussions, personalized feedback, and progress evaluation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <FaComments size={50} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  WhatsApp Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Access on-demand consultations for quick clarifications,
                  updates, and guidance anytime you need it.
                </p>
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-center text-blue-600 mb-8">
              Frequency of Interaction
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <FaUserCheck size={50} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Twice a Month
                </h3>
                <p className="text-gray-600 text-sm">
                  Pre-scheduled Zoom meetings for structured discussions and
                  progress tracking.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-500 mb-4">
                  <FaComments size={50} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Need-Based Chats
                </h3>
                <p className="text-gray-600 text-sm">
                  WhatsApp for interim support and ad-hoc queries to address
                  immediate concerns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Table Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="w-full max-w-5xl mx-auto bg-blue-50 p-8 border border-gray-300 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800">Service Fee</h2>
              <p className="text-lg text-gray-600 mt-2">
                Affordable pricing designed to give you maximum value.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  $100/Month
                </h3>
                <ul className="text-left space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <p>
                      <strong>Initial Commitment:</strong> Minimum 3 months of
                      upfront subscription (300 $).
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <p>
                      <strong>Monthly Payments:</strong> Billed at the start of
                      every subsequent month after the initial term.
                    </p>
                  </li>
                </ul>
                <Link href="/payment">
                  <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-all">
                    Subscribe Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <RushHour />
        </div>

        <h2 className="text-2xl font-bold text-center text-black mb-2">
          Multiple Services, One Platform
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We provide an array of services depending on where you are in your
          application process
        </p>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 rounded-lg p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg text-gray-800 font-semibold">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.description}
              </p>
              <Link href={service.url}>
                <button className="text-blue-500 text-sm">Read More</button>
              </Link>
            </div>
          ))}
        </div>

        <section className="bg-gray-50 mt-10 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Our Success Stories
            </h2>
            <p className="text-center font-semibold text-gray-600 mb-12">
              Each new addition to our{" "}
              <span className="text-blue-500">Hall of Fame </span> fills us with
              tremendous pride.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
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
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                      {story.name}
                    </h3>
                    <p className="text-gray-600 text-center font-se mb-4">
                      {story.field}
                    </p>
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
  );
}
