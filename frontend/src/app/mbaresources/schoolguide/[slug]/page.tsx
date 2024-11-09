import { notFound } from 'next/navigation';
import { Globe2, Navigation, BookOpen, Calendar } from "lucide-react";
import Image from "next/image";

// Define TypeScript type for school details
interface School {
    name: string;
    description: string;
    logo: string;
    country: string;
    continent: string;
    programType: string;
    essays: { title: string; description: string; wordLimit: string }[];
    deadlines: { round: string; date: string }[];
}

const schoolData: Record<string, School> = {
    "insead": {
        name: "INSEAD",
        description: "INSEAD Business School in France and Singapore.",
        logo: "/images/school/1_2_INSEAD.png",
        country: "France/Singapore",
        continent: "Europe/Asia",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "Give a candid description of yourself.", wordLimit: "500 words max" },
            { title: "Essay 2", description: "Describe your career vision.", wordLimit: "400 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "6th September 2023" },
            { round: "Round 2", date: "1st January 2024" },
        ]
    },
    "london-business-school": {
        name: "London Business School",
        description: "Top business school in the UK.",
        logo: "/images/school/LBS.png",
        country: "United Kingdom",
        continent: "Europe",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "What are your post-MBA goals?", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "4th October 2023" },
            { round: "Round 2", date: "10th January 2024" },
            { round: "Round 3", date: "27th April 2024" },
        ]
    },
    "university-of-chicago-booth": {
        name: "The University of Chicago Booth School of Business",
        description: "Premier business school in the U.S.",
        logo: "/images/school/booth.png",
        country: "United States",
        continent: "North America",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "How will a Booth MBA help you achieve your goals?", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "13th September 2023" },
            { round: "Round 2", date: "5th January 2024" },
            { round: "Round 3", date: "11th April 2024" },
        ]
    },
    "iese-business-school": {
        name: "IESE Business School",
        description: "Renowned business school in Spain.",
        logo: "/images/school/5_IESE.png",
        country: "Spain",
        continent: "Europe",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "Describe your short-term and long-term career goals.", wordLimit: "300 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "1st October 2023" },
            { round: "Round 2", date: "5th January 2024" },
            { round: "Round 3", date: "15th March 2024" },
        ]
    },
    "yale-school-of-management": {
        name: "Yale School of Management",
        description: "One of the leading business schools in the USA.",
        logo: "/images/school/6_Yale_School_of_Management.png",
        country: "United States",
        continent: "North America",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "Describe the biggest commitment you have ever made.", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "13th September 2023" },
            { round: "Round 2", date: "5th January 2024" },
            { round: "Round 3", date: "11th April 2024" },
        ]
    },
    "ceibs": {
        name: "China Europe International Business School (CEIBS)",
        description: "Leading business school in China.",
        logo: "/images/school/8_CEIBS.jpg",
        country: "China",
        continent: "Asia",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "Discuss your post-MBA career aspirations.", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "1st November 2023" },
            { round: "Round 2", date: "1st March 2024" },
        ]
    },
    "hec-paris": {
        name: "HEC Paris",
        description: "One of the top business schools in France.",
        logo: "/images/school/9_HEC.png",
        country: "France",
        continent: "Europe",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "Why are you applying to HEC Paris?", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Rolling Admissions", date: "Check website for dates" },
        ]
    },
    "duke-fuqua": {
        name: "The Duke Fuqua School of Business",
        description: "Premier business school in the U.S.",
        logo: "/images/school/10_Duke Fuqua.png",
        country: "United States",
        continent: "North America",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "Tell us about your MBA goals.", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "12th September 2023" },
            { round: "Round 2", date: "5th January 2024" },
            { round: "Round 3", date: "25th March 2024" },
        ]
    },
    "dartmouth-tuck": {
        name: "Dartmouth College: Tuck",
        description: "Business school at Dartmouth College.",
        logo: "/images/school/11_Tuck.png",
        country: "United States",
        continent: "North America",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "What are your short-term and long-term goals?", wordLimit: "500 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "1st October 2023" },
            { round: "Round 2", date: "4th January 2024" },
            { round: "Round 3", date: "1st April 2024" },
        ]
    },
    // Continue adding all other schools in the same format

    // Last school
    "emory-goizueta": {
        name: "Emory University: Goizueta",
        description: "Business school at Emory University.",
        logo: "/images/school/Emory.png",
        country: "United States",
        continent: "North America",
        programType: "Full Time",
        essays: [
            { title: "Essay 1", description: "What are your short-term and long-term career goals?", wordLimit: "300 words max" },
        ],
        deadlines: [
            { round: "Round 1", date: "14th October 2023" },
            { round: "Round 2", date: "13th January 2024" },
            { round: "Round 3", date: "8th April 2024" },
        ]
    },
};

interface SchoolPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return Object.keys(schoolData).map((slug) => ({ slug }));
}

export default function SchoolPage({ params }: SchoolPageProps) {
    const school = schoolData[params.slug];

    if (!school) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Header Section */}
            <div className="flex items-center gap-6 border-b pb-6">
                <div className="relative w-24 mt-10 h-24">
                    <Image
                        src={school.logo}
                        alt={`${school.name} Logo`}
                        width={96}
                        height={96}
                        className="object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mt-10 text-gray-900">{school.name}</h1>
                    <p className="text-xl text-gray-600">{school.description}</p>
                </div>
            </div>

            {/* Program Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Globe2 className="h-6 w-6" />
                        <div>
                            <p className="text-sm font-medium text-blue-100">Country</p>
                            <p className="text-lg font-semibold">{school.country}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Navigation className="h-6 w-6" />
                        <div>
                            <p className="text-sm font-medium text-blue-100">Continent</p>
                            <p className="text-lg font-semibold">{school.continent}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6" />
                        <div>
                            <p className="text-sm font-medium text-blue-100">Nature of Program</p>
                            <p className="text-lg font-semibold">{school.programType}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Essays Section */}
            <div className="p-6 bg-white rounded-lg shadow">
                <h2 className="text-2xl text-gray-800 font-semibold mb-4">Essays</h2>
                <div className="space-y-4">
                    {school.essays.map((essay, index) => (
                        <div key={index} className="rounded-lg border p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-2">
                                <span className="px-2 py-1 bg-gray-200 rounded-md text-sm font-medium text-gray-800">{essay.title}</span>
                                <div>
                                    <p className="text-gray-900">{essay.description}</p>
                                    <p className="text-sm text-gray-500 mt-1">({essay.wordLimit})</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Deadlines Section */}
            <div className="p-6 bg-white rounded-lg shadow">
                <h2 className="text-2xl text-gray-800 font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6" />
                    Deadlines for 2023 Admission
                </h2>
                <div className="space-y-4">
                    {school.deadlines.map((deadline, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                            <div>
                                <span className="px-2 py-1 bg-gray-200 rounded-md text-sm font-medium text-gray-700">{deadline.round}</span>
                                <p className="text-lg text-gray-800 font-semibold mt-1">{deadline.date}</p>
                            </div>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-lg font-medium">{deadline.round}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
