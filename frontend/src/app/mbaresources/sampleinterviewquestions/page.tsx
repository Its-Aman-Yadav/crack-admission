'use client';
import {
  Briefcase,
  Building2,
  GraduationCap,
} from "lucide-react";

export default function Component() {
  const questions = [
    {
        icon: <GraduationCap className="w-5 h-5" />,
        category: "MANAGEMENT CONSULTING",
        items: [
          "Which is your favorite product and why?",
          "State one thing you would want to change in your favorite product.",
          "What would your teammates say about you?",
          "What do you think are your application’s greatest strengths? Weaknesses?",
          "Ethics and Artificial Intelligence need go hand in hand. Can you please let us know your take on this statement?",
          "Tell us about a time you worked in a diverse environment.",
          "Tell us more about your role as Visiting Student researcher at Stanford. What did you learn from that experience?",
          "You mentioned that you were the Winner of Adobe India Hackathon, Out of Box Innovation category in 2020. Tell us more about the innovation, what was your role, and how would you translate that innovation into a commercialized solution.",
          "Have you talked with any UCLA alums? What did you learn from those interactions that you were not aware of previously?",
          "It seems you have a strong technical expertise and passion for AI. Why don’t you do a Masters in Data Science / AI instead of an MBA.",
          "Developed an idea to automate capturing of ECG data of unborn children using a portable mobile phone. Piloted in 2 hospitals. Have you commercialized this technology yet?",
          "How did you manage to enroll 100+ students to the debating club within a quarter? What was your pitch to these students?",
        ],
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        category: "PRODUCT MANAGEMENT",
        items: [
          "If you continue at Adobe, how will your career progression look like?",
          "To become a good AI developer, I believe you need to have strong fundamentals of Statistics and Mathematics. However, it doesn’t seem you have taken up stats courses in undergrad. How have you bridged that knowledge gap?",
          "What other schools have you applied to and if you get an admit from all of them, where will you end up studying?",
          "Describe your role at Empower. What motivated you to take up that role?",
          "What are the short and long-term impacts of COVID on the IT industry in India and globally?",
          "What according to you were the major differences in working for a service-based company vs a product-based company?",
          "Modulate your voice and do not sound monotonous.",
          "Use the STAR method to answer situation-based questions.",
          "Name one consumer or enterprise product you love and explain why.",
        ],
      },
        {
          icon: <Briefcase className="w-5 h-5" />,
          category: "ENTREPRENEUR",
          items: [
            "Name one consumer or enterprise which you think doesn’t add any value and mention how you can improve it.",
            "Name one consumer or enterprise which you think doesn’t add any value and mention how you can improve it.",
            "Which other MBA programs have you applied to and why. If given an option between all those schools, which one will you join and why.",
            "Explain your approach of handling customer escalations.",
            "99% vs 99.9% vs 99.99% vs 99.999% SLA – explain the differences between these. Based on your experience, which solutions require higher SLAs and why.",
            "What is your take on RPA? Do you think in a country like India RPA will do more harm than good by making millions of Indians unemployed?",
            "Which industries do you think will adopt in short term and which ones do you think will apply RPA in longer term?",
            "What is your interpretation of GDPR laws? Explain with examples from your work.",
            "Do you think no-code / low-code will become successful? Explain why or why not.",
            "Imagine a situation when you know for sure that what the client is proposing is not appropriate / correct. How will react to this as the client POC.",
          ],
        },
        {
            icon: <Briefcase className="w-5 h-5" />,
            category: "OPERATIONS",
            items: [
              "How has your leadership style evolved across your career? Explain with examples.",
              "What is the difference in the roles of a Project, Product and Program Manager? Explain with an example.",
              "Tell us a little more about your journey of medical condition and the influence it has on your life.",
              "Are you still associated with MAD foundation? If not, why?",
              "Which is your favorite tech product? Tell us 2 things you want to improve in that product.",
            ],
          },
          {
            icon: <Briefcase className="w-5 h-5" />,
            category: "GENERAL MANAGEMENT",
            items: [
              "How will you prioritize between different features and functionalities that can be built in a product?",
              "Did you consider pursuing a full-time MBA? Why or why not?",
              "What are the transferrable skillsets that you leveraged from each of your previous employers in your new role?",
              "Have you discussed with your managers at ServiceNow your aspirations to become a PM? What has been their reaction?",
              "If you had to develop a product educating people about Cervical Kyphosis, how do you approach it?",
            ],
          },
          {
            icon: <Briefcase className="w-5 h-5" />,
            category: "INVESTMENT BANKING",
            items: [
              "You have mentioned as part of your ServiceNow experience that you have 'Contributed ideas for product enhancement that were incorporated into product roadmap'. Can you share some of these ideas with us and how did you come up with them?",
              "Explain the working of the 'Strategy Realization Office' in your company?",
              "What are some of things you feel you have to unlearn / let go off from your current arsenal to become a high impact product manager?",
              "What are you 3 primary learning objectives from the ISB PGP Pro course?",
              "What are some of the challenges you faced during your work at GAP and how did you overcome them?",
              "How do you explain Reiki to someone who heard the term for the first time?",
              "There has been a lot of attrition in the IT industry lately? If you are entrusted with building an employee retention tool, how will you do?",
              "Explain the Business Model of Service Now?",
              "Scale vs Profitability. Which one will you prioritize in a business’s lifecycle and why?",
            ],
          },
  ];

  return (
    <>  
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">Sample Interview Questions</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
              You were born to stand out, stop trying to fit in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 border border-gray-200 rounded-lg shadow-md">
        <div className="space-y-6">
          {questions.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center text-blue-600 gap-2">
                {section.icon}
                <h3 className="font-semibold text-gray-800">{section.category}</h3>
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <ul className="space-y-4 list-disc list-inside pl-5 leading-loose">
                  {section.items.map((item, qIndex) => (
                    <li key={qIndex} className="text-gray-700 font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
