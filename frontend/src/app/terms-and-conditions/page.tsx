"use client";
import { useEffect } from "react";
import Head from "next/head";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Terms and Conditions";
  }, []);
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Review the terms and conditions for using CrackAdmission's services and website. Understand your rights and responsibilities when accessing our platform."
        />
        <meta
          name="keywords"
          content="Terms and Conditions, CrackAdmission, User Agreement, Service Terms, Legal Information"
        />
        <meta name="author" content="CrackAdmission" />
      </Head>

      <div className="container mx-auto px-4 py-16 font-sans">
        {/* Quote Component at the Top */}
        <div className="bg-blue-50 py-12 mb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8">
              Terms and Conditions
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
                  "Please read these Terms and Conditions carefully before using
                  our Service."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Content */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Last Updated: 1st March 2023
          </h2>
          <p className="text-gray-600">
            Please read these Terms and Conditions (“Terms”, “Terms and
            Conditions”) carefully before using the [WEBSITE NAME] website
            and/or mobile application (collectively referred to as the
            “Service”) operated by [CRACKADMISSION TECHNOLOGIES PVT. LTD.]
            (“us”, “we”, or “our”).
          </p>
          <p className="text-gray-600 mt-2">
            Your access to and use of the Service is conditioned on your
            acceptance of and compliance with these Terms. These Terms apply to
            all visitors, users, and others who access or use the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Use of the Service
          </h2>
          <p className="text-gray-600">
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, you may not
            access the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Registration and Accounts
          </h2>
          <p className="text-gray-600">
            To access certain features of the Service, you may be required to
            register and create an account. When you register, you must provide
            accurate and complete information, and you agree to update your
            information as necessary to keep it accurate and complete. You are
            responsible for safeguarding the password that you use to access
            your account and for any activities or actions under your password.
            You agree not to disclose your password to any third party.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Fees and Payments
          </h2>
          <p className="text-gray-600">
            Some features of the Service may require payment of fees. If you
            choose to use these features, you agree to pay all applicable fees
            as described on the Service. All fees are non-transferable unless
            otherwise expressly stated in writing.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of [CRACKADMISSION
            TECHNOLOGIES PVT. LTD.] and its licensors. The Service is protected
            by copyright, trademark, and other intellectual property or
            proprietary rights laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. User Content
          </h2>
          <p className="text-gray-600">
            You may submit, upload, or otherwise provide content to the Service,
            including but not limited to text, images, videos, or other
            materials (collectively, “User Content”). By providing User Content,
            you grant [CRACKADMISSION TECHNOLOGIES PVT. LTD.] a worldwide,
            perpetual, irrevocable, non-exclusive, royalty-free license to use,
            reproduce, modify, adapt, publish, translate, distribute, and
            display your User Content in any media format and through any media
            channels.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Prohibited Conduct
          </h2>
          <p className="text-gray-600">
            You agree not to use the Service in any manner that:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Violates any applicable law, regulation, or guideline;</li>
            <li>
              Infringes the rights of any third party, including without
              limitation, intellectual property, privacy, or publicity rights;
            </li>
            <li>Is fraudulent, deceptive, or misleading;</li>
            <li>Is defamatory, obscene, pornographic, vulgar, or offensive;</li>
            <li>
              Promotes discrimination, bigotry, racism, hatred, harassment, or
              harm against any individual or group;
            </li>
            <li>
              Is violent or threatening or promotes violence or actions that are
              threatening to any person or entity;
            </li>
            <li>Promotes illegal or harmful activities or substances.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by [CRACKADMISSION TECHNOLOGIES
            PVT. LTD.]. We have no control over and assume no responsibility for
            the content, privacy policies, or practices of any third-party
            websites or services. You acknowledge and agree that [CRACKADMISSION
            TECHNOLOGIES PVT. LTD.] is not responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with the use of or reliance on any such content,
            goods, or services available on or through any such websites or
            services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            8. Termination
          </h2>
          <p className="text-gray-600">
            We may terminate or suspend your account and access to the Service
            immediately, without prior notice or liability, for any reason,
            including without limitation if you breach the Terms. Upon
            termination, your right to use the Service will immediately cease.
            If you wish to terminate your account, you may simply discontinue
            using the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            9. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            In no event shall [CRACKADMISSION TECHNOLOGIES PVT. LTD.], its
            directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential or
            punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from (i)
            your access to or use of or inability to access or use the Service;
            (ii) any conduct or content of any third party on the Service; (iii)
            any content obtained from the Service; and (iv) unauthorized access,
            use or alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence) or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed its essential purpose.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            10. Disclaimer
          </h2>
          <p className="text-gray-600">
            Your use of the Service is at your sole risk. The Service is
            provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement,
            or course of performance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            11. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms shall be governed and construed in accordance with the
            laws of [JURISDICTION], without regard to its conflict of law
            provisions. Our failure to enforce any right or provision of these
            Terms will not be considered a waiver of those rights.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            12. Changes
          </h2>
          <p className="text-gray-600">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. We will provide reasonable advance notice
            of any changes by posting the new Terms on this page. By continuing
            to access or use our Service after any revisions become effective,
            you agree to be bound by the revised terms. If you do not agree to
            the new terms, please stop using the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            13. Indemnification
          </h2>
          <p className="text-gray-600">
            You agree to defend, indemnify, and hold harmless [CRACKADMISSION
            TECHNOLOGIES PVT. LTD.], its officers, directors, employees, and
            agents, from and against any and all claims, damages, obligations,
            losses, liabilities, costs or debt, and expenses (including but not
            limited to attorney’s fees) arising from: (i) your use of and access
            to the Service; (ii) your violation of any term of these Terms;
            (iii) your violation of any third-party right, including without
            limitation any copyright, property, or privacy right; or (iv) any
            claim that your User Content caused damage to a third party. This
            defense and indemnification obligation will survive these Terms and
            your use of the Service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            14. Entire Agreement
          </h2>
          <p className="text-gray-600">
            These Terms constitute the entire agreement between you and
            [CRACKADMISSION TECHNOLOGIES PVT. LTD.] concerning your use of the
            Service and supersede any prior agreements, communications, and
            proposals, whether oral or written, between you and [CRACKADMISSION
            TECHNOLOGIES PVT. LTD.] with respect to the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            15. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about these Terms, please contact us at
            [contact@crackadmission.com].
          </p>
        </section>
      </div>
    </>
  );
}
