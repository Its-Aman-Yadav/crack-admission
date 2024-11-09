'use client'

import Image from 'next/image'
import { Users,Compass, MonitorPlay, FileEdit, FileText, FileCheck, GraduationCap, RefreshCw, PenTool, BarChart2, ClipboardList, Video } from "lucide-react";
import { motion } from 'framer-motion'
import Link from 'next/link';
import RushHour from '@/components/RushHour';

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

const pricingData = [
  { schools: "Flat Price", package: "Pro", price: 150 },
];

const successStories = [
  { name: "Raghav Tandon", field: "Hospitality", image: "/images/success/raghav.png", school: { name: "S P Jain School of Global Management", logo: "/images/success/Schulich.png" } },
  { name: "Prashant Singh", field: "Banking", image: "/images/success/prashant.png", school: { name: "USC Marshall", logo: "/images/success/usc.png" } },
  { name: "Piyush Khullar", field: "Financial Services", image: "/images/success/piyush.png", school: { name: "IE Business School", logo: "/images/success/ie.png" } },
  { name: "Sanyam Sengar", field: "Data Analytics", image: "/images/success/sanyam.png", school: { name: "ISB", logo: "/images/success/isb.png" } },
];

const steps = [
  { icon: Users, title: 'Step 1', description: 'Set up a 45-min session with consultant' },
  { icon: FileText, title: 'Step 2', description: 'Receive interview preparation document from Consultant and prepare accordingly' },
  { icon: Video, title: 'Step 3', description: '1:1 Mock interview on Zoom with consultant' },
  { icon: Users, title: 'Step 4', description: 'Work on the feedback from consultant and take 2nd mock interview' }
];

export default function Component() {
  return (
    <div className="max-w-full mx-auto p-4 space-y-6">
      
      {/* Quote Component */}
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8">Services</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                Asking for help is never a sign of weakness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enlarged Image and Text Section */}
      <div className="grid md:grid-cols-2 items-center">
        <div className="relative h-96 md:h-full">
          <Image src="/images/extra/mock.png" alt="Mock interview in progress" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="bg-blue-500 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">What's in it?</h2>
          <p className="text-lg mb-6">
            Our tailored role plays prepare you for every challenge on the interview panel.
          </p>
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg">GET FREE CONSULTATION</button>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-500 mt-10 mb-10 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">SAMPLE INTERVIEW DEBRIEFS</button>
      </div>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How it Works?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <div className="container mx-auto px-4 py-16">
  <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
    {/* Outer Container with Border */}
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-300">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Plan</h2>
        <p className="text-gray-500">2-3 days for each round of delivery</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
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
                <td className="px-4 py-3 text-sm text-gray-700 border-l border-gray-200">{item.schools}</td>
                <td className="px-4 py-3 text-sm border-l border-gray-200">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.package === "Pro" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                    {item.package}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 border-l border-gray-200">${item.price}</td>
                <td className="px-4 py-3 text-right border-l border-gray-200">
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Choose →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* RushHour Component Container with Border */}
    <div className="border border-gray-300 rounded-lg p-6">
      <RushHour />
    </div>
  </div>
</div>

    

      {/* Services Section */}
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

      {/* Success Stories Section */}
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
    </div>
  )
}
