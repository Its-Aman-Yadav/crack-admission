'use client'
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Component() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [articles, setArticles] = useState<any[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/essays?populate=*');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log raw data to confirm its structure

        // Sort articles by `createdAt` in descending order
        const sortedArticles = data.data.sort((a: any, b: any) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        
        setArticles(sortedArticles); // Set sorted articles to state
      } catch (error) {
        console.error('Error fetching data:', error);
        setFetchError('Could not fetch data from the server. Please try again later.');
      }
    };

    fetchData();
  }, []);

  // Filter articles based on the search query
  const filteredArticles = articles.filter((article) =>
    article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">Sample Essays</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                We make a living by what we get. We make a life by what we give
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Search Input with Icon */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative text-black w-full max-w-lg">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search essays..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-3 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="w-full mx-auto p-8 border border-gray-200 rounded-lg shadow-md bg-white">
        {fetchError ? (
          <p className="text-center text-red-500">{fetchError}</p>
        ) : (
          <div className="mb-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article: any, index: number) => (
                <div key={index} className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <a href={`/mbaresources/sample-essays/${article.slug}`} className="block text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                    {article.title}
                  </a>
                  <p className="mt-2 text-gray-600 leading-relaxed">{article.description}</p>
                  <div className="flex">
                    <a href={`/mbaresources/sample-essays/${article.slug}`} className="mt-4 text-blue-500 hover:text-blue-700 font-medium transition-colors duration-200">
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No articles found for "{searchQuery}"</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
