'use client';

import Link from 'next/link';
import { FC, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Reset dropdown visibility on route change
  useEffect(() => {
    setIsVisible(true); // Reset navbar visibility on route change
  }, [pathname]);

  const isHomePage = pathname === '/';

  const getLinkClassName = (path: string) =>
    `transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-300 whitespace-nowrap ${
      pathname === path
        ? 'text-blue-300'
        : isScrolled
        ? 'text-gray-800'
        : isHomePage
        ? 'text-white'
        : 'text-gray-600'
    }`;

  return (
    <nav
      className={`fixed w-full z-50 p-10 transition-transform duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : isHomePage ? 'bg-transparent py-4' : 'bg-white py-3'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-lg font-semibold flex items-center ${
                isScrolled ? 'hidden' : isHomePage ? 'text-white' : 'text-gray-600'
              }`}
            >
              <img src="/images/Logo.svg" alt="" />
            </Link>
          </div>

          {/* Menu */}
          <div className="flex font-semibold text-gray-600 space-x-6">
            <Link href="/" className={getLinkClassName('/')}>Home</Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link href="/about-us" className={`${getLinkClassName('/about-us')} flex items-center whitespace-nowrap`}>
                <span>About Us</span>
                <FiChevronDown
                  className={`ml-2 ${isScrolled ? 'text-gray-800' : isHomePage ? 'text-white' : 'text-gray-600'}`}
                />
              </Link>
              {/* Dropdown menu shown on hover */}
              <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
                <div className="flex flex-col space-y-6">
                  <Link href="/about-us/ourphilosophy" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
                    Our Philosophy
                  </Link>
                  <Link href="/about-us/your-team" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
                    Your Team
                  </Link>
                  <Link href="/about-us/sucess-recipe" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
                    Success Recipe
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
  <Link href="/services" className={`${getLinkClassName('/services')} flex items-center whitespace-nowrap`}>
    <span>Services</span>
    <FiChevronDown
      className={`ml-2 ${isScrolled ? 'text-gray-800' : isHomePage ? 'text-white' : 'text-gray-600'}`}
    />
  </Link>
  {/* Dropdown menu shown on hover */}
  <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
    <div className="flex flex-col space-y-6">
      <Link href="/services/comprehensive-consulting" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Comprehensive Consulting
      </Link>
      <Link href="/services/consulting/mockinterviews" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Mock Interviews
      </Link>
      <Link href="/services/consulting/essay-editing" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Essay Editing
      </Link>
      <Link href="/services/consulting/resume" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Resume
      </Link>
      <Link href="/services/consulting/recommendation" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Recommendation Letter
      </Link>
      <Link href="/services/consulting/scholarshipessay" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Scholarship Essay
      </Link>
      <Link href="/services/consulting/re-application" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Re-Application
      </Link>
      <Link href="/services/consulting/essay-writing" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Essay Writing
      </Link>
      <Link href="/services/consulting/dinganalysis" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Ding Analysis
      </Link>
      <Link href="/services/consulting/profile-evaluation" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Profile Evaluation
      </Link>
      <Link href="/services/consulting/profilepresentations" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Profile Presentations
      </Link>
    </div>
  </div>
</div>

              {/* Dropdown menu shown on hover */}

            {/* Success Stories Dropdown */}
            <div className="relative group">
              <Link href="/success-stories" className={`${getLinkClassName('/success-stories')} flex items-center whitespace-nowrap`}>
                <span>Success Stories</span>
                <FiChevronDown
                  className={`ml-2 ${isScrolled ? 'text-gray-800' : isHomePage ? 'text-white' : 'text-gray-600'}`}
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
  <Link href="/mbaresources" className={`${getLinkClassName('/mbaresources')} flex items-center whitespace-nowrap`}>
    <span>MBA Resources</span>
    <FiChevronDown
      className={`ml-2 ${isScrolled ? 'text-gray-800' : isHomePage ? 'text-white' : 'text-gray-600'}`}
    />
  </Link>
  {/* Dropdown menu shown on hover */}
  <div className="absolute hidden group-hover:flex bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out -left-1/2 top-full pointer-events-auto">
    <div className="flex flex-col space-y-6">
      <Link href="/mbaresources/sample-essays" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Sample Essays
      </Link>
      <Link href="/mbaresources/samplescholarshipessays" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Sample Scholarship Essays
      </Link>
      <Link href="/mbaresources/samplecvs" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Sample CVs
      </Link>
      <Link href="/mbaresources/samplelors" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Sample LORs
      </Link>
      <Link href="/mbaresources/sampleprofilepresentations" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Sample Profile Presentations
      </Link>
      <Link href="/mbaresources/kirainterviewguide" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        KIRA Interview Guide
      </Link>
      <Link href="/mbaresources/sampleinterviewquestions" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Sample Interview Questions
      </Link>
      <Link href="/mbaresources/essayanalysis" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        Essay Analysis
      </Link>
      <Link href="/mbaresources/schoolguide" className="text-gray-800 hover:text-blue-500 whitespace-nowrap">
        School Guide
      </Link>
    </div>
  </div>
</div>


            {/* Blog Link */}
            <Link href="/blogs" className={getLinkClassName('/blogs')}>Blogs</Link>
          </div>

          {/* Call to action */}
          <div>
            <Link
              href="/contact-us"
              className={`border py-3 px-4 font-semibold rounded-full transition duration-300 ${
                isScrolled
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : isHomePage
                  ? 'bg-blue bg-blue-500 hover:bg-blue-500 hover:text-white'
                  : 'bg-blue bg-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
