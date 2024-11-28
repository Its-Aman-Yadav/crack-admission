'use client';

interface Testimonial {
  id: number;
  Service: string;
  School: string;
  Review: string;
  Course: string;
  GMAT: string;
}

export default function TestimonialSection() {
  // Hardcoded testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      Service: 'All in One',
      School: 'INSEAD',
      Review:
        'I would like to commend Arijit on being an excellent consultant. I had approached Arijit for help in essay writing for my INSEAD eMBA application and he turned out to be attentive, accommodating (when I had to change appointment times last minute), and resourceful (giving me useful prep tips). With his high EQ and impeccable questioning and listening skills, I always felt comfortable with Arijit during fact-finding sessions with him. He has excellent writing skills and produced quality essays which needed minimal amendments. Arijit saved me much time during my busy schedule. I ended up engaging Arijit for 10 essays and was successfully enrolled into the INSEAD eMBA programme.',
      Course: 'GEMBA',
      GMAT:
        'GMAT Score: INSEAD Adaptive Test | Experience: 10 years | Country: Singapore | Industry: Healthcare & Aviation | Post MBA:',
    },
    {
      id: 2,
      Service: 'Essay Writing',
      School: 'INSEAD',
      Review:
        'Excellent story writing skills, supreme professionalism and highest quality.',
      Course: 'GEMBA',
      GMAT:
        'GMAT Score: INSEAD Adaptive Test | Experience: 11 years | Country: India | Industry: IT Support | Post MBA: Global Sales Strategy',
    },
    {
      id: 3,
      Service: 'All in One',
      School: 'Georgetown, Olin, Fisher',
      Review:
        'I would like to commend Arijit on being an excellent consultant. I had approached Arijit for help in essay writing for my eMBA application and he turned out to be attentive, accommodating, and resourceful. With his high EQ and impeccable questioning and listening skills, I always felt comfortable with Arijit. He saved me much time during my busy schedule and helped me succeed.',
      Course: 'Full Time MBA',
      GMAT:
        'GMAT Score: 630 | Experience: 4 years | Country: Canada | Industry: Manufacturing | Post MBA: Corporate Strategy',
    },
    {
      id: 4,
      Service: 'Scholarships',
      School: 'UC Berkeley',
      Review:
        'Thanks to the team, I got into my dream college with a $45,000 scholarship. I will invest this money to fund my startup.',
      Course: 'EMBA',
      GMAT:
        'GMAT Score: 680 | Experience: 8 years | Country: UK | Industry: IT Consulting | Post MBA: Logistics Startup',
    },
    {
      id: 5,
      Service: 'All in One',
      School: 'Melbourne Business School',
      Review:
        'I was especially impressed with the way the consultant was able to relate with my shipping experience, devise a strategy as to how I can portray the MBA will further help me grow in my industry. Another big help was that the consultant was able to draft my essays with only a brief input from my side and minimal time commitment from my end, extremely important for a busy professional like me.',
      Course: 'EMBA',
      GMAT:
        'GMAT Score: No GMAT | Experience: 7 years | Country: Australia | Industry: Shipping | Post MBA: Shipping',
    },
    {
      id: 6,
      Service: 'Essay Writing',
      School: 'ISB',
      Review:
        'On my request, an ISB alum was assigned to me as a consultant. The insights he gave me about the school and the way he handled the articulation of my story was phenomenal. The alum even gave me a free referral – I will recommend their services strongly.',
      Course: 'PGP MAX',
      GMAT:
        'GMAT Score: No GMAT | Experience: 14 years | Country: India | Industry: Merchant Navy | Post MBA: Logistics/Supply Chain',
    },
      {
        id: 7,
        Service: 'All in One',
        School: 'SAID',
        Review:
          'By the time I approached CrackAdmission, I had already spoken with 8 admission consultants across the globe. However, just by the sheer nature of questions the consultant asked me during my 45 min session, I knew they had the best services. Sitting in the Oxford library and writing this note, I can’t express my gratitude towards their dedicated team.',
        Course: 'PART TIME MBA',
        GMAT:
          'GMAT Score: 690 | Experience: 6 years | Country: Korea | Industry: Venture Capitalist | Post MBA: Start an Incubator',
      },
      {
        id: 8,
        Service: 'Essay Editing',
        School: 'UCLA Anderson',
        Review:
          'After the multiple brainstorming sessions, I approached my applications with a more well-defined sense of my career goals and was able to better explain why this MBA appealed to me personally, as well as why they tied into my overall “story.” This concrete sense of direction was incredibly helpful, both in creating well-crafted applications and giving me much needed clarity.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 710 | Experience: 4 years | Country: Pakistan | Industry: Oil and Gas | Post MBA: Strategy Consulting',
      },
      {
        id: 9,
        Service: 'Essay Writing',
        School: 'Georgetown',
        Review:
          'Though I was confident about my GMAT score, I wasn’t able to showcase the industry transition precisely. But, CrackAdmission’s Essay Champion gave me a simple formula to work with: “x = y/z” (x = Goals, y = Current Skillsets, z = Bridge) – everything seemed to make sense when I started applying this at every step.',
        Course: 'EMBA',
        GMAT:
          'GMAT Score: 660 | Experience: 8 years | Country: UK | Industry: Hospitality | Post MBA: Travel and Tourism',
      },
      {
        id: 10,
        Service: 'All in One',
        School: 'Kelly, ISB, Tepper',
        Review:
          'I am an Indian male IT professional with just an average GMAT score and I have still made it to the top B school in India and one of the top B schools in US. I owe you CA team.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 700 | Experience: 3 years | Country: India | Industry: IT Services | Post MBA: IT Consulting',
      },
      {
        id: 11,
        Service: 'Essay Editing',
        School: 'IE',
        Review:
          'Their client to consultant mapping algorithm is excellent. My application reviewer happened to be from the same organization I had worked for and an alum of the same business school I wanted to get admitted to – it was as if she was writing her own applications but this time wearing my shoes.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 670 | Experience: 4.5 years | Country: Spain | Industry: Investment Banking (Backend) | Post MBA: Hedge Fund Manager',
      },
      {
        id: 12,
        Service: 'Essay Writing',
        School: 'Chicago Business School',
        Review:
          'When I started my Summer School applications, I knew I had to do it on my own. However, when the process started, the CrackAdmission team came to my rescue. My consultant was an expert in essay writing for Summer School applications, creatively editing and reshaping my story to fit my aspiration to the school. I finally got admission to Chicago Booth and Stanford. I am certain that I will take help of the CrackAdmission team again when I will apply for a full time MBA program.',
        Course: 'SUMMER SCHOOL',
        GMAT:
          'GMAT Score: GRE | Experience: 1.5 years | Country: India | Industry: Manufacturing | Post MBA: Project Management',
      },
      {
        id: 13,
        Service: 'Resume',
        School: 'George Washington',
        Review:
          'I had a 50-page resume when I approached the services of CrackAdmission. I never knew what to remove or how to organize my bullets. Thanks to CrackAdmission’s expert editor who structured it so well for me that I could now boast of a two-page document. The use of STAR (Situation, Task, Action, Result) tactics invoked by my admission consultant helped me clearly articulate my resume and make it crisp and impactful.',
        Course: 'ONLINE MBA',
        GMAT:
          'GMAT Score: No GMAT | Experience: 9 years | Country: US | Industry: Healthcare | Post MBA: Healthcare',
      },
      {
        id: 14,
        Service: 'Recommendations',
        School: 'ISB',
        Review:
          'Having worked with multiple project managers during my professional career, I was finding it difficult to choose the right recommender. However, with CA, they made it so obvious. With their help and the most common dos and don’ts explained to me, I was able to extract the most meaningful letters that helped me in sealing the deal.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 700 | Experience: 3.4 years | Country: India | Industry: Analytical Consulting | Post MBA: Product Management',
      },
      {
        id: 15,
        Service: 'All in One',
        School: 'LBS, SAID, HEC',
        Review:
          'I’m writing this review in the midst of utter gratitude. Back when I decided to start my application journey, I was told by an admissions consultant abroad that making me stand out was “next to impossible.” I was in tears. But then, CA turned things around for me. They not only made me confident but also converted my emotional distress into my most powerful story. The constant support and wisdom provided to me helped me convert 3 top schools with 50% to 100% scholarships. I would recommend them to anyone who is stuck and doesn’t know how to start or what to write. They have changed my life completely. Can’t thank you enough. Look forward to staying in touch.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 690 | Experience: 5 years | Country: Senegal | Industry: Strategy Consulting | Post MBA: Investment Banking',
      },
      {
        id: 16,
        Service: 'Interview',
        School: 'ISB, Johnson (Cornell)',
        Review:
          'Hearing from my father’s business on the shop floor was a huge revelation to me during my interview prep. CrackAdmission’s mock interview helped me frame my answers properly. They also helped me with tone modulation and mannerisms that made my interviewer applaud me for my speech and clarity of thoughts. I can still hear the last words from my interviewer – “You’re flying colors in Skype tomorrow.”',
        Course: 'MASTERS IN FAMILY BUSINESS',
        GMAT:
          'GMAT Score: No GMAT | Experience: 8 years | Country: India | Industry: Entrepreneurial | Post MBA: Family Business',
      },
      {
        id: 17,
        Service: 'Essay Writing',
        School: 'Columbia University',
        Review:
          'We need to showcase your passion about “What you want to do” and “Why you want to do it.” It is one of the best essay writing services I’ve come across. Their insights, commitment, and flair to make things easy for me was, wow. I was able to create a story of seamless transitions across my academic years. It was the case-to-point anecdote that had all I had ever wanted in my life.',
        Course: 'SPORTS MANAGEMENT',
        GMAT:
          'GMAT Score: GRE | Experience: 4.5 years | Country: Spain | Industry: Accounting | Post MBA: Sports Consulting',
      },
      {
        id: 18,
        Service: 'Essay Writing',
        School: 'NYU Stern',
        Review:
          'CrackAdmission matched me with one of the most phenomenal essay editors who not only understood the nuances of essay writing but also gave me tips on resume optimization for the short-term goals and the transition post my masters. It was for this reason that the course director recommended me for the program.',
        Course: 'MASTERS IN BUSINESS ANALYTICS',
        GMAT:
          'GMAT Score: No GMAT | Experience: 1.3 years | Country: India | Industry: IT/Backend | Post MBA: Analytics Consulting',
      },
      {
        id: 19,
        Service: 'Reapplication',
        School: 'Duke Fuqua',
        Review:
          'I had spent ~$3300 last year with an admission consulting firm last year on applications to 5 schools and unfortunately didn’t receive a single admit. So, that’s a case of what does not work. What worked was the CrackAdmission team that I will pay 50% upfront and rest when my final decision comes out. Not only did they made me modify my goals, showcase my story in a new way, and strengthen my weaknesses, but also highlighted my passions. Their process was brilliant. I not only paid them a small amount but am also a proud alum of Duke now.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 700 | Experience: 4.8 years | Country: US | Industry: E-Commerce | Post MBA: Corporate Strategy',
      },
      {
        id: 20,
        Service: 'Interview',
        School: 'HBS',
        Review:
          'Before I took the services of CrackAdmission, I was concerned as to how I’ll be able to communicate and explain my goals to the school. However, what stood out was their ability to listen with intent. The team was very accommodating and was open to all mediums to converse – Skype, WhatsApp, Email, etc. A team who even took the pain to translate certain English words into Mandarin before making my review. Not only was this way more affordable than the consultants back home, but also very professional and empathizing.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 690 | Experience: 4.5 years | Country: China | Industry: Education | Post MBA: Edutech Startup',
      },
      {
        id: 21,
        Service: 'Scholarships',
        School: 'Columbia Business School',
        Review:
          'While I was considering Prodigy Financing options for my MBA, I reached out to CrackAdmission to determine if there are any chances of getting a scholarship. I was astonished by the in-depth knowledge they had regarding diversity candidate scholarships and the way they drafted a passionate and telling essay was immaculate. End result – I got a $20,000 waiver.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 670 | Experience: 5 years | Country: Nigeria | Industry: Financial Services | Post MBA: Mergers and Acquisitions',
      },
      {
        id: 22,
        Service: 'Interview',
        School: 'Darden',
        Review:
          'Appreciate the thorough mock interviews. It made me much more confident while responding to questions thrown by the Darden adcom team.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 700 | Experience: 5.2 years | Country: India | Industry: Analytics Consulting | Post MBA: Product Management',
      },
      {
        id: 23,
        Service: 'All in One',
        School: 'INSEAD',
        Review:
          'I believed I had an above-average work experience and academics. But was concerned with my GMAT score, which was on the lower side. My mentor (that’s what I now call him) devised a strategy to portray my strengths, weaknesses, and make a compelling application. It was with his guidance that I could excel in my essays which not only highlighted my leadership and interview call, but also somehow narrow down to a school which is in the top 3. When I sent a thank-you email after my interview, I owe my seat at Fontainebleau to him.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 640 | Experience: 6.8 years | Country: Spain | Industry: Entrepreneurship | Post MBA: Retail Fashion Startup',
      },
      {
        id: 24,
        Service: 'Resume',
        School: 'Kellog',
        Review:
          'This is to express my absolute satisfaction in the service you provided on my resume. I was confident heading into my final rounds, an truly convinced a great deal of that success from having a story to articulate and your total transformation of my dull and boring resume. Kudos to you and your team!',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 680 | Experience: 4.8 years | Country: India | Industry: FMCG | Post MBA: Corporate Strategy',
      },
      {
        id: 25,
        Service: 'Essay Editing',
        School: 'Kelly',
        Review:
          'The best part of the service was that my consultant kept following up with me regularly to make sure I was making changes as per his feedback. There were times when I had to reschedule or cancel, but my consultant never gave up on me and pushed me to strive further.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 670 | Experience: 6.2 years | Country: India | Industry: IT Application | Post MBA: Strategy Consulting',
      },
      {
        id: 26,
        Service: 'Profile Evaluation',
        School: 'Kellog',
        Review:
          'Thank you very much for your honesty. I really appreciate it and I am very thankful for it. From this moment on, no other consulting company will be taken into consideration. I am fully convinced that you guys will help me crack the admissions process.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 730 | Experience: 5 years | Country: US | Industry: Research | Post MBA: Entrepreneurship',
      },
      {
        id: 27,
        Service: 'Profile Evaluation',
        School: 'Profile Evaluation',
        Review:
          'Without an iota of hesitation I will take your service, talking with you it seems that you have known me all along. I tried the "Free Consultancy" with some others and no one gave me such detailed analysis.',
        Course: 'PART TIME MBA',
        GMAT:
          'GMAT Score: 650 | Experience: 7 years | Country: US | Industry: Pharmaceuticals | Post MBA: FMCG',
      },
      {
        id: 28,
        Service: 'All in One',
        School: 'ISB',
        Review:
          'I have got into ISB EoS (100% scholarship) and decided to join ISB (CoB). Articulating my startup experience and goals in a way that I personally felt confident was the best part of Arijit’s service. Being an ISB alum himself, he connected me with people in his network who have been pursuing a career path that I envision for myself.',
        Course: 'FULL TIME MBA',
        GMAT:
          'GMAT Score: 680 | Experience: 7 years | Country: India | Industry: Logistics | Post MBA: Entrepreneurship',
      },
    ];
  
  

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center"
            >
              <h3 className="text-lg font-bold text-blue-500 mb-2 uppercase tracking-wide">
                {testimonial.Service}
              </h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">{testimonial.School}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">{testimonial.Review}</p>
              <span className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-4 shadow-sm">
                {testimonial.Course}
              </span>
              <p className="text-sm text-gray-500">{testimonial.GMAT}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
