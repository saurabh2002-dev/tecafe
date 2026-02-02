import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// Global styles loaded on all pages
import "@/styles/bootstrap.min.css";
import "@/styles/animate.css";
import "@/styles/custom.css";
import "@/styles/footer-modern.css";
import "@/styles/header-modern.css";
import "@/styles/modern-2025.css";
import "@/styles/service-modern.css";
import "@/styles/blog-modern.css";
import "@/styles/blog-post.css";
import "@/styles/contact-modern.css";
import "@/styles/custom-devops-centered.css";
import "@/styles/case-study-modern.css";
import "./globals.css";

// Removed Font Awesome CSS (replaced with react-icons) - Saves ~140KB
// All other CSS remains loaded globally for now (can optimize per-route later)

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tecafe.com'),
  title: "Tecafe - AI-Powered Solutions | Generative AI, RAG & MCP",
  description: "Transform your business with AI-powered solutions including Generative AI, Agentic AI, RAG Systems, and MCP Integration.",
  applicationName: "Tecafe",
  keywords: ["AI Solutions", "Generative AI", "Agentic AI", "RAG Systems", "MCP Integration", "Machine Learning", "Digital Transformation"],
  authors: [{ name: "Tecafe" }],
  openGraph: {
    title: "Tecafe - AI-Powered Digital Solutions",
    description: "Leading provider of AI-powered solutions including Generative AI, Agentic AI, RAG Systems, and MCP Integration.",
    images: ['/opengraph-image.jpg'],
    type: 'website',
    siteName: "Tecafe",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tecafe - AI-Powered Solutions",
    description: "Transform your business with cutting-edge AI solutions",
    images: ['/opengraph-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${manrope.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
