"use client";

import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show navbar on scroll up
      }

      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Reset dropdown visibility on route change
  useEffect(() => {
    setIsVisible(true); // Reset navbar visibility on route change
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isHomePage = pathname === "/";

  const getLinkClassName = (path: string) =>
    `transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-300 whitespace-nowrap ${
      pathname === path
        ? "text-blue-300"
        : isScrolled
        ? "text-gray-800"
        : isHomePage
        ? "text-white"
        : "text-black"
    }`;

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : isHomePage
          ? "bg-transparent py-4"
          : "bg-white py-3"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-lg font-semibold flex items-center ${
                isScrolled
                  ? "hidden"
                  : isHomePage
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              <img src="/images/Logo.svg" alt="" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu
                  className="block h-6 w-6 text-blue-500"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-semibold text-gray-600 space-x-6">
            <Link href="/" className={getLinkClassName("/")}>
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link
                href="/about-us"
                className={`${getLinkClassName(
                  "/about-us"
                )} flex items-center whitespace-nowrap`}
              >
                <span>About Us</span>
                <FiChevronDown
                  className={`ml-2 ${
                    isScrolled
                      ? "text-gray-800"
                      : isHomePage
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                />
              </Link>
              {/* Dropdown menu shown on hover */}
              <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
                <div className="flex flex-col space-y-6">
                  <Link
                    href="/about-us/ourphilosophy"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Our Philosophy
                  </Link>
                  <Link
                    href="/about-us/your-team"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Your Team
                  </Link>
                  <Link
                    href="/about-us/success-recipe"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Success Recipe
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className={`${getLinkClassName(
                  "/services"
                )} flex items-center whitespace-nowrap`}
              >
                <span>Services</span>
                <FiChevronDown
                  className={`ml-2 ${
                    isScrolled
                      ? "text-gray-800"
                      : isHomePage
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                />
              </Link>
              {/* Dropdown menu shown on hover */}
              <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
                <div className="flex flex-col space-y-6">
                  <Link
                    href="/services/mba-profile-accelerator"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    MBA Profile Accelerator
                  </Link>
                  <Link
                    href="/services/comprehensive-consulting"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Comprehensive Consulting
                  </Link>
                  <Link
                    href="/services/consulting/mockinterviews"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Mock Interviews
                  </Link>
                  <Link
                    href="/services/consulting/essay-editing"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Essay Editing
                  </Link>
                  <Link
                    href="/services/consulting/resume"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Resume
                  </Link>
                  <Link
                    href="/services/consulting/recommendation"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Recommendation Letter
                  </Link>
                  <Link
                    href="/services/consulting/scholarships"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Scholarship Essay
                  </Link>
                  <Link
                    href="/services/consulting/re-application"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Re-Application
                  </Link>
                  <Link
                    href="/services/consulting/essay-writing"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Essay Writing
                  </Link>
                  <Link
                    href="/services/consulting/dinganalysis"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Ding Analysis
                  </Link>
                  <Link
                    href="/services/consulting/profile-evaluation"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Profile Evaluation
                  </Link>
                  <Link
                    href="/services/consulting/profilepresentations"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Profile Presentations
                  </Link>
                </div>
              </div>
            </div>

            {/* Success Stories Dropdown */}
            <div className="relative group">
              <Link
                href="/success-stories"
                className={`${getLinkClassName(
                  "/success-stories"
                )} flex items-center whitespace-nowrap`}
              >
                <span>Success Stories</span>
                <FiChevronDown
                  className={`ml-2 ${
                    isScrolled
                      ? "text-gray-800"
                      : isHomePage
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                />
              </Link>
              {/* Dropdown menu shown on hover */}
              <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
                <div className="flex flex-col space-y-6">
                  <Link
                    href="/success-stories/reviews"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Reviews
                  </Link>
                </div>
              </div>
            </div>

            {/* MBA Resources Dropdown */}
            <div className="relative group">
              <Link
                href="/mbaresources"
                className={`${getLinkClassName(
                  "/mbaresources"
                )} flex items-center whitespace-nowrap`}
              >
                <span>MBA Resources</span>
                <FiChevronDown
                  className={`ml-2 ${
                    isScrolled
                      ? "text-gray-800"
                      : isHomePage
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                />
              </Link>
              {/* Dropdown menu shown on hover */}
              <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
                <div className="flex flex-col space-y-6">
                  <Link
                    href="/mbaresources/sample-essays"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Sample Essays
                  </Link>
                  <Link
                    href="/mbaresources/samplescholarshipessays"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Sample Scholarship Essays
                  </Link>
                  <Link
                    href="/mbaresources/samplecvs"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Sample CVs
                  </Link>
                  <Link
                    href="/mbaresources/samplelors"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Sample LORs
                  </Link>
                  <Link
                    href="/mbaresources/sampleprofilepresentations"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Sample Profile Presentations
                  </Link>
                  <Link
                    href="/mbaresources/kirainterviewguide"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    KIRA Interview Guide
                  </Link>
                  <Link
                    href="/mbaresources/sampleinterviewquestions"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Sample Interview Questions
                  </Link>
                  <Link
                    href="/mbaresources/essayanalysis"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    Essay Analysis
                  </Link>
                  <Link
                    href="/mbaresources/schoolguide"
                    className="text-gray-800 hover:text-blue-500 whitespace-nowrap"
                  >
                    School Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Link */}
            <Link href="/blogs" className={getLinkClassName("/blogs")}>
              Blogs
            </Link>
          </div>

          {/* Call to action */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className={`border py-3 px-4 font-semibold rounded-full transition duration-300 ${
                isScrolled
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : isHomePage
                  ? "bg-blue bg-blue-500 hover:bg-blue-500 hover:text-white"
                  : "bg-blue bg-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`text-black block px-3 py-2 rounded-md text-base font-medium`}
              >
                Home
              </Link>
              <div className="flex items-center justify-between px-3 py-2">
                <Link
                  href="/about-us"
                  className={`text-black text-base font-medium`}
                >
                  About Us
                </Link>
                <button
                  onClick={() => toggleDropdown("about")}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <FiChevronDown
                    className={`transform transition-transform text-black ${
                      openDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {openDropdown === "about" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/about-us/ourphilosophy"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Our Philosophy
                  </Link>
                  <Link
                    href="/about-us/your-team"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Your Team
                  </Link>
                  <Link
                    href="/about-us/success-recipe"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Success Recipe
                  </Link>
                </div>
              )}
              <div className="flex items-center justify-between px-3 py-2">
                <Link
                  href="/services"
                  className={`text-black text-base font-medium`}
                >
                  Services
                </Link>
                <button
                  onClick={() => toggleDropdown("services")}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <FiChevronDown
                    className={`transform transition-transform text-black ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {openDropdown === "services" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/mba-profile-accelerator"
                     className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    MBA Profile Accelerator
                  </Link>
                  <Link
                    href="/services/comprehensive-consulting"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Comprehensive Consulting
                  </Link>
                  <Link
                    href="/services/consulting/mockinterviews"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Mock Interviews
                  </Link>
                  <Link
                    href="/services/consulting/essay-editing"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Essay Editing
                  </Link>
                  <Link
                    href="/services/consulting/resume"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Resume
                  </Link>
                  <Link
                    href="/services/consulting/recommendation"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Recommendation Letter
                  </Link>
                  <Link
                    href="/services/consulting/scholarships"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Scholarship Essay
                  </Link>
                  <Link
                    href="/services/consulting/re-application"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Re-Application
                  </Link>
                  <Link
                    href="/services/consulting/essay-writing"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Essay Writing
                  </Link>
                  <Link
                    href="/services/consulting/dinganalysis"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Ding Analysis
                  </Link>
                  <Link
                    href="/services/consulting/profile-evaluation"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Profile Evaluation
                  </Link>
                  <Link
                    href="/services/consulting/profilepresentations"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Profile Presentations
                  </Link>
                </div>
              )}
              <div className="flex items-center justify-between px-3 py-2">
                <Link
                  href="/success-stories"
                  className={`text-black text-base font-medium`}
                >
                  Success Stories
                </Link>
                <button
                  onClick={() => toggleDropdown("success")}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <FiChevronDown
                    className={`transform transition-transform text-black ${
                      openDropdown === "success" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {openDropdown === "success" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/success-stories/reviews"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Reviews
                  </Link>
                </div>
              )}
              <div className="flex items-center justify-between px-3 py-2">
                <Link
                  href="/mbaresources"
                  className={`text-black text-base font-medium`}
                >
                  MBA Resources
                </Link>
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <FiChevronDown
                    className={`transform transition-transform text-black ${
                      openDropdown === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {openDropdown === "resources" && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/mbaresources/sample-essays"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sample Essays
                  </Link>
                  <Link
                    href="/mbaresources/samplescholarshipessays"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sample Scholarship Essays
                  </Link>
                  <Link
                    href="/mbaresources/samplecvs"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sample CVs
                  </Link>
                  <Link
                    href="/mbaresources/samplelors"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sample LORs
                  </Link>
                  <Link
                    href="/mbaresources/sampleprofilepresentations"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sample Profile Presentations
                  </Link>
                  <Link
                    href="/mbaresources/kirainterviewguide"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    KIRA Interview Guide
                  </Link>
                  <Link
                    href="/mbaresources/sampleinterviewquestions"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Sample Interview Questions
                  </Link>
                  <Link
                    href="/mbaresources/essayanalysis"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    Essay Analysis
                  </Link>
                  <Link
                    href="/mbaresources/schoolguide"
                    className="block px-3 py-2 rounded-md text-base font-medium text-black"
                  >
                    School Guide
                  </Link>
                </div>
              )}
              <Link
                href="/blogs"
                className={`text-black block px-3 py-2 rounded-md text-base font-medium`}
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
