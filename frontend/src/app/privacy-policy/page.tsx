"use client"
import { useEffect } from "react"
import Head from "next/head"

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy";
  }, []);

    return (
      <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Learn how CrackAdmission collects, uses, and protects your information. We are committed to safeguarding your privacy and ensuring transparency in our data practices."
        />
        <meta name="keywords" content="Privacy Policy, Data Protection, CrackAdmission Privacy, User Information Policy" />
        <meta name="author" content="CrackAdmission" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        
        {/* Quote Component at the Top */}
        <div className="bg-blue-50 py-12 mb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center p-3 text-blue-500 mb-8">Privacy Policy</h1>
            <div className="relative">
              <div className="absolute -left-4 top-0 text-blue-500 text-6xl">"</div>
              <div className="absolute -right-4 bottom-0 text-blue-500 text-6xl">"</div>
              <div className="border-t border-b border-blue-300 py-4">
                <p className="text-xl md:text-2xl text-gray-700 italic text-center px-8">
                  "Your privacy is important to us. We are committed to safeguarding and protecting your data."
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Privacy Policy Content */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">WHAT INFORMATION DO WE COLLECT?</h2>
          <p className="text-gray-600">
            We collect information from you when you sign up to access our resources or products, contact us, or fill out any form. When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number, country of residence, gender, or credit card information. You always have the right to refuse to disclose any information about yourself.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">WHAT DO WE USE YOUR INFORMATION FOR?</h2>
          <p className="text-gray-600">
            Any of the information we collect from you may be used in one of the following ways:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>To improve our website – we continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
            <li>To improve customer service – your information helps us to more effectively respond to your customer service requests and support needs. We may keep messages that you send us through the website in order to provide the service you want.</li>
            <li>To inform you – if you sign up for our mailing list, we will inform you about exclusive discounts or promotional offers, featured posts, information about products and services, and news bulletins.</li>
            <li>To process transactions – Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
            <li>To comply with law – we want to ensure that our business operations comply with the legal regulations set forth by any jurisdiction.</li>
          </ul>
          <p className="text-gray-600 mt-4">
            We only send marketing emails to those who have indicated that they would like to receive them. If at any time, you don’t want to be on the mailing list, you can opt out by clicking “unsubscribe” located at the bottom of those emails.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">HOW DO WE PROTECT YOUR INFORMATION?</h2>
          <p className="text-gray-600">
            CrackAdmission takes data security very seriously and works hard to protect user information from misuse or unauthorized access or disclosure. We implement a variety of security measures to maintain the safety of your personal information when you place an order or access your personal information. We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway provider's database, only to be accessible by those authorized with special access rights to such systems and who are required to keep the information confidential. After a transaction, your sensitive, private information (credit cards, social security numbers, financials, etc.) will not be kept in our records.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">DO WE USE COOKIES?</h2>
          <p className="text-gray-600">
            Yes – Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service provider's systems to recognize your browser and capture and remember certain information. For instance, cookies may convey information about users’ usage on the website (including number of views, clicks, and impressions), which allows trusted third parties (Google Analytics) to track the activity on the website over time.
          </p>
          <p className="text-gray-600 mt-2">
            You may, however, visit our site anonymously. Google, as a third party vendor, uses cookies to serve ads on your site. Google’s use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad settings and content network privacy policy. You may also set your web browser to refuse cookies, or to alert you when cookies are being sent.
          </p>
          <p className="text-gray-600 mt-2">
            We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">DO WE DISCLOSE ANY INFORMATION TO OUTSIDE PARTIES?</h2>
          <p className="text-gray-600">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, providing ad services, processing payments, conducting our business (consultants), or servicing you, so long as those parties agree to keep this information confidential. These third parties use your information to provide our services and not for any other purposes.
          </p>
          <p className="text-gray-600 mt-2">
            We may directly collect analytics data through Google Analytics or other third-party analytics platforms to learn about the traffic and usage trends for the website. We collect this data in aggregate form, so it cannot be used to identify any particular individual. This information may be provided to business partners and trusted affiliates for marketing, advertising, or other uses.
          </p>
          <p className="text-gray-600 mt-2">
            We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. If we buy, sell, merge, or partner with other organizations or companies, we may include your personal information among such transactions and transfers.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">ONLINE PRIVACY POLICY ONLY</h2>
          <p className="text-gray-600">
            This online privacy policy applies only to information collected through our website and not to information collected offline.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">YOUR CONSENT</h2>
          <p className="text-gray-600">
            By using our site, you consent to our privacy policy.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">CHANGES TO OUR PRIVACY POLICY</h2>
          <p className="text-gray-600">
            If we decide to change our privacy policy, we will update the Privacy Policy modification date below, and such changes will be effective upon posting. Your continued usage of our website confirms your acceptance of our privacy policy.
          </p>
          <p className="text-gray-600 mt-2">This policy was last modified on 1st March 2023</p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">CONTACTING US</h2>
          <p className="text-gray-600">
            If there are any questions, concerns, or feedback regarding this privacy policy, you may contact us using the information below. In the case of complaints, we will investigate and work to resolve any disputes regarding use and disclosure in accordance with our privacy policy.
          </p>
          <address className="text-gray-600 mt-4">
            <p>www.CrackAdmission.com</p>
            <p>F1 1201 IREO SKYON</p>
            <p>Sec 60 Gurgaon</p>
            <p>India</p>
            <p>contact@CrackAdmission.com</p>
          </address>
        </section>
      </div>
      </>
    );
  }
  