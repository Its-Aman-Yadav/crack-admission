'use client';
import { Download } from "lucide-react";
import { useEffect } from "react";
import Head from "next/head";

export default function Component() {
  useEffect(() => {
    document.title = "Sample Profile Presentation";
  }, []);

  return (
    <>
      <Head>
        <title>Sample Profile Presentation</title>
        <meta
          name="description"
          content="Explore curated Sample Profile Presentations from HEC, IE, LBS, and more. Gain insights into crafting impactful and personalized presentations to stand out in your applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Sample Profile Presentations, MBA Applications, HEC Presentations, IE Presentations, LBS Profile, MBA Application Tips, Profile Templates"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>

      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">
            Sample Profile Presentations
          </h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                No one is you and that is your super power
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-black font-semibold">Profile Presentations</h1>
        </div>

        <div className="grid gap-6">
          {/* HEC Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
            <div className="bg-blue-500 p-4">
              <h2 className="text-lg text-white font-medium">HEC</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-700">Share a presentation on a topic of your choice</h3>
                </div>
                <a
                  href="https://drive.google.com/file/d/1BTndl7wpZ6JaY7-rOZyT_fnz_2kogSBQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* IE Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
            <div className="bg-blue-500 p-4">
              <h2 className="text-lg text-white font-medium">IE</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="font-medium text-blue-700">What is the most important thing that you would like us to know?</h3>
                </div>
                <a
                  href="https://drive.google.com/file/d/1KeitC8FfhL7D4GfOUviAYYw_F0JMZOac/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-2 mr-4">
                  <h3 className="font-medium text-blue-700">
                    What is the most important thing that you would like us to know that is not in your resume or application?
                  </h3>
                </div>
                <a
                  href="https://drive.google.com/file/d/143jnfEXDoEokSaCn_0qL3fm8sHl0i9ag/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* LBS Section */}
          <div className="border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
            <div className="bg-blue-500 p-4">
              <h2 className="text-lg text-white font-medium">LBS</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2 mr-4">
                  <h3 className="font-medium text-blue-700">Why should we select you to join the Executive MBA class?</h3>
                </div>
                <a
                  href="https://drive.google.com/file/d/1rxybSo6RB48VaOSvMBTU3zh2ITxEKXwB/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
