import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevBlog – Web Development, Next.js, React Tutorials",
    template: "%s | DevBlog",
  },
  description:
    "Learn Next.js, React, JavaScript, and modern web development tutorials with real-world examples and best practices.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Web Development",
    "Frontend Development",
    "TypeScript",
    "Tailwind CSS",
    "Programming Tutorials",
  ],
  authors: [{ name: "Saneesh" }],
  creator: "Saneesh",
  metadataBase: new URL("https://blog.saneesh.shop"),
  openGraph: {
    title: "DevBlog – Web Development Tutorials",
    description: "Learn modern web development with practical tutorials and guides",
    url: "https://blog.saneesh.shop",
    siteName: "DevBlog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevBlog - Web Development Tutorials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevBlog – Web Development Tutorials",
    description: "Learn modern web development with practical tutorials",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
