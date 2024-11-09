'use client';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function ScholarshipList() {
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:1337/api/lors?populate=*');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Scholarships:", data); // Verify the structure of fetched data

        // Sort scholarships by `createdAt` in descending order
        const sortedScholarships = data.data.sort((a: any, b: any) => 
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
  const filteredScholarships = scholarships.filter((scholarship) => {
    const title = scholarship.title || ''; // Access `title` inside `attributes`
    const description = scholarship.description || ''; // Access `description` inside `attributes`
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">Sample LORs</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                A well-balanced person has a chip on both shoulders
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
              placeholder="Search LORs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-3 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Scholarships List */}
        {loading ? (
          <p className="text-center text-gray-500">Loading scholarships...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="mb-8">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((scholarship: any) => (
                <div key={scholarship.id} className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  {scholarship.title ? (
                    <a href={`/mbaresources/samplelors/${scholarship.slug}`} className="block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                      {scholarship.title}
                    </a>
                  ) : (
                    <p className="text-red-500">Title not found</p>
                  )}
                  {scholarship.description ? (
                    <p className="mt-2 text-gray-600 leading-relaxed">{scholarship.description}</p>
                  ) : (
                    <p className="text-red-500">Description not found</p>
                  )}
                  <div className="flex">
                    <a
                      href={`/mbaresources/samplelors/${scholarship.slug}`}
                      className="mt-4 text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No LORs found for "{searchQuery}"</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
