import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Custom font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the site
export const metadata: Metadata = {
  title: "Crack Admission: MBA Admission Consulting Experts",
  description:
    "Achieve your MBA dreams with Crack Admission's personalized consulting services. We specialize in comprehensive application strategies for top business schools like Stanford, INSEAD, Wharton, and more.",
  keywords:
    "MBA consulting, business school applications, MBA essays, GMAT, GRE, Stanford, INSEAD, Wharton, Harvard, MBA interview prep, scholarship essays",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N2MK8ZFX');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Achieve your MBA dreams with Crack Admission's personalized consulting services. We specialize in comprehensive application strategies for top business schools like Stanford, INSEAD, Wharton, and more."
        />
        <meta
          name="keywords"
          content="MBA consulting, business school applications, MBA essays, GMAT, GRE, Stanford, INSEAD, Wharton, Harvard, MBA interview prep, scholarship essays"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2MK8ZFX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar /> {/* Navbar included here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
