import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importing Navbar component
import Footer from "@/components/Footer"; // Importing Footer component

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
  description: "Common Dream, Unique Journeys ... With over 6 years of work experience. Stanford has been his lifelong dream, but, he does not want to be type casted as the ...",
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
        <title>Crack Admission</title>
        <meta name="description" content="Common Dream, Unique Journeys ... With over 6 years of work experience. Stanford has been his lifelong dream, but, he does not want to be type casted as the ..." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> {/* Navbar included here */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
