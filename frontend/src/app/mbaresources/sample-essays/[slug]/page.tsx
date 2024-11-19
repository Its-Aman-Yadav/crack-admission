'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownHTML from '@/components/MarkdownHTML';
import Head from 'next/head';

interface Article {
  id: number;
  title: string;
  content: string;
  slug: string;
}

export default function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [nextArticle, setNextArticle] = useState<Article | null>(null);
  const [prevArticle, setPrevArticle] = useState<Article | null>(null);
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;

    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/essays?filters[slug][$eq]=${slug}&populate=*`
        );
        const data = await response.json();

        if (data.data.length > 0) {
          const fetchedArticle = data.data[0];
          setArticle({
            id: data.data[0].id,
            title: fetchedArticle.title,
            content: fetchedArticle.Content,
            slug: fetchedArticle.slug,
          });
        } else {
          setError("Article not found");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Error fetching article");
      }
    };

    const fetchAdjacentArticles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/essays?sort=publishedAt:asc&populate=*`
        );
        const data = await response.json();
        const articles = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          content: item.content,
        }));
        const currentIndex = articles.findIndex((a: Article) => a.slug === slug);

        if (currentIndex > 0) setPrevArticle(articles[currentIndex - 1]);
        if (currentIndex < articles.length - 1) setNextArticle(articles[currentIndex + 1]);
      } catch (error) {
        console.error("Error fetching adjacent articles:", error);
      }
    };

    fetchArticle();
    fetchAdjacentArticles();
  }, [slug]);

  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!article) return <p className="text-center mt-8">Loading...</p>;

  return (
    <>
    <Head>
  <title>{article?.title || "Sample Essay"} | CrackAdmission</title>
  <meta
    name="description"
    content={
      article?.content
        ? `${article.content.substring(0, 150)}...`
        : "Explore this insightful essay from CrackAdmission's sample essays collection."
    }
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="keywords"
    content="MBA essays, sample essays, CrackAdmission, essay examples, application essays"
  />
  <meta name="author" content="CrackAdmission" />
</Head>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl text-black font-bold mb-10 pb-2 mt-10 border-b">{article.title}</h1>
          <div className="text-black">
            <MarkdownHTML content={article.content} />
          </div>

          <div className="flex mb-20 text-black justify-between mt-10">
            {prevArticle && (
              <button
                onClick={() => router.push(`/mbaresources/sample-essays/${prevArticle.slug}`)}
                className="text-blue-500 hover:text-blue-700"
              >
                ← Previous Essay
              </button>
            )}
            {nextArticle && (
              <button
                onClick={() => router.push(`/mbaresources/sample-essays/${nextArticle.slug}`)}
                className="text-blue-500 hover:text-blue-700 ml-auto"
              >
                Next Essay →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
