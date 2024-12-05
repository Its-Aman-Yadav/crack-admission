"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; // Importing arrow icon
import "@fontsource/inter"; // Import Inter font

// Define types for the article data
interface Cover {
  url: string;
}

interface Tag {
  name: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  cover: Cover;
  tags: Tag | null;
}

// Fetch the data
const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`,
    { cache: "no-store" }
  );
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
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
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
          Stay informed, Get Inspired and Learn tips and tricks to ace your
          application
        </p>
      </div>

      {/* Blog Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
        {articles.map((post) => (
          <Link key={post.id} href={`/blogs/${post.slug}`}>
            <div className="group border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden h-[24rem]">
              {/* Image Section */}
              <div className="h-[70%] overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.cover.url}`}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 h-[30%] flex flex-col justify-between">
                {/* Title */}
                <h3 className="text-gray-600 text-lg font-semibold leading-tight">
                  {post.title}
                </h3>
                {/* Tags */}
                {/* {post.tags?.name && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-3 py-1 inline-block mt-2">
                    {post.tags.name}
                  </span>
                )} */}
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
