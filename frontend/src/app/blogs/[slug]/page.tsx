'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownHTML from '@/components/MarkdownHTML';
import Image from 'next/image';
import Head from 'next/head';

interface Cover {
  formats?: {
    medium?: {
      url: string;
    };
  };
}

interface Block {
  __component: string;
  body: string;
}

interface Article {
  id: number;
  title: string;
  slug: string;
  publishedAt: string | null;
  blocks: Block[];
  cover: Cover | null;
  metaDescription: string;
}

export default function BlogPost() {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams();

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
            title: fetchedArticle.title,
            slug: fetchedArticle.slug,
            publishedAt: fetchedArticle.publishedAt,
            blocks: fetchedArticle.blocks || [],
            cover: fetchedArticle.cover || null,
            metaDescription: fetchedArticle.metaDescription || '',
          });
        } else {
          setError('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Error fetching blog');
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!article) return <p className="text-center mt-8">Loading...</p>;

  const imageUrl =
    article.cover?.formats?.medium?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.formats.medium.url}`
      : '/fallback-image.jpg'; // Fallback image if no cover is provided

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
            src={imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black mt-4 px-4">
                {article.title}
              </h1>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="px-4">
          {article.blocks.length > 0 ? (
            article.blocks.map((block, index) => {
              if (block.__component === 'shared.rich-text' && block.body) {
                return (
                  <section key={index} className="mb-8">
                    <MarkdownHTML content={block.body} />
                  </section>
                );
              }
              return null;
            })
          ) : (
            <p className="text-center text-gray-500 mt-4">No content available.</p>
          )}
        </div>
      </article>
    </>
  );
}
