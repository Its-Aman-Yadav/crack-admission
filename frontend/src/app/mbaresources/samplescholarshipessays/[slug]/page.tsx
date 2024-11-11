'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownHTML from '@/components/MarkdownHTML';

interface Article {
  title: string;
  content: string;
  slug: string;
}

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/scholarships?filters[slug][$eq]=${slug}&populate=*`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data); // Log the data to verify its structure

        if (data.data && data.data.length > 0) {
          const articleData = data.data[0];
          setArticle({
            title: articleData.title,
            content: articleData.content,
            slug: articleData.slug,
          });
        } else {
          setError("Article not found");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Error fetching article");
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!article) return <p className="text-center mb-20">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl text-black font-bold mb-10 pb-2 mt-10 border-b">{article.title}</h1>
          <div className="text-black">
            <MarkdownHTML content={article.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
