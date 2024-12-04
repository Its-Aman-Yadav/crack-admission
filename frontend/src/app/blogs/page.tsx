"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiSearch } from "react-icons/fi";
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
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  console.log(
    "Authorization Header:",
    `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
  );
  console.log("API URL:", process.env.NEXT_PUBLIC_STRAPI_API_URL);
  console.log("API Token:", process.env.NEXT_PUBLIC_STRAPI_API_TOKEN);

  const data = await response.json();
  return data.data.map((article: any) => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
    publishedAt: article.publishedAt,
    cover: {
      url:
      article.cover && article.cover.formats
      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.formats.medium?.url || article.cover.url}`
      : "/path/to/default-image.jpg", // Fallback image path
      
    },
    tags: article.tags ? { name: article.tags.name } : null,
  }));
};

const BlogPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>(""); // State for selected tag
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [uniqueTags, setUniqueTags] = useState<string[]>([]); // State for unique tags

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

        <div className="flex justify-center mb-8 space-x-4">
          {/* Search by title */}
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-l-md px-4 py-2 w-1/3 text-gray-900 bg-white"
          />
          <button className="bg-blue-600 text-white rounded-r-md px-4 flex items-center">
            <FiSearch className="mr-2" /> Search
          </button>

          {/* Tag Dropdown */}
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="border rounded-md px-4 py-2 text-gray-900 bg-white"
          >
            <option value="">All Tags</option>
            {uniqueTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                  <img
                    src={post.cover.url}
                    alt={post.title}
                    className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                    <div className="absolute top-4 left-4 bg-blue-500 rounded-full px-3 py-1 text-white text-xs font-medium shadow-md">
                      {/* {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })} */}
                    </div>
                    <h3 className="text-white text-lg font-semibold leading-snug mb-2">
                      {post.title}
                    </h3>

                    {/* Tags Display */}
                    {post.tags && (
                      <p className="text-white text-sm mt-2">
                        <span className="font-semibold">Tags:</span>{" "}
                        {post.tags.name}
                      </p>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-2xl">
                      <FiArrowRight />
                    </div>
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
