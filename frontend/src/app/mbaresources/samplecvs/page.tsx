'use client';

import * as React from 'react';
import { Menu, Filter, Layers, Briefcase, FileDown, Download } from 'lucide-react';

type CategoryKey = 'it' | 'finance' | 'business' | 'operations' | 'marketing' | 'social';

export default function Component() {
  const [selectedYears, setSelectedYears] = React.useState("all");
  const [activeCategory, setActiveCategory] = React.useState<CategoryKey>("it");

  const categories: Record<CategoryKey, { title: string; description: string; documents: { id: string; years: string }[] }> = {
    it: {
      title: "Information Technology",
      description: "CV templates for IT professionals",
      documents: [
        { id: "1", years: "2-4" },
        { id: "2", years: "5-7" },
        { id: "3", years: "7-10" },
        { id: "4", years: "10+" },
      ],
    },
    finance: {
      title: "Financial Services",
      description: "CV templates for finance professionals",
      documents: [
        { id: "5", years: "2-4" },
        { id: "6", years: "5-7" },
        { id: "7", years: "7-10" },
        { id: "8", years: "10+" },
      ],
    },
    business: {
      title: "Business Development",
      description: "CV templates for business development professionals",
      documents: [
        { id: "9", years: "2-4" },
        { id: "10", years: "5-7" },
        { id: "11", years: "7-10" },
        { id: "12", years: "10+" },
      ],
    },
    operations: {
      title: "Operations",
      description: "CV templates for operations professionals",
      documents: [
        { id: "13", years: "2-4" },
        { id: "14", years: "5-7" },
        { id: "15", years: "7-10" },
        { id: "16", years: "10+" },
      ],
    },
    marketing: {
      title: "Brand Marketing",
      description: "CV templates for marketing professionals",
      documents: [
        { id: "17", years: "2-4" },
        { id: "18", years: "5-7" },
        { id: "19", years: "7-10" },
        { id: "20", years: "10+" },
      ],
    },
    social: {
      title: "Social Sector",
      description: "CV templates for social sector professionals",
      documents: [
        { id: "21", years: "2-4" },
        { id: "22", years: "5-7" },
        { id: "23", years: "7-10" },
        { id: "24", years: "10+" },
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
      {/* Quote Section */}
      <div className="bg-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 text-blue-500 mb-4">Sample CVs</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                The difference between something good and something great is attention to detail
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen mb-10 flex-col">
        <header className="sticky top-0 bg-white">
          <div className="container flex h-14 items-center gap-4">
            <button className="shrink-0 p-2 border md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </header>
        <div className="container flex-1 flex flex-col items-center py-4">
          <div className="flex gap-2 mb-6 border-b">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as CategoryKey)}
                className={`px-4 py-2 text-black font-semibold ${
                  activeCategory === key ? "border-b-2 border-blue-600" : "border-transparent"
                }`}
              >
                {categories[key as CategoryKey].title}
              </button>
            ))}
          </div>
          <div className="space-y-6 w-full max-w-4xl">
            <div>
              <h2 className="text-2xl text-black font-bold tracking-tight">{categories[activeCategory].title}</h2>
              {/* <p className="text-gray-800">{categories[activeCategory].description}</p> */}
            </div>
            <div className="flex gap-4 my-4">
              <span className="font-semibold text-gray-700">Filter by Experience:</span>
              {yearFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedYears(filter.value)}
                  className={`px-4 py-2 rounded-full ${
                    selectedYears === filter.value ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <hr className="my-4" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories[activeCategory].documents
                .filter((doc) => selectedYears === "all" || doc.years === selectedYears)
                .map((document) => (
                  <div key={document.id} className="p-4 border rounded-lg flex flex-col justify-between">
                    <div>
                      <h3 className="flex items-center text-black gap-2 font-semibold text-lg">
                        <FileDown className="h-5 text-blue-800 w-5" />
                        {categories[activeCategory].title} Sample
                      </h3>
                      <p className="text-gray-900 ml-6">{document.years} Years Experience</p>
                    </div>
                    <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
