import { Compass, Users, MonitorPlay, FileEdit, FileText, FileCheck, GraduationCap, RefreshCw, PenTool, BarChart2, ClipboardList, ChevronDown, Check } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

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
      name: "Odufa Abalu",
      field: "Banking",
      image: "/images/success/Oli.png", // Replace with actual image path
      school: {
        name: "Johns Hopkins",
        logo: "/images/success/jhonson.png", // Replace with actual logo path
      },
    },
    {
      name: "Shouvick Ray",
      field: "Insurance",
      image: "/images/success/Ray.png", // Replace with actual image path
      school: {
        name: "IISc",
        logo: "/images/success/iimc.png", // Replace with actual logo path
      },
    },
    {
      name: "Saketh Repaka",
      field: "Management Consulting",
      image: "/images/success/Saketh.png", // Replace with actual image path
      school: {
        name: "PGPPro",
        logo: "/images/success/pgp.png", // Replace with actual logo path
      },
    },
    {
      name: "Rahul Syal",
      field: "Operations",
      image: "/images/philosophy/Rahul.png", // Replace with actual image path
      school: {
        name: "IIM",
        logo: "/images/philosophy/iim.png", // Replace with actual logo path
      },
    },
  ];
  

const programs = [
  { title: "Full time MBA", description: "If you are seeking a general management degree relatively early in your professional life to get a holistic business picture." },
  { title: "Part time MBA", description: "If you want to hold onto your job while gaining MBA degree, but don't have a lot of leadership experience at work." },
  { title: "Executive MBA", description: "If you have significant management and leadership experience and want to hold onto a full time job while earning a management degree." },
  { title: "Masters in Family Business", description: "If you have an established family business and you want to gain management exposure to take the business to the next level." },
  { title: "Summer Schools", description: "If you are in the final year of your undergrad or have just started working and want to get a bird's eye view of business principles in less than a month." },
  { title: "Online MBA", description: "Suitable for independent learners who prefer self-directed study in which they set the pace for course completion." },
  { title: "Specialist MBA", description: "If you want to become a domain expert in a particular industry / vertical." },
  { title: "Deferred MBA", description: "Suitable for independent learners who prefer self-directed study in which they set the pace for course completion." }
];

const pricingTiers = [
  {
    name: "Basic",
    price: 350,
    subtitle: "Light touch option",
    features: ["Client Questionnaire", "Discovery/Strategy Session", "Application Action Plan", "Essay Development"],
    popular: false,
  },
  {
    name: "Pro",
    price: 650,
    subtitle: "Most popular choice",
    features: [
      "Client Questionnaire", "Discovery/Strategy Session", "Application Action Plan", "Essay Development",
      "2nd Mentor Review", "Resume Support", "LOR Support", "Interview Prep", "Additional Support"
    ],
    popular: true,
  },
  {
    name: "Advanced",
    price: 450,
    subtitle: "Advanced support",
    features: ["Client Questionnaire", "Discovery/Strategy Session", "Application Action Plan", "Essay Development", "Resume Support"],
    popular: false,
  }
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


function PhilosophyHeader() {
  return (
    <div className="bg-blue-50 py-12 mb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-8">Services</h1>
        <div className="relative">
          <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
          <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
          <div className="border-t border-b border-blue-300 py-4">
            <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">Asking for help is never a sign of weakness</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8"> {/* Space added for the navbar */}
      <PhilosophyHeader />

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

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-8 mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">All in one package</h2>
        <p className="text-center text-gray-600 mb-20">
          Get focused attention on all aspects of your application including essays, resume, LORs, scholarships, and interview prep
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`flex flex-col border border-gray-200 rounded-lg p-6 shadow-md ${tier.popular ? 'md:scale-110 shadow-lg z-10 border-blue-500 border-2' : ''}`}>
              <div className="relative">
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 transform translate-x-2 -translate-y-2">
                    Recommended
                  </div>
                )}
                <h3 className="text-xl text-gray-800 font-bold">{tier.name}</h3>
                <p className="text-sm text-gray-600">{tier.subtitle}</p>
                <div className="text-4xl font-bold mt-2">
                  <span className="text-2xl text-gray-800 align-top">$</span><span className="text-gray-800">{tier.price} </span><span className="text-base font-normal text-gray-600">/College</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">1$ = 84 INR</div>
              </div>
              <button className={`w-full py-2 px-4 font-semibold rounded ${tier.popular ? "bg-blue-500 text-white" : "border border-gray-300 text-gray-700"}`}>
                Book Now
              </button>
              <div className="flex-grow mt-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-20 mb-20">
          Disclaimer: Rates are indicative and subject to change based on current currency conversion rates and market fluctuations.
        </p>

           {/* Programs Section */}
           <div className="bg-blue-100 p-5 w-full">
      <h2 className="text-2xl font-bold text-gray-800 text-center mt-10 mb-2">Specialized Services for Specific Programs</h2>
<p className="text-center text-gray-600 mb-8">We help you get into the program of your choice</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4"> {/* Reduced horizontal gap */}
  {programs.map((program, index) => (
    <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto transition-transform transform hover:scale-105 hover:shadow-xl"> {/* Modern card with hover effect */}
      <div className="flex flex-row items-center justify-between border-b pb-2">
        <h3 className="text-blue-600 text-lg font-semibold">{program.title}</h3>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
      <p className="text-sm text-gray-600 mt-4">{program.description}</p> {/* Added space for a cleaner look */}
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


      </div>
    </div>
  );
}
