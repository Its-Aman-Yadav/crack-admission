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
      category: "SAMPLE QUESTIONS",
      items: [
        "Why MBA? Why now? What are your specific short- and long-term goals?",
        "Name a business leader you admire and why?",
        "Why the specific school?",
        "What do you like to do on projects, either professionally or personally?",
        "What are your strengths and weaknesses?",
        "Where and how have you handled difficult team situations?",
        "What is your leadership style? Explain with an example.",
        "How has your leadership style evolved over years?",
        "State a responsibility you handled that was completely different from what you were used to. What did you learn from that?",
        "What is unique about you?",
        "What did you learn from working in a team with many diverse individuals?",
        "Give examples of how you have demonstrated leadership inside and outside the work environment.",
        "Describe an ethical dilemma faced at work? How did you overcome it?",
        "How have you handled conflict in group environments? Explain the context and what was your role.",
        "If I were to ask your colleagues to describe you, what would they say?",
        "Walk us through your resume.",
        "What motivates you in life and why?",
        "How will you contribute to the specific school’s community – as a student and as an alum?",
        "What are your alternate career goals?",
        "What are the major challenges and opportunities in the industry you are working in currently?",
        "How will you introduce yourself to your future classmates?",
        "What is one thing people might form a misconception about you?",
        "If you were to give advice to your 18-year-old self, what would it be?",
        "Tell us about a time when you had to make a quick decision.",
        "When was the last time that you stepped out of your comfort zone?",
      ],
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      category: "TIPS TO ACE INTERVIEW",
      items: [
        "Do your homework.",
        "Speak with confidence.",
        "Do not take long pauses.",
        "Bear in mind the time limit and pace your responses accordingly.",
        "Make sure that your face is clearly visible in the video while having the right lighting.",
        "Answer to the point and do not digress from the topic asked.",
        "Modulate your voice and do not sound monotonous.",
        "Use the STAR method to answer situation-based questions.",
        "Do not keep looking downwards and referring to a cheat sheet.",
      ],
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      category: "WHICH SCHOOLS REQUIRE KIRA INTERVIEW",
      items: [
        "INSEAD",
        "London Business School",
        "Yale School of Management at Yale University",
        "UC Berkeley Haas School of Business",
        "University of Oxford, Said Business School",
        "University of Toronto, Rotman School of Management",
        "Western University, Ivey School of Business",
        "University of Washington, Foster School of Business",
        "Johns Hopkins University, Carey School of Business",
        "Imperial College London",
        "Washington University, Olin Business School",
        "University of Waterloo, School of Engineering",
        "Queen's University, Smith School of Business",
        "University of South Wales",
        "Boston University, Questrom School of Business",
        "Ohio State University, Fisher College of Business",
      ],
    },
  ];

  return (
    <>  
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">KIRA Interview Guide</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                Trust yourself. You know more than you think you do.
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
