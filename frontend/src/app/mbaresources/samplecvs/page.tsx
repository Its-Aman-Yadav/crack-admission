"use client";

import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Menu,
  Filter,
  Layers,
  Briefcase,
  FileDown,
  Download,
} from "lucide-react";
import { useEffect } from "react";

type CategoryKey =
  | "it"
  | "finance"
  | "business"
  | "operations"
  | "marketing"
  | "social";

export default function Component() {
  useEffect(() => {
    document.title = "Sample CV";
  }, []);
  const [selectedYears, setSelectedYears] = React.useState("all");
  const [activeCategory, setActiveCategory] = React.useState<CategoryKey>("it");

  const categories: Record<
    CategoryKey,
    {
      title: string;
      description: string;
      documents: { id: string; years: string; link: string }[];
    }
  > = {
    it: {
      title: "Information Technology",
      description: "CV templates for IT professionals",
      documents: [
        {
          id: "1",
          years: "2-4",
          link: "https://drive.google.com/file/d/1w_ePDKO5WCqxdDIAcegtNtP0wa97-ThJ/view",
        },
        {
          id: "2",
          years: "5-7",
          link: "https://drive.google.com/file/d/1s9VqEL3on_cBAWF7uZli4cHTfklNBbv7/view",
        },
        {
          id: "3",
          years: "7-10",
          link: "https://drive.google.com/file/d/1jBmYCz9ZbRedDhOx6PEvjaZGjaIbbF6v/view",
        },
        {
          id: "4",
          years: "10+",
          link: "https://drive.google.com/file/d/10NYBolZ470UTfuHJ1jPaWC-RlCN1MHaM/view",
        },
      ],
    },
    finance: {
      title: "Financial Services",
      description: "CV templates for finance professionals",
      documents: [
        {
          id: "5",
          years: "2-4",
          link: "https://drive.google.com/file/d/1fyl0GGF25KnUACtw_JiupGJV9_Ejph_1/view",
        },
        {
          id: "6",
          years: "5-7",
          link: "https://drive.google.com/file/d/1tID71saRgc8IDm0xfOjkUG1Bf9fmA-XB/view",
        },
        {
          id: "7",
          years: "7-10",
          link: "https://drive.google.com/file/d/1cJgtuLULl3u4yPNYP2hFK_Qa4uHRwT9W/view",
        },
        {
          id: "8",
          years: "10+",
          link: "https://drive.google.com/file/d/111jThxbhxnyKijtPFPjxGrcjHdSgPyZA/view",
        },
      ],
    },
    business: {
      title: "Business Development",
      description: "CV templates for business development professionals",
      documents: [
        {
          id: "9",
          years: "2-4",
          link: "https://drive.google.com/file/d/1PUvWHjzXy4qJZ7i9QNsXiWlNvlJDtRnS/view",
        },
        {
          id: "10",
          years: "5-7",
          link: "https://drive.google.com/file/d/1v0u37rRjgHiwOwUvStPZpmiT_ZpI41L-/view"
        },
        // {
        //   id: "11",
        //   years: "7-10",
        //   link: "https://drive.google.com/file/d/yourfileid3",
        // },
        // {
        //   id: "12",
        //   years: "10+",
        //   link: "https://drive.google.com/file/d/yourfileid4",
        // },
      ],
    },
    operations: {
      title: "Operations",
      description: "CV templates for operations professionals",
      documents: [
        {
          id: "13",
          years: "2-4",
          link: "https://drive.google.com/file/d/1Z8KDSQAJGOKZa78N1T0AfIk3ftglAc_i/view",
        },
        {
          id: "14",
          years: "5-7",
          link: "https://drive.google.com/file/d/1ZXbVm9ID-6qCD-pfH1Icuj2VjDkL5MSu/view",
        },
        {
          id: "15",
          years: "7-10",
          link: "https://drive.google.com/file/d/1N01uH_qFxecVX1Hd0oVAalZ2HO-Wvvo7/view",
        },
        // {
        //   id: "16",
        //   years: "10+",
        //   link: "https://drive.google.com/file/d/yourfileid4",
        // },
      ],
    },
    marketing: {
      title: "Brand Marketing",
      description: "CV templates for marketing professionals",
      documents: [
        {
          id: "17",
          years: "2-4",
          link: "https://drive.google.com/file/d/1K10ceGvoLbQgc8GOCn6WzxQKQT_sFUDB/view",
        },
        {
          id: "18",
          years: "5-7",
          link: "https://drive.google.com/file/d/1rp6lHNx5XfLuazCF9ksI6YrAt-ipYoju/view",
        },
        {
          id: "19",
          years: "7-10",
          link: "https://drive.google.com/file/d/1SiJBzEYuT0nnJLHHqsU0ltvuzAVf1qVF/view",
        },
        // {
        //   id: "20",
        //   years: "10+",
        //   link: "https://drive.google.com/file/d/yourfileid4",
        // },
      ],
    },
    social: {
      title: "Social Sector",
      description: "CV templates for social sector professionals",
      documents: [
        {
          id: "21",
          years: "2-4",
          link: "https://drive.google.com/file/d/1KSCnn6Jl2DuK7TRxMsFUTRcMAS9CCuwf/view",
        },
        {
          id: "22",
          years: "5-7",
          link: "https://drive.google.com/file/d/1p80174z1nvwAi0q5j50Oc5ohrbMdDyq4/view",
        },
        // {
        //   id: "23",
        //   years: "7-10",
        //   link: "https://drive.google.com/file/d/yourfileid3",
        // },
        // {
        //   id: "24",
        //   years: "10+",
        //   link: "https://drive.google.com/file/d/yourfileid4",
        // },
      ],
    },
  };

  const yearFilters = [
    { value: "all", label: "All Experience" },
    { value: "2-4", label: "2-4 Years" },
    { value: "5-7", label: "5-7 Years" },
    { value: "7-10", label: "7-10 Years" },
    { value: "10+", label: "More Than 10 Years" },
  ];

  return (
    <>
      <Head>
        <title>Sample CV</title>
        <meta
          name="description"
          content="Explore expertly crafted CV templates tailored for various industries including IT, Finance, Marketing, and more. Filter CVs by years of experience and download templates to elevate your professional journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Sample CVs, CV Templates, IT CV Templates, Finance CV Templates, Marketing CVs, Operations CVs, Professional CV Examples, Resume Templates"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>
      {/* Quote Section */}
      <div className="bg-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-blue-500 mb-4">
            Sample CVs
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
                The difference between something good and something great is
                attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen mb-10 flex-col bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 bg-white z-10 shadow-sm">
          <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
            <button className="shrink-0 p-2 border rounded-md md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto flex-1 flex flex-col items-center py-4 px-4">
          {/* Category Buttons */}
          <div className="w-full px-4">
            <div className="flex gap-2 mb-6 overflow-x-auto border-b pb-2 scrollbar-hide justify-center md:justify-start">
              {Object.keys(categories).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as CategoryKey)}
                  className={`px-4 py-2 text-sm md:text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
                    activeCategory === key
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {categories[key as CategoryKey].title}
                </button>
              ))}
            </div>
          </div>

          {/* Category Content */}
          <div className="space-y-6 w-full max-w-4xl">
            {/* Category Title */}
            <div className="mb-4">
              <h2 className="text-base sm:text-lg md:text-2xl font-bold text-black tracking-tight text-center md:text-left">
                {categories[activeCategory].title}
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start my-4">
              <span className="font-semibold text-gray-700 text-sm md:text-base">
                Filter by Experience:
              </span>
              {yearFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedYears(filter.value)}
                  className={`px-3 py-2 rounded-full text-xs md:text-sm ${
                    selectedYears === filter.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <hr className="my-4" />

            {/* Documents Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {categories[activeCategory].documents
                .filter(
                  (doc) =>
                    selectedYears === "all" || doc.years === selectedYears
                )
                .map((document) => (
                  <div
                    key={document.id}
                    className="p-4 border rounded-lg flex flex-col justify-between bg-white shadow-sm"
                  >
                    <div>
                      <h3 className="flex items-center text-black gap-2 font-semibold text-sm md:text-base">
                        <FileDown className="h-5 w-5 text-blue-800" />
                        {categories[activeCategory].title} Sample
                      </h3>
                      <p className="text-gray-900 ml-6 text-xs md:text-sm">
                        {document.years} Years Experience
                      </p>
                    </div>
                    <a
                      href={document.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md text-xs md:text-sm hover:bg-blue-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
