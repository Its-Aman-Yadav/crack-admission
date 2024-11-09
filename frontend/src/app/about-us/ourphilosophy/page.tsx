import Image from 'next/image';

interface SuccessStory {
    name: string;
    field: string;
    image: string;
    school: {
      name: string;
      logo: string;
    };
  }

const successStories: SuccessStory[] = [
    {
      name: "Akhil Golla",
      field: "Operations",
      image: "/images/philosophy/Akhil.png",
      school: {
        name: "IS",
        logo: "/images/philosophy/IS.png"
      }
    },
    {
      name: "Revant Miglani",
      field: "Real Estate",
      image: "/images/philosophy/Revant.png",
      school: {
        name: "ISB",
        logo: "/images/success/ISB.png"
      }
    },
    {
      name: "Chitransh Jain",
      field: "Banking",
      image: "/images/philosophy/Jain.png",
      school: {
        name: "ISB",
        logo: "/images/success/ISB.png"
      }
    },
    {
      name: "Rahul Sayal",
      field: "Operations",
      image: "/images/philosophy/Rahul.png",
      school: {
        name: "Ross",
        logo: "/images/philosophy/IIM.png"
      }
    }
  ];

export default function OurPhilosophy() {
  return (
    <div className="bg-gray-100 min-h-screen"> {/* Added padding-top to make room for the navbar */}
      <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-blue-100 w-full py-12 mb-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">OUR PHILOSOPHY</h1>
        <div className="relative">
          <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
          <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
          <div className="border-t border-b border-blue-300 py-4">
            <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
              Your brand is what other people say about you when you're not in the room
            </p>
          </div>
        </div>
      </div>
    </div>

        {/* First grid of cards */}
        <div className="grid md:grid-cols-2 gap-0 mb-8">
          <div className="bg-blue-500 text-white flex items-center justify-center">
            <Image
              src="/images/philosophy/brand.png"
              alt="Wooden blocks spelling BRAND"
              width={900}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
          <div className="bg-blue-500 text-white p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Brand Building</h2>
            <p>
              We believe that building a strong personal brand is a key factor in setting yourself apart from other MBA applicants. It showcases your unique qualities, values, and abilities, and gives the admissions committee a clear picture of who you are and what you can bring to the program. Thus, we work closely with you to articulate your experiences in a compelling way that demonstrates your fit for the program and the value you will bring to the class.
            </p>
          </div>
        </div>

        {/* Second grid of cards */}
        <div className="grid md:grid-cols-2 gap-0 mb-10">
          <div className="bg-blue-500 text-white p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Obsession with Success Percentage</h2>
            <p>
              The number of successful admission offers is our North Star metric, which drives the efforts of all our consultants and language experts. We believe that the success of our clients is our success, and we are committed to providing the guidance and support necessary to help each applicant achieve their goal of being admitted to their dream business school.
            </p>
          </div>
          <div className="bg-blue-500 text-white flex items-center justify-center">
            <Image
              src="/images/philosophy/man.png"
              alt="Excited man emerging from papers"
              width={800}
              height={300}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 mb-8">
          <div className="bg-blue-500 text-white flex items-center justify-center">
            <Image
              src="/images/philosophy/trust.png"
              alt="Wooden blocks spelling BRAND"
              width={800}
              height={300}
              className="max-w-full h-auto"
            />
          </div>
          <div className="bg-blue-500 text-white p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Honesty & Respect</h2>
            <p>
            We see ourselves as devil's advocates and always strive for brutally honest and direct feedback, which we hope will help the applicant grow and develop. At the same point in time, we respect the applicant's opinions, experiences, and aspirations and aim to create a safe and supportive environment.
            </p>
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
                    <h3 className="text-xl font-semibold text-black text-center mb-2">{story.name}</h3>
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
