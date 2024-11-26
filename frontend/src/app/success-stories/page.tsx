"use client";

import { useState, useEffect } from "react";
import { Linkedin, Globe, Building2 } from "lucide-react";
import Head from "next/head";

// Define a type for the profile data
interface Profile {
  name: string;
  image: string;
  program: string;
  country: string;
  school: string;
  linkedin: string;
}

export default function Component() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState("All");
  const [selectedSchool, setSelectedSchool] = useState("All");

  const programs = [
    "All",
    "MBA",
    "EMBA",
    "MS",
    "MBA Summer School",
    "MS Financial Management",
    "MS Data Science",
  ];
  const schools = [
    "All",
    "ISB",
    "NTU",
    "MBS",
    "ISB PGPMAx",
    "Duke Fuqua",
    "IIM B EPGP",
    "Chicago Booth",
    "Fox School of Business",
    "LBS",
    "Asian Institute of Management",
    "IIM L IPMX",
    "EDHEC",
    "INSEAD",
    "Schulich",
    "IE",
    "ISB YLP",
    "IIM A PGPX",
    "MDI",
    "HEC",
    "Oxford",
    "UCD Smurfit",
    "Emory Goizeuta",
    "UTD",
    "IESE",
    "Richard Ivey",
    "Olin",
    "Tepper",
    "Melbourne Business School",
    "Wharton",
    "UBC Sauder",
    "CKGSB",
    "Michigan Ross",
    "USC Marshall",
    "Australian Graduate School of Management (AGSM)",
    "ISB PGPPro",
    "HBS AMP",
    "UTD Austin",
    "Harvard Business School",
    "Wisconsin School of Business",
    "George Washington University",
    "Cornell",
    "IIM C PGPEx",
    "ISB PGP Pro",
    "ISB EEO",
    "ISB PGP",
  ];

  useEffect(() => {
    document.title = "Success Stories";
    const fetchAllProfiles = async () => {
      const allProfiles: Profile[] = [];
      let page = 1;
      const pageSize = 100;
      let hasMore = true;

      try {
        while (hasMore) {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/success-stories?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
          );
          const data = await response.json();
          const profiles = data.data.map((item: any) => {
            const imageUrl =
              item.image?.formats?.large?.url ||
              item.image?.formats?.medium?.url ||
              item.image?.formats?.small?.url ||
              item.image?.formats?.thumbnail?.url ||
              "/placeholder.svg?height=400&width=400";

            return {
              name: item.name,
              image: imageUrl.startsWith("/")
                ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`
                : imageUrl,
              program: (item.program || "MBA").trim(),
              country: item.country || "Unknown",
              school: item.school || "Unknown",
              linkedin: item.linkedin || "#",
            };
          });

          allProfiles.push(...profiles);
          hasMore = profiles.length === pageSize;
          page++;
        }

        setProfiles(allProfiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProfiles();
  }, []);

  // Filter profiles based on selected program and school
  const filteredProfiles = profiles.filter((profile) => {
    const programMatch =
      selectedProgram === "All" || profile.program === selectedProgram;
    const schoolMatch =
      selectedSchool === "All" || profile.school === selectedSchool;
    return programMatch && schoolMatch;
  });

  return (
    <>
      <Head>
        <title>Success Stories</title>
        <meta
          name="description"
          content="Discover inspiring success stories from students and professionals who achieved their dreams with the guidance of CrackAdmission. Explore profiles, programs, and schools they have excelled in."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Success Stories, MBA Profiles, EMBA Success, Career Growth, School Admissions, CrackAdmission"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>
      <div className="bg-gray-50 p-8 max-w-full font-sans">
        <div className="bg-blue-100 p-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-blue-500 mb-10 mt-5 text-center">
              Success Stories
            </h2>
            <blockquote className="relative text-xl italic text-gray-600 mb-4 text-center">
              <div className="block-underline relative inline-block">
                <span className="text-blue-500 text-4xl absolute -left-8 top-0">
                  "
                </span>
                <p className="inline-block font-bold">
                  Once you see results, it becomes an addiction
                </p>
                <span className="text-blue-500 text-4xl absolute -right-8 top-0">
                  "
                </span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-4 md:p-6">
        {loading ? (
          <p>Loading profiles...</p>
        ) : (
          <>
            <div className="flex-1">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredProfiles.map((profile, index) => (
                  <div
                    key={index}
                    className="overflow-hidden border rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-0">
                      <div className="aspect-square relative group">
                        <img
                          alt={profile.name}
                          className="object-cover w-full h-full"
                          src={profile.image}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/success-holder.jpg";
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <a
                          href={profile.linkedin}
                          className="absolute bottom-3 right-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </a>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="font-semibold text-black truncate">
                          {profile.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="bg-blue-700 font-semibold text-white px-2 py-1 rounded">
                            {profile.program}
                          </span>
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            {profile.country}
                          </div>
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {profile.school}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="lg:w-64 space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Program Type</h3>
                <div className="whitespace-nowrap overflow-auto flex flex-wrap gap-2">
                  {programs.map((program) => (
                    <button
                      key={program}
                      onClick={() => setSelectedProgram(program)}
                      className={`${
                        selectedProgram === program
                          ? "bg-blue-500 text-white"
                          : "border border-gray-300 text-gray-600"
                      } rounded-full px-4 py-1 text-sm`}
                    >
                      {program}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">School Name</h3>
                <div className="whitespace-nowrap overflow-auto flex flex-wrap gap-2">
                  {schools.map((school) => (
                    <button
                      key={school}
                      onClick={() => setSelectedSchool(school)}
                      className={`${
                        selectedSchool === school
                          ? "bg-blue-500 text-white"
                          : "border border-gray-300 text-gray-600"
                      } rounded-full px-4 py-1 text-sm`}
                    >
                      {school}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
