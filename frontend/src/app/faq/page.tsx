'use client'
import React, { useState } from 'react';

const faqSections = [
  {
    heading: "About CrackAdmission",
    items: [
      { question: "Do you provide consulting services for MBA Applications for ANY Business School in the world?", answer: "Yes. We provide guidance and consulting services for all Business schools globally irrespective of geography, type of program, duration, medium of teaching, ranking, etc." },
      { question: "Do you also provide consulting services for MS Applications?", answer: "We have recently started providing consulting services for MS Applications as well. However, the scope is currently limited to programs such as master’s in finance (MFIN), MS Economics, master’s in international management (MIM), etc." },
      { question: "Is the scope of your services limited to only Full time MBA programs?", answer: "No. We provide guidance and consulting services for all types of MBA Programs including Executive MBA, Part-time MBA, Online MBA, Summer Schools, 2+2 programs, Early Entry Options, STEM MBA, etc." },
      { question: "How is CrackAdmission different from any other MBA consultant service? Why should I pick you?", answer: "We personalize every client’s application with empathy. Our consultants have diverse backgrounds, allowing us to match clients with someone who has relevant pre-MBA experience or desired post-MBA goals." },
      { question: "Where are you based?", answer: "Our HQ is in Gurgaon, India, with a small office in CA, USA, and consultants worldwide. We work remotely, ensuring support across global time zones." },
      { question: "Are you guys contractually affiliated with any Schools?", answer: "No. We are an independent organization with no affiliations to any specific schools, and we receive no monetary incentives from any school." },
      { question: "Do you guarantee admission to any schools?", answer: "We guarantee 100% commitment to helping you draft a compelling application, though the final result depends on factors beyond our control." },
      { question: "How do I refer my friends or family to CrackAdmission?", answer: "We appreciate referrals! Have them email us at contact@crackadmission.com, mentioning your name and the year they worked with us, if possible." }
    ],
  },
  {
    heading: "Consultant Queries",
    items: [
      { question: "What is the profile of the consultant who will be mapped to me?", answer: "All the Consultants who work with CrackAdmission have been thoroughly vetted for their credentials, education, experience, and empathy. All have completed at least an undergrad course, graduated from a top MBA program, and have a minimum of 5 years of professional experience." },
      { question: "Who are some of the top Consultants working with you?", answer: "Refer to the 'Our Team' page of the website for details." },
      { question: "How long does a typical consulting engagement last?", answer: "Duration depends on the number of schools signed up for. Typically, the first school engagement lasts at least 14 days, and subsequent schools take at least 7 days each. For expedited service, we can optimize the engagement to 72 hours." },
      { question: "If I take a multi-school package with you, will the same consultant work with me for all the schools?", answer: "We aim to ensure consistency, so the same consultant typically works with you throughout the admission season, regardless of the number of schools." },
      { question: "Will I get to meet in person the consultant I will be working with?", answer: "The consultant will be available for online meetings via platforms such as Zoom, phone calls, WhatsApp, and email. Physical meetings are rare as consultants and applicants are often in different geographies." }
    ],
  },
  {
    heading: "Can We Trust Us with Your Money?",
    items: [
      { 
        question: "How do I make payments?", 
        answer: <div><p>We offer several options: NEFT, Payment Link, or PayPal. For NEFT: Account Name: CrackAdmission Technologies Pvt Ltd, Account Number: 031405006714, IFSC Code: ICIC0000314, Bank Name: ICICI.</p></div> 
      },
      { 
        question: "What are the payment plans?", 
        answer: <div><p>To begin service, you pay 50% of the fee, and the remaining 50% after receiving all deliverables.</p></div> 
      },
      { question: "Do I get a refund in case I do not get admission to the desired program after working with you?", answer: "We do not guarantee admission but are committed to providing the best service possible. Refunds are not available as admission results depend on various factors beyond our control." }
    ],
  },
  {
    heading: "Application Queries",
    items: [
      { question: "I have a low GMAT. Can you help me get into my desired MBA program?", answer: "Yes, we can. An MBA application includes more than just GMAT scores, and our consultants can help strengthen other areas to offset a lower GMAT score." },
      { question: "Do you also help with GMAT/GRE prep?", answer: "Currently, our services do not include GMAT/GRE prep, though our team can provide informal guidance based on their own experiences." },
      { question: "Will you help me build my extra-curricular profile if I don’t have any extracurricular experience so far?", answer: "Building a well-rounded extracurricular profile takes years. If you reach out too close to your admission deadline, we won’t be able to help build new activities, but we can translate your existing ones into meaningful application stories." },
      { question: "Is NGO experience or social contribution necessary for enhancing my application?", answer: "Social contribution is valued as it demonstrates purpose and empathy. However, it should be genuine. Forced or superficial NGO experiences may not enhance your application positively." },
      { question: "I want to get into ISB. Can you help?", answer: "Yes, absolutely. We have helped over 70 applicants get into ISB programs (PGP, PGPPro, PGPMax, YLP, MFAB, EEO). Our founders are ISB alumni, giving us unique insights into aligning your story with ISB’s values." },
      { question: "Stacy Blackman hasn’t signed me up for the schools I want to target. Will you provide services to me?", answer: "Of course. We work with applicants of all profiles. At the start of our engagement, we will finalize the list of schools to work on with you." }
    ],
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
          <div className="container mx-auto px-4 py-16">
       <div className="bg-blue-50 py-12 mb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8">FAQs</h1>
            <div className="relative">
              <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
              <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
              <div className="border-t border-b border-blue-300 py-4">
                <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                The only stupid question is the one that goes unasked
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

      {faqSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">{section.heading}</h2>
          <ul className="space-y-4">
            {section.items.map((item, index) => (
              <li key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
                  className="w-full text-left p-4 font-semibold text-gray-800 flex justify-between items-center"
                >
                  <span>{item.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === `${sectionIndex}-${index}` ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    activeIndex === `${sectionIndex}-${index}` ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 text-gray-600">{item.answer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
