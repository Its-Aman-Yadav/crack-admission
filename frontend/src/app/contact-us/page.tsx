"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Head from "next/head";
import { useEffect } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import { useRef } from "react";

export default function Component() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);
   // Create a ref for the form
  useEffect(() => {
    document.title = "Contact Us";
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    setIsSubmitting(true);
   
  try {
    // Send form data to EmailJS
    const result = await emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID as string, // Replace with your EmailJS Service ID
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string, // Replace with your EmailJS Template ID
      form.current, // Pass the form reference
      process.env.NEXT_PUBLIC_PUBLIC_KEY as string // Replace with your EmailJS Public Key
    );
    

    console.log("SUCCESS!", result.text);
    alert("Message sent successfully!");
  } catch (error) {
    console.error("FAILED...", error);
    alert("Failed to send message. Please try again.");
  }

  setIsSubmitting(false);
};

  return (
    <>
   
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Schedule a FREE PROFILE EVALUATION Call with one of our experts to learn how we can help you. Get your MBA admissions queries resolved with CrackAdmission."
        />
        <meta
          name="keywords"
          content="Contact CrackAdmission, MBA Profile Evaluation, Free Consultation, MBA Admission Help, MBA Experts, MBA Success Stories"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>
      
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8">
              Free Consultation
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
                  Asking for help is never a sign of weakness
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Schedule a FREE PROFILE EVALUATION Call with one of our experts to
          learn how we can help you.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <input
                  type="text"
                  name="from_email"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200 bg-white/5 backdrop-blur-sm"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200 bg-white/5 backdrop-blur-sm"
                  required
                />
                <input
                  type="tel"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200 bg-white/5 backdrop-blur-sm"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200 bg-white/5 backdrop-blur-sm"
                  required
                />
                <textarea
                  placeholder="Your Message (optional)"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 text-black rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-colors duration-200 bg-white/5 backdrop-blur-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto text-black px-8 py-3 rounded-lg bg-blue-500 font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>
          </div>
          

          {/* Right Column - Info */}
          <div className="lg:pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -top-2 -right-2"></div>
              <h2 className="text-3xl font-bold text-gray-900">
                Get into your Dream B school
              </h2>
              <p className="mt-2 text-gray-600">
                Get a free profile evaluation done today
              </p>

              <div className="mt-8 space-y-4">
                <Link href="https://calendly.com/crackadmission/profileevaluation">
                  <button className="w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </button>
                </Link>

                <a
                  href="https://wa.me/919701215544"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Get Your Quick Answer</span>
                </a>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a
                        href="mailto:contact@crackadmission.com"
                        className="text-blue-500 hover:underline"
                      >
                        contact@crackadmission.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a
                        href="tel:+919701215544"
                        className="text-blue-500 hover:underline"
                      >
                        +91-9701215544
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">USA Address</h3>
                      <p className="text-gray-600">
                        California, USA Winward Way, San Mateo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        India Office
                      </h3>
                      <p className="text-gray-600">
                        New Delhi, India DLF Phase 5, Gurgaon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>

  );
}
