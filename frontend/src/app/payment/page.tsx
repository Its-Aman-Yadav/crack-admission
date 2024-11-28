'use client';
import { useState } from "react";
import { User, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export default function Component() {

  useEffect(() => {
    document.title = "Payment";
  }, []);
  // Define pricing data with correct typing
  const pricingData: {
    basic: { 1: number };
    advanced: { 1: number };
    pro: { 1: number; 2: number; 3: number; 5: number; 8: number; 10: number };
    mockInterview: { 1: number };
    resumeEditing: { 1: number };
    recommendationLetter: { 1: number; 2: number; 3: number };
    essayEditing: { 300: number; 500: number; 750: number; 1000: number };
    essayWriting: { 300: number; 500: number; 750: number; 1000: number };
    profilePresentation: { 1: number };
    scholarshipEssay: { 1: number };
    reApplicationEssay: { 1: number };
    dingAnalysis: { 1: number };
    profileEvaluation: { 1: number };
    mbaprofileaccelerator: { 1: number };
  } = {
    basic: { 1: 350 },
    advanced: { 1: 450 },
    pro: { 1: 650, 2: 1000, 3: 1400, 5: 2100, 8: 2900, 10: 3400 },
    mockInterview: { 1: 150 },
    resumeEditing: { 1: 150 },
    recommendationLetter: { 1: 150, 2: 300, 3: 450 }, // Pricing based on quantity
    essayEditing: { 300: 100, 500: 150, 750: 200, 1000: 225 }, // Pricing based on word count for editing
    essayWriting: { 300: 130, 500: 200, 750: 275, 1000: 300 }, // Pricing based on word count for writing
    profilePresentation: { 1: 200 },
    scholarshipEssay: { 1: 150 },
    reApplicationEssay: { 1: 150 },
    dingAnalysis: { 1: 150 },
    profileEvaluation: { 1: 100 }, 
    mbaprofileaccelerator: { 1: 300 },
  };

  // Define initial form data and state
  const [formData, setFormData] = useState({
    serviceType: "comprehensive",
    packageType: "pro",
    schoolCount: "1",
    quantity: "1",
    numEssays: "1",
    wordCount: "300",
    amount: 350,
  });

  const updateAmount = (
    serviceType: ServiceType,
    schoolCount: SchoolCount,
    packageType: PackageType,
    quantity: Quantity,
    numEssays: NumEssays,
    wordCount: WordCount
  ) => {
    const selectedPackage = serviceType === "comprehensive" && schoolCount !== "1" ? "pro" : packageType;
    const count = parseInt(schoolCount, 10);
    const qty = parseInt(quantity, 10) as keyof typeof pricingData.recommendationLetter;
    const words = parseInt(wordCount, 10) as keyof typeof pricingData.essayEditing;
    const essays = parseInt(numEssays, 10);

    let amount = 0;
    if (serviceType === "mockInterview" || serviceType === "resumeEditing") {
      amount = pricingData[serviceType][1];
    } else if (serviceType === "recommendationLetter") {
      amount = pricingData.recommendationLetter[qty] || 0;
    } else if (serviceType === "scholarshipEssay" || serviceType === "reApplicationEssay" ||      serviceType === "dingAnalysis") {
      amount = pricingData.scholarshipEssay[1]; // All these are priced at 150
    }else if (serviceType === "profilePresentation") {
      amount = pricingData.profilePresentation[1];
    } else if (serviceType === "profileEvaluation") {
      amount = pricingData.profileEvaluation[1]; // Profile Evaluation priced at 100
    }
    else if (serviceType === "mbaprofileaccelerator") {
      amount = pricingData.mbaprofileaccelerator[1];
    }
    else if (serviceType === "essayEditing") {
      amount = (pricingData.essayEditing[words] || 0) * essays;
    } else if (serviceType === "essayWriting") {
      amount = (pricingData.essayWriting[words] || 0) * essays;
    } else if (selectedPackage === "pro") {
      amount = pricingData.pro[count as keyof typeof pricingData.pro] || 0;
    } 
    
    else {
      amount = pricingData[selectedPackage][1];
    }

    setFormData({ ...formData, serviceType, schoolCount, packageType: selectedPackage, quantity, numEssays, wordCount, amount });
  };

  // Define types for service type, package type, school count, quantity, num essays, and word count
  type ServiceType = "mbaprofileaccelerator" | "comprehensive" | "mockInterview" | "resumeEditing" | "essayEditing" | "essayWriting" | "recommendationLetter" | "profilePresentation" | "scholarshipEssay" | "reApplicationEssay" | "dingAnalysis"| "profileEvaluation";
  type PackageType = "basic" | "advanced" | "pro";
  type SchoolCount = "1" | "2" | "3" | "5" | "8" | "10";
  type Quantity = "1" | "2" | "3";
  type NumEssays = "1" | "2" | "3";
  type WordCount = "300" | "500" | "750" | "1000";

  const [showModal, setShowModal] = useState(false);

  const handlePayNow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
     <>
      <Head>
        <title>Payment</title>
        <meta
          name="description"
          content="Choose your personalized consulting packages for MBA applications, resume editing, essay writing, and more. Start your journey to your dream school today."
        />
        <meta
          name="keywords"
          content="MBA consulting, essay editing, resume editing, scholarship essay, mock interview, recommendation letter, profile evaluation"
        />
        <meta name="author" content="CrackAdmission" />
        <meta property="og:title" content="Payment - CrackAdmission" />
        <meta
          property="og:description"
          content="Select from various MBA consulting services tailored to your needs. Comprehensive packages, mock interviews, essay editing, and more."
        />
        <meta property="og:url" content="https://crackadmission.com/payment" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-blue-50 py-12 mb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center p-3 mt-5 text-blue-500 mb-8">Payment</h1>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
            <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
            <div className="border-t border-b border-blue-300 py-4">
              <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                Be with someone who brings out the best in you. We are that someone
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen">
        <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-5xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-black text-primary">Package Selection</h1>
          </div>
          <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <div className="text-2xl font-semibold text-black text-primary">Choose Your Package</div>
              <div className="space-y-6 mt-4">
                <div className="space-y-4">
                  {/* Service Type Selection */}
                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="text-sm font-medium text-gray-600 text-muted-foreground">Service Type</label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => updateAmount(e.target.value as ServiceType, formData.schoolCount as SchoolCount, formData.packageType as PackageType, formData.quantity as Quantity, formData.numEssays as NumEssays, formData.wordCount as WordCount)}
                      className="w-full p-2 border text-gray-800 border-gray-300 rounded-lg"
                    >
                      <option value="mbaprofileaccelerator">MBA Profile Accelerator</option>
                      <option value="comprehensive">Comprehensive Consulting</option>
                      <option value="mockInterview">Mock Interview</option>
                      <option value="resumeEditing">Resume Editing</option>
                      <option value="essayEditing">Essay Editing</option>
                      <option value="essayWriting">Essay Writing</option>
                      <option value="recommendationLetter">Recommendation Letter</option>
                      <option value="profilePresentation">Profile Presentation</option>
                      <option value="scholarshipEssay">Scholarship Essay</option>
                      <option value="reApplicationEssay">Re-Application Essay</option>
                      <option value="dingAnalysis">Ding Analysis</option>
                      <option value="profileEvaluation">Profile Evaluation</option>
                    </select>
                  </div>

                  {/* School Count (only for Comprehensive Consulting) */}
                  {formData.serviceType === "comprehensive" && (
                    <div className="space-y-2">
                      <label htmlFor="schoolCount" className="text-sm font-medium text-gray-600 text-muted-foreground">Number of Schools</label>
                      <select
                        id="schoolCount"
                        value={formData.schoolCount}
                        onChange={(e) => updateAmount(formData.serviceType as ServiceType, e.target.value as SchoolCount, formData.packageType as PackageType, formData.quantity as Quantity, formData.numEssays as NumEssays, formData.wordCount as WordCount)}
                        className="w-full p-2 border text-gray-800 border-gray-300 rounded-lg"
                      >
                        {[1, 2, 3, 5, 8, 10].map((num) => (
                          <option key={num} value={num.toString()}>{num} School(s)</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Package Type (only if schoolCount is 1 for comprehensive) */}
                  {formData.serviceType === "comprehensive" && formData.schoolCount === "1" && (
                    <div className="space-y-2">
                      <label htmlFor="packageType" className="text-sm font-medium text-gray-600 text-muted-foreground">Package Type</label>
                      <select
                        id="packageType"
                        value={formData.packageType}
                        onChange={(e) => updateAmount(formData.serviceType as ServiceType, formData.schoolCount as SchoolCount, e.target.value as PackageType, formData.quantity as Quantity, formData.numEssays as NumEssays, formData.wordCount as WordCount)}
                        className="w-full p-2 border text-gray-800 border-gray-300 rounded-lg"
                      >
                        <option value="basic">Basic</option>
                        <option value="advanced">Advanced</option>
                        <option value="pro">Pro</option>
                      </select>
                    </div>
                  )}

                  {/* Quantity (only for Recommendation Letter) */}
                  {formData.serviceType === "recommendationLetter" && (
                    <div className="space-y-2">
                      <label htmlFor="quantity" className="text-sm font-medium text-gray-600 text-muted-foreground">Quantity</label>
                      <select
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => updateAmount(formData.serviceType as ServiceType, formData.schoolCount as SchoolCount, formData.packageType as PackageType, e.target.value as Quantity, formData.numEssays as NumEssays, formData.wordCount as WordCount)}
                        className="w-full p-2 border text-gray-800 border-gray-300 rounded-lg"
                      >
                        {[1, 2, 3].map((qty) => (
                          <option key={qty} value={qty.toString()}>{qty}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Number of Essays and Word Count (for Essay Editing and Essay Writing) */}
                  {(formData.serviceType === "essayEditing" || formData.serviceType === "essayWriting") && (
                    <>
                      <div className="space-y-2">
                        <label htmlFor="numEssays" className="text-sm font-medium text-gray-600 text-muted-foreground">Number of Essays</label>
                        <select
                          id="numEssays"
                          value={formData.numEssays}
                          onChange={(e) => updateAmount(formData.serviceType as ServiceType, formData.schoolCount as SchoolCount, formData.packageType as PackageType, formData.quantity as Quantity, e.target.value as NumEssays, formData.wordCount as WordCount)}
                          className="w-full p-2 border text-gray-800 border-gray-300 rounded-lg"
                        >
                          {[1, 2, 3].map((num) => (
                            <option key={num} value={num.toString()}>{num} Essay(s)</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="wordCount" className="text-sm font-medium text-gray-600 text-muted-foreground">Word Count</label>
                        <select
                          id="wordCount"
                          value={formData.wordCount}
                          onChange={(e) => updateAmount(formData.serviceType as ServiceType, formData.schoolCount as SchoolCount, formData.packageType as PackageType, formData.quantity as Quantity, formData.numEssays as NumEssays, e.target.value as WordCount)}
                          className="w-full p-2 border text-gray-800 border-gray-300 rounded-lg"
                        >
                          {[300, 500, 750, 1000].map((words) => (
                            <option key={words} value={words.toString()}>{words} Words</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}
                </div>

                {/* User Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-600 text-muted-foreground">Full Name</label>
                    <div className="relative">
                      <User className="absolute text-blue-400 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="fullName"
                        placeholder="Enter your name"
                        className="w-full pl-10 p-2 text-black border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-600 text-muted-foreground">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute text-blue-400 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full pl-10 p-2 text-black border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-medium text-gray-600 text-muted-foreground">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute text-blue-400 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <input
                        id="mobile"
                        type="number"
                        placeholder="Enter mobile number"
                        className="w-full text-black pl-10 p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
              <div className="text-2xl text-black font-semibold text-primary">Summary</div>
              <div className="space-y-6 mt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground text-black">Service Type:</span>
                    <span className="font-medium text-gray-800">
                      {formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1)}
                    </span>
                  </div>
                  {formData.serviceType === "comprehensive" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-black text-muted-foreground">Number of Schools</span>
                        <span className="font-medium text-black">{formData.schoolCount}</span>
                      </div>
                      {formData.schoolCount === "1" && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground text-black">Package Type:</span>
                          <span className="font-medium text-gray-800">
                            {formData.packageType.charAt(0).toUpperCase() + formData.packageType.slice(1)}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                  {formData.serviceType === "recommendationLetter" && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground text-black">Quantity:</span>
                      <span className="font-medium text-gray-800">{formData.quantity}</span>
                    </div>
                  )}
                  {(formData.serviceType === "essayEditing" || formData.serviceType === "essayWriting") && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground text-black">Number of Essays:</span>
                        <span className="font-medium text-gray-800">{formData.numEssays}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground text-black">Word Count:</span>
                        <span className="font-medium text-gray-800">{formData.wordCount}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm text-muted-foreground text-black">Amount</span>
                    <div>
                      <span className="font-bold text-lg text-black text-primary">
                        ${formData.amount.toFixed(2)}
                      </span>
                      <span className="text-muted-foreground text-gray-700 text-xs ml-2">
                        (₹ {(formData.amount * 84).toFixed(2)})
                      </span>
                    </div>
                  </div>
                </div>
                <Link href="/payment/pay">
                <button className="w-full p-4 font-medium text-white bg-blue-800 bg-primary rounded-lg transition-all duration-300 ease-in-out hover:scale-105">
                  Pay Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
