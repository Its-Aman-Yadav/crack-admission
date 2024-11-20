import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaComments } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B2431] text-white py-16 relative">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">
            Ready to transform your career?
          </h2>
          <Link href="/contact-us">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
            Contact Us
          </button>
          </Link>
        </div>
        <hr className="my-8 border-t-2 border-white opacity-50" />

        {/* Main footer content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <li><Link href="/services/comprehensive-consulting" className="hover:underline">Comprehensive Consulting</Link></li>
              <li><Link href="/services/consulting/mockinterviews" className="hover:underline">Mock Interviews</Link></li>
              <li><Link href="/services/consulting/essay-editing" className="hover:underline">Essay Editing</Link></li>
              <li><Link href="/services/consulting/resume" className="hover:underline">Resume</Link></li>
              <li><Link href="/services/consulting/recommendation" className="hover:underline">Recommendation Letter</Link></li>
              <li><Link href="/services/consulting/scholarships" className="hover:underline">Scholarship Essay</Link></li>
              <li><Link href="/services/consulting/re-application" className="hover:underline">Re-Application</Link></li>
              <li><Link href="/services/consulting/essay-writing" className="hover:underline">Essay Writing</Link></li>
              <li><Link href="/services/consulting/dinganalysis" className="hover:underline">Ding Analysis</Link></li>
              <li><Link href="/services/consulting/profile-evaluation" className="hover:underline">Profile Evaluation</Link></li>
              <li><Link href="/services/consulting/profilepresentations" className="hover:underline">Profile Presentation</Link></li>
            </ul>
          </div>

          {/* MBA Resources Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">MBA Resources</h3>
            <ul>
              <li><Link href="/mbaresources/sample-essays" className="hover:underline">Sample Essays</Link></li>
              <li><Link href="/mbaresources/samplescholarshipessays" className="hover:underline">Sample Scholarship Essays</Link></li>
              <li><Link href="/mbaresources/samplecvs" className="hover:underline">Sample CVs</Link></li>
              <li><Link href="/mbaresources/samplelors" className="hover:underline">Sample LORs</Link></li>
              <li><Link href="/mbaresources/sampleprofilepresentations" className="hover:underline">Sample Profile Presentations</Link></li>
              <li><Link href="/mbaresources/kirainterviewguide" className="hover:underline">KIRA Interview Guide</Link></li>
              <li><Link href="/mbaresources/sampleinterviewquestions" className="hover:underline">Sample Interview Questions</Link></li>
              <li><Link href="/mbaresources/essayanalysis" className="hover:underline">Essay Analysis</Link></li>
              <li><Link href="/mbaresources/schoolguide" className="hover:underline">School Guide</Link></li>
            </ul>
          </div>

          {/* Success Stories Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Success Stories</h3>
            <ul>
              <li><Link href="/success-stories" className="hover:underline">Admitted Clients</Link></li>
              <li><Link href="/success-stories/reviews" className="hover:underline">Reviews</Link></li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Important Links</h3>
            <ul>
              <li><Link href="/contact-us" className="hover:underline">Book Now</Link></li>
              <li><Link href="https://calendly.com/crackadmission/profileevaluation" className="hover:underline">Setup a Meeting</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Crack Admission Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Crack Admission</h3>
            <p>CrackAdmission Technologies Pvt. Ltd</p>
            <p>All rights reserved</p>
            <p className="mb-4">CIN: U74140HR2021PTC099570</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/crackadmission" aria-label="Facebook" className="text-white">
                <FaFacebook className="h-6 w-6" />
              </Link>
              <Link href="https://x.com/CrackAdmission" aria-label="Twitter" className="text-white">
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/crackadmission/?hl=en" aria-label="Instagram" className="text-white">
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/@crackadmission3751" aria-label="YouTube" className="text-white">
                <FaYoutube className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/crackadmission/posts/?feedView=all" aria-label="LinkedIn" className="text-white">
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link href="https://gmatclub.com/forum/members/member-661571.html" aria-label="GMAT Club" className="text-white">
                <FaComments className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Links for Privacy Policy, Terms & Conditions, and FAQs */}
      <div className="mt-5 ml-6 bottom-5 right-5 flex space-x-5 whitespace-nowrap">
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
        <Link href="/faq" className="hover:underline">FAQs</Link>
      </div>
    </footer>
  );
};

export default Footer;
