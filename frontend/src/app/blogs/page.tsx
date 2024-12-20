"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import "@fontsource/inter";

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

const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*&pagination[pageSize]=1000`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data.data.map((article: any) => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
    publishedAt: article.publishedAt,
    cover: {
      url:
        article.cover && article.cover.formats
          ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${
              article.cover.formats.medium?.url || article.cover.url
            }`
          : "/path/to/default-image.jpg", // Fallback image path
    },
    tags: article.tags ? { name: article.tags.name } : null,
  }));
};

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Blogs";
    const getArticles = async () => {
      const fetchedArticles = await fetchArticles();
      const sortedArticles = fetchedArticles.sort((a, b) => {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      });
      setArticles(sortedArticles);
      setFilteredArticles(sortedArticles);

      // Extract unique tags
      const tags = Array.from(
        new Set(
          fetchedArticles.flatMap((article) =>
            article.tags ? [article.tags.name] : []
          )
        )
      );
      setUniqueTags(tags);
    };
    getArticles();
  }, []);

  useEffect(() => {
    const results = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTag === "" ||
          (article.tags && article.tags.name === selectedTag))
    );
    setFilteredArticles(results);
  }, [searchTerm, selectedTag, articles]);

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta
          name="description"
          content="Explore insightful blogs on MBA admissions, career guidance, and personal development. Stay updated with expert advice and success stories."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="MBA Blogs, Admissions Advice, Career Guidance, Personal Development, CrackAdmission Blogs"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>
      <section className="py-16 bg-white font-inter">
        <div className="bg-blue-50 py-12 mb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8">
              Blogs
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
                  Never stop learning, because life never stops teaching
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive and Modern Search Box */}
        <div className="flex flex-wrap justify-center mb-8 gap-4 px-4">
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 pl-10 pr-4 py-2 w-full text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Tag Dropdown */}
          <div className="relative w-full md:w-auto">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="border border-gray-300 pl-4 pr-8 py-2 w-full text-gray-900 bg-white rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Tags</option>
              {uniqueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            {/* Down Arrow Icon */}
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Rest of your component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <div className="group border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer overflow-hidden h-[24rem]">
                  {/* Image */}
                  <div className="h-[70%] overflow-hidden">
                    <img
                      src={post.cover.url}
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
                    {/* Uncomment if you want to display tags */}
                    {/* {post.tags?.name && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-3 py-1 mt-auto">
                        {post.tags.name}
                      </span>
                    )} */}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center col-span-full text-lg text-gray-500">
              No blogs found...
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
