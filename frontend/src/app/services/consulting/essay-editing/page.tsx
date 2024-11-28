'use client'
import Image from 'next/image';
import Link from 'next/link';
import { ElementType } from 'react';
import { Compass, Users, MonitorPlay, FileEdit, FileText, FileCheck, GraduationCap, RefreshCw, PenTool, BarChart2, ClipboardList, ChevronDown, Check } from "lucide-react";
import { LightbulbIcon, UserIcon, FileTextIcon, HandIcon } from 'lucide-react';
import RushHour from '@/components/RushHour';
import Head from 'next/head';
import { useEffect } from 'react';

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
    icon: LightbulbIcon,
    title: 'Step 1',
    description: 'Brainstorm with consultant'
  },
  {
    icon: UserIcon,
    title: 'Step 2',
    description: 'Share a brain dump with consultant'
  },
  {
    icon: FileTextIcon,
    title: 'Step 3',
    description: 'Review essay written by consultant; share feedback'
  },
  {
    icon: HandIcon,
    title: 'Step 4',
    description: 'Send back updated draft to consultant for finalization'
  }
];
interface StepProps {
    icon: ElementType;
    title: string;
    description: string;
    className?: string;
  }

const pricingData = [
    { schools: "300 Words", package: "Basic", price: 100 },
    { schools: "500 Words", package: "Advanced", price: 150 },
    { schools: "750 Words", package: "Pro", price: 200 },
    { schools: "1000 Words", package: "Pro", price: 225 },
  ];

function Step({ icon: Icon, title, description }: StepProps) {
  return (
    <div className="flex flex-col items-center text-center border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="mb-4 rounded-full bg-blue-100 p-3">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function Quote() {
  return (
    <div className="bg-gray-50 p-8 max-w-full font-sans">
      <div className="bg-blue-100 p-10 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-500 mb-10 mt-5 text-center">Essay Editing</h2>
          <blockquote className="relative text-xl italic text-gray-600 mb-4 text-center">
            <div className="block-underline relative inline-block">
              <span className="text-blue-500 text-4xl absolute -left-8 top-0">"</span>
              <p className="inline-block font-bold">
                Your life is your story. Write well. Edit often.
              </p>
              <span className="text-blue-500 text-4xl absolute -right-8 top-0">"</span>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  useEffect(() => {
    document.title = "Essay Editing";
  }, []);

  return (
    <>
     <Head>
        <title>Essay Editing</title>
        <meta
          name="description"
          content="Refine your MBA application essays with Crack Admission's professional Essay Editing service. Transform your story into a stellar narrative."
        />
        <meta
          name="keywords"
          content="Essay Editing, MBA application, story refinement, professional editing, Crack Admission"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Essay Editing | Crack Admission" />
        <meta
          property="og:description"
          content="Elevate your MBA essays with expert editing and storytelling refinement. Tailored to make your application stand out."
        />
        <meta property="og:url" content="https://crackadmission.com/services/consulting/essay-editing" />
        <meta property="og:type" content="website" />
      </Head>

      <Quote />
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-blue-500 text-white p-4 text-center">
          <p>Admission consultant will critically review your draft, suggest changes and fine tune it</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2">
            <Image
              src="/images/extra/story.png"
              alt="Notebook with Story Telling concept"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 bg-blue-500 text-white p-6 space-y-4">
            <h2 className="text-2xl font-bold">What's in it?</h2>
            <p>
              You already have a story, but, don't know how to say it. We will mold 
              this untouchable story in a structure that not only inspires the readers 
              but also makes the soul of your experiences stand out. We will be the 
              second set of eyes that will polish, reframe, add pointers, and do 
              whatever is necessary to make your essay stellar.
            </p>
            <Link href="/contact-us">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-blue-500 font-semibold py-2 rounded">
              GET FREE CONSULTATION
            </button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/mbaresources/sample-essays"></Link>
          <button className="bg-blue-500 hover:bg-blue-600 mt-10 mb-10 text-white font-semibold py-2 px-8 rounded">
            SAMPLE ESSAYS
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 px-4">
  <div className="container mx-auto max-w-5xl p-6 border border-gray-300 rounded-lg shadow-sm">
    <h2 className="mb-8 text-center text-3xl text-gray-800 font-bold">How it Works?</h2>
    <div className="grid grid-cols-1 gap-8 text-gray-700 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Step key={index} {...step} className="border border-gray-300 bg-white rounded-lg shadow-sm p-6" />
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
    <RushHour />
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
    </>
  );
}
