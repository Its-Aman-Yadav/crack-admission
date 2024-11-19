"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Head from "next/head";

interface Scholarship {
  id: number;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
}

export default function ScholarshipList() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Sample Scholarship Essay";
    const fetchScholarships = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/scholarships?populate=*`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Scholarships:", data); // Verify the structure of fetched data

        // Map and sort scholarships by `createdAt` in descending order
        const sortedScholarships = data.data
          .map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            slug: item.slug,
            createdAt: item.createdAt,
          }))
          .sort(
            (a: Scholarship, b: Scholarship) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        setScholarships(sortedScholarships);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
        setError("Could not fetch scholarships. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  // Filter scholarships based on the search query
  const filteredScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Sample Scholarship Essays</title>
        <meta
          name="description"
          content="Explore expertly crafted Sample Scholarship Essays that highlight impactful narratives. Use these examples to inspire and guide your own scholarship application process."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Sample Scholarship Essays, MBA Scholarships, Scholarship Application Tips, Scholarship Essay Examples, MBA Resources, CrackAdmission"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">
            Sample Scholarship Essays
          </h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">
              "
            </div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">
              "
            </div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                Thank you for investing in my future
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-md bg-white">
        {/* Search Input */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative text-black w-full max-w-lg">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search scholarships..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-3 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Scholarships List */}
        {loading ? (
          <p className="text-center mt-20 mb-20 text-gray-500">
            Loading scholarships...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="mb-8">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <a
                    href={`/mbaresources/samplescholarshipessays/${scholarship.slug}`}
                    className="block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  >
                    {scholarship.title || "Title not found"}
                  </a>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {scholarship.description || "Description not found"}
                  </p>
                  <div className="flex">
                    <a
                      href={`/mbaresources/samplescholarshipessays/${scholarship.slug}`}
                      className="mt-4 text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No scholarships found for "{searchQuery}"
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
