'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MarkdownHTML from '@/components/MarkdownHTML';
import Image from 'next/image';

interface Cover {
  formats?: {
    medium?: {
      url: string;
    };
    thumbnail?: {
      url: string;
    };
  };
  url?: string; // Direct URL in case no formats are available
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

  // Determine the cover image URL
  const imageUrl = article.cover?.formats?.medium?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.formats.medium.url}`
    : article.cover?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`
    : '/path/to/default-image.jpg'; // Fallback image if no cover is provided

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      {/* Title Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
      </header>

      {/* Cover Image Section */}
      {imageUrl && (
        <div className="mb-8">
          <Image
            src={imageUrl}
            alt={article.title}
            width={800}
            height={400}
            className="w-full h-auto rounded-md shadow-sm"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="prose prose-lg prose-gray mx-auto">
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
  );
}
