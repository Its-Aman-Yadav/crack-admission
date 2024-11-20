import Image from "next/image";
import { notFound } from "next/navigation";
import MarkdownHTML from "@/components/MarkdownHTML";

// Define types for the article data
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
  tags: Tag | Tag[];
  metaDescription: string;
}

// Fetch article by slug
const fetchArticleBySlug = async (slug: string): Promise<Article | null> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" } // Avoid caching in production
  );

  if (!response.ok) {
    console.error(`Failed to fetch article: ${response.statusText}`);
    return null;
  }

  const data = await response.json();
  return data.data.length ? data.data[0] : null;
};

interface BlogPostProps {
  params: { slug: string };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  // Fetch the article by slug
  const article = await fetchArticleBySlug(params.slug);

  if (!article) {
    // If the article is not found, show a 404 page
    notFound();
  }

  // Convert tags to an array if it's a single object
  const tagsArray = Array.isArray(article.tags) ? article.tags : [article.tags];

  return (
    <article className="max-w-4xl mx-auto">
      {/* Metadata */}
      <head>
        <title>{article.title}</title>
        <meta
          name="description"
          content={article.metaDescription || "Default blog description"}
        />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.metaDescription || "Default blog description"}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/blogs/${article.slug}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta
          name="twitter:description"
          content={article.metaDescription || "Default blog description"}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`}
        />
      </head>

      {/* Header Section */}
      <header className="relative w-screen h-[300px] mb-8 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${article.cover.url}`}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-full">
              {new Date(article.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <h1 className="text-4xl font-bold text-white mt-4 px-4">
              {article.title}
            </h1>
            {/* Display tags */}
            <div className="flex flex-wrap justify-center mt-2">
              {tagsArray.map((tag, index) => (
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
          if (block.__component === "shared.rich-text" && block.body) {
            return (
              <section key={index} className="mb-8">
                <MarkdownHTML content={block.body} />
              </section>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
};

export default BlogPost;
