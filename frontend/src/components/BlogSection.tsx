'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi'; // Importing arrow icon
import '@fontsource/inter'; // Import Inter font

// Define types for the article data
interface Cover {
  url: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  cover: Cover;
}

// Fetch the data
const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`, { cache: 'no-store' });
  const data = await response.json();
  return data.data; // Assuming data.data is an array of articles
};

const BlogSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const fetchedArticles = await fetchArticles();
      // Sort articles by published date (most recent first)
      const sortedArticles = fetchedArticles.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
      // Take only the top 3 articles
      setArticles(sortedArticles.slice(0, 3));
    };
    getArticles();
  }, []);

  return (
    <section className="py-16 bg-white font-inter">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 leading-snug text-gray-900">
          Our Latest Blogs
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg font-bold leading-relaxed">
        Stay informed, Get Inspired and Learn tips and tricks to ace your application
        </p>
      </div>

      {/* Blog Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
        {articles.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`}>
            <div
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.cover.url}`}
                alt={post.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <div className="absolute top-4 left-4 bg-blue-500 rounded-full px-3 py-1 text-white text-xs font-medium shadow-md">
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                </div>
                <h3 className="text-white text-lg font-semibold leading-snug mb-2">
                  {post.title}
                </h3>
              </div>

              {/* Arrow Icon on Hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-2xl">
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <Link href="/blogs">
        <button className="bg-blue-600 text-white rounded-full px-12 py-4 text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
  View All
</button>

        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
