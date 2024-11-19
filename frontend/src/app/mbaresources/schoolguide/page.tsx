"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Head from "next/head";
import { useEffect } from "react";

export default function SchoolList() {
    
  useEffect(() => {
    document.title = "School Guide";
  }, []);

  const schools = [
    {
      name: "INSEAD",
      logo: "/images/school/1_2_INSEAD.png",
      country: "France/Singapore",
      link: "insead",
    },
    {
      name: "London Business School",
      logo: "/images/school/LBS.png",
      country: "United Kingdom",
      link: "london-business-school",
    },
    {
      name: "The University of Chicago Booth School of Business",
      logo: "/images/school/booth.png",
      country: "United States",
      link: "university-of-chicago-booth",
    },
    {
      name: "IESE Business School",
      logo: "/images/school/5_IESE.png",
      country: "Spain",
      link: "iese-business-school",
    },
    {
      name: "Yale School of Management",
      logo: "/images/school/6_Yale_School_of_Management.png",
      country: "United States",
      link: "yale-school-of-management",
    },
    {
      name: "China Europe International Business School (CEIBS)",
      logo: "/images/school/8_CEIBS.jpg",
      country: "China",
      link: "ceibs",
    },
    {
      name: "HEC Paris",
      logo: "/images/school/9_HEC.png",
      country: "France",
      link: "hec-paris",
    },
    {
      name: "The Duke Fuqua School of Business",
      logo: "/images/school/10_Duke Fuqua.png",
      country: "United States",
      link: "duke-fuqua",
    },
    {
      name: "Dartmouth College: Tuck",
      logo: "/images/school/11_Tuck.png",
      country: "United States",
      link: "dartmouth-tuck",
    },
    {
      name: "University of Virginia: Darden",
      logo: "/images/school/12_Darden.png",
      country: "United States",
      link: "uva-darden",
    },
    {
      name: "NYU Stern School of Business",
      logo: "/images/school/13_NYU Stern.png",
      country: "United States",
      link: "nyu-stern",
    },
    {
      name: "National University of Singapore Business School",
      logo: "/images/school/14_NUS.png",
      country: "Singapore",
      link: "nus-business-school",
    },
    {
      name: "Cornell SC Johnson College of Business",
      logo: "/images/school/Cornell.jpg",
      country: "United States",
      link: "cornell-johnson",
    },
    {
      name: "Cambridge Judge Business School",
      logo: "/images/school/16_Cambridge.png",
      country: "United Kingdom",
      link: "cambridge-judge",
    },
    {
      name: "Georgetown University: McDonough",
      logo: "/images/school/17_Georgetown.png",
      country: "United States",
      link: "georgetown-mcdonough",
    },
    {
      name: "SAID Business School",
      logo: "/images/school/18_Oxford.png",
      country: "United Kingdom",
      link: "said-business-school",
    },
    {
      name: "IMD Business School",
      logo: "/images/school/19_IMD.png",
      country: "Switzerland",
      link: "imd",
    },
    {
      name: "ESADE Ramon Llull University",
      logo: "/images/school/20_ESADE.png",
      country: "Spain",
      link: "esade",
    },
    {
      name: "University of Michigan: Ross",
      logo: "/images/school/21_Michigan Ross.png",
      country: "United States",
      link: "michigan-ross",
    },
    {
      name: "HKUST Business School",
      logo: "/images/school/22_HKUST.png",
      country: "Hong Kong",
      link: "hkust",
    },
    {
      name: "Indian School of Business",
      logo: "/images/school/23_ISB.png",
      country: "India",
      link: "isb",
    },
    {
      name: "University of Southern California: Marshall",
      logo: "/images/school/24_USC Marshall.png",
      country: "United States",
      link: "usc-marshall",
    },
    {
      name: "Washington University: Olin",
      logo: "/images/school/25_Olin.jpg",
      country: "United States",
      link: "wustl-olin",
    },
    {
      name: "University of North Carolina: Kenan-Flagler",
      logo: "/images/school/flager.jpg",
      country: "United States",
      link: "unc-kenan-flagler",
    },
    {
      name: "Carnegie Mellon: Tepper",
      logo: "/images/school/27_Tepper.png",
      country: "United States",
      link: "cmu-tepper",
    },
    {
      name: "University of Washington: Foster",
      logo: "/images/school/28_Foster.jpg",
      country: "United States",
      link: "uw-foster",
    },
    {
      name: "Alliance Manchester Business School",
      logo: "/images/school/29_Alliance.png",
      country: "United Kingdom",
      link: "alliance-manchester",
    },
    {
      name: "Vanderbilt University: Owen",
      logo: "/images/school/30_Vanderbilt Owen.png",
      country: "United States",
      link: "vanderbilt-owen",
    },
    {
      name: "Rice University: Jones",
      logo: "/images/school/31_Rice Jones.png",
      country: "United States",
      link: "rice-jones",
    },
    {
      name: "Warwick Business School",
      logo: "/images/school/32_Warwick.png",
      country: "United Kingdom",
      link: "warwick-business-school",
    },
    {
      name: "Indian Institute of Management Bangalore",
      logo: "/images/school/33_IIM Bangalore.jfif",
      country: "India",
      link: "iim-bangalore",
    },
    {
      name: "Nanyang Business School, NTU Singapore",
      logo: "/images/school/34_Nanyang.png",
      country: "Singapore",
      link: "ntu-nanyang",
    },
    {
      name: "IE Business School",
      logo: "/images/school/36_IE.png",
      country: "Spain",
      link: "ie-business-school",
    },
    {
      name: "University of Texas at Austin: McCombs",
      logo: "/images/school/37_Uni Texas Mccombs.png",
      country: "United States",
      link: "ut-mccombs",
    },
    {
      name: "University of Florida: Warrington",
      logo: "/images/school/38_Univ of Florida.jfif",
      country: "United States",
      link: "uf-warrington",
    },
    {
      name: "University of California at Irvine: Merage",
      logo: "/images/school/39_Uni of California.png",
      country: "United States",
      link: "uci-merage",
    },
    {
      name: "Michigan State University: Broad",
      logo: "/images/school/40_Broad.png",
      country: "United States",
      link: "msu-broad",
    },
    {
      name: "Imperial College Business School",
      logo: "/images/school/41_Imperial.png",
      country: "United Kingdom",
      link: "imperial-business-school",
    },
    {
      name: "Indian Institute of Management Calcutta",
      logo: "/images/school/42_IIM C.png",
      country: "India",
      link: "iim-calcutta",
    },
    {
      name: "Babson College: Olin",
      logo: "/images/school/43_Babson.png",
      country: "United States",
      link: "babson-olin",
    },
    {
      name: "Pennsylvania State University: Smeal",
      logo: "/images/school/44_Smeal.png",
      country: "United States",
      link: "pennstate-smeal",
    },
    {
      name: "CUHK Business School",
      logo: "/images/school/45_CUHK.jfif",
      country: "Hong Kong",
      link: "cuhk",
    },
    {
      name: "Indian Institute of Management Ahmedabad",
      logo: "/images/school/46_IIM Ahmedabad.png",
      country: "India",
      link: "iim-ahmedabad",
    },
    {
      name: "Emory University: Goizueta",
      logo: "/images/school/Emory.png",
      country: "United States",
      link: "emory-goizueta",
    },
  ];

  return (
    <>
      <Head>
        <title>School Guide</title>
        <meta
          name="description"
          content="Explore a comprehensive guide to the top MBA colleges worldwide. Discover schools like INSEAD, London Business School, HEC Paris, and more. Make informed decisions for your MBA journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Top MBA Colleges, MBA School Guide, Business Schools, INSEAD, LBS, HEC Paris, Best MBA Programs, CrackAdmission"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>
      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">
            School Guide
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
                Teachers open the door, but you must enter by yourself
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
        <h1 className="text-4xl text-center text-gray-800 mt-10 mb-8 font-bold">
          Top MBA Colleges
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {schools.map((school, index) => (
            <Link href={`/mbaresources/schoolguide/${school.link}`} key={index}>
              <div className="group overflow-hidden border-0 bg-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-lg p-6 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gray-50 p-2">
                    <img
                      src={school.logo}
                      alt={`${school.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800 leading-tight">
                      {school.name}
                    </h3>
                    <span className="text-sm text-gray-600">
                      {school.country}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
