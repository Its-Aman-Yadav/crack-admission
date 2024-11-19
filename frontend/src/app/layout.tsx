import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
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
  title: "Crack Admission",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Achieve your MBA dreams with Crack Admission's personalized consulting services. We specialize in comprehensive application strategies for top business schools like Stanford, INSEAD, Wharton, and more." />
        <meta name="keywords" content="MBA consulting, business school applications, MBA essays, GMAT, GRE, Stanford, INSEAD, Wharton, Harvard, MBA interview prep, scholarship essays" />
        <title>Crack Admission: MBA Consulting Experts</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Navbar included here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
