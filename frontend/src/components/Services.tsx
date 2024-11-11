"use client"; // Ensures this component is treated as a Client Component

import { FileEdit, Users, FileText, FileSpreadsheet } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Comprehensive Consulting",
    description:
      "Our experts help you highlight your experiences in a way that sets you apart and showcases your strengths, ensuring that you stand out from the competition and carve out a distinct niche for yourself.",
    link: "/services/comprehensive-consulting", // Link to specific service page
  },
  {
    icon: <FileText className="w-12 h-12 text-blue-600" />,
    title: "Mock Interviews",
    description:
      "2 in depth mock interviews by MBA alums will give you a first-hand experience of how to crack the final piece of the puzzle.",
    link: "/services/consulting/mockinterviews", // Link to specific service page
  },
  {
    icon: <FileEdit className="w-12 h-12 text-blue-600" />,
    title: "Essay Editing",
    description:
      "We will transform your experiences into captivating stories showcasing cultural, academic, and professional fit for schools.",
    link: "/services/consulting/essay-editing", // Link to specific service page
  },
  {
    icon: <FileSpreadsheet className="w-12 h-12 text-blue-600" />,
    title: "CV Editing",
    description:
      "Improve MBA resume with expert guidance for strong content, active language, and compelling structure.",
    link: "/services/consulting/resume", // Link to specific service page
  },
];

export default function BestServices() {
  const handleNavigation = (link: string) => {
    window.location.href = link;
  };

  return (
    <section className="py-16 px-4 mt-8 mb-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Our Best Services
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We extend guidance to you across the end-to-end journey of Business School Applications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <button
                  onClick={() => handleNavigation(service.link)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => handleNavigation("/services")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
