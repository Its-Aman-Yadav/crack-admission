'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownHTML from '@/components/MarkdownHTML';
import Image from 'next/image';
import Head from 'next/head';

interface Cover {
  url: string;
}

interface Block {
  __component: string;
  body: string;
}

interface Tag {
  name: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  blocks: Block[];
  cover: Cover;
  tags: Tag[];
  metaDescription: string;
}

export default function BlogPost() {
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
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
          { cache: 'no-store' }
        );
        const data = await response.json();

        if (data.data.length > 0) {
          const fetchedArticle = data.data[0];
          setArticle({
            id: fetchedArticle.id,
            title: fetchedArticle.attributes.title,
            slug: fetchedArticle.attributes.slug,
            publishedAt: fetchedArticle.attributes.publishedAt,
            blocks: fetchedArticle.attributes.blocks || [],
            cover: fetchedArticle.attributes.cover || { url: '' },
            tags: fetchedArticle.attributes.tags || [],
            metaDescription: fetchedArticle.attributes.metaDescription || '',
          });
        } else {
          setError('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Error fetching blog');
      }
    };

    const fetchAdjacentArticles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?sort=publishedAt:asc&populate=*`
        );
        const data = await response.json();

        const articles = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.title,
          slug: item.attributes.slug,
          publishedAt: item.attributes.publishedAt,
          blocks: item.attributes.blocks || [],
          cover: item.attributes.cover || { url: '' },
          tags: item.attributes.tags || [],
        }));

        const currentIndex = articles.findIndex((a: Article) => a.slug === slug);

        if (currentIndex > 0) setPrevArticle(articles[currentIndex - 1]);
        if (currentIndex < articles.length - 1) setNextArticle(articles[currentIndex + 1]);
      } catch (error) {
        console.error('Error fetching adjacent articles:', error);
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
        <title>{article.title} | Blog</title>
        <meta
          name="description"
          content={article.metaDescription || 'A detailed blog post.'}
        />
        <meta name="keywords" content="Blog, Article, Writing, CrackAdmission" />
        <meta name="author" content="CrackAdmission" />
      </Head>

      <article className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="relative w-screen h-[300px] mb-8 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <Image
            src={
              article.cover.url
                ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`
                : '/fallback-image.jpg'
            }
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
                {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <h1 className="text-4xl font-bold text-white mt-4 px-4">
                {article.title}
              </h1>
              {/* Tags */}
              <div className="flex flex-wrap justify-center mt-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-3 py-1 text-sm font-semibold rounded-full mx-1"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="px-4">
          {article.blocks.map((block, index) => {
            if (block.__component === 'shared.rich-text' && block.body) {
              return (
                <section key={index} className="mb-8">
                  <MarkdownHTML content={block.body} />
                </section>
              );
            }
            return null;
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10 mb-20">
          {prevArticle && (
            <button
              onClick={() => router.push(`/blogs/${prevArticle.slug}`)}
              className="text-blue-500 hover:text-blue-700"
            >
              ← Previous Blog
            </button>
          )}
          {nextArticle && (
            <button
              onClick={() => router.push(`/blogs/${nextArticle.slug}`)}
              className="text-blue-500 hover:text-blue-700 ml-auto"
            >
              Next Blog →
            </button>
          )}
        </div>
      </article>
    </>
  );
}
