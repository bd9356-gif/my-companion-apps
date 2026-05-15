import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mycompanionapps.com"),
  title: "MyCompanionApps",
  description:
    "Where your real life and your AI companion meet.",
  applicationName: "MyCompanionApps",
  // Open Graph + Twitter Card metadata. Drives the preview image,
  // title, and description that appear when the URL is shared on
  // iMessage, WhatsApp, Twitter/X, LinkedIn, Slack, Facebook, etc.
  // The banner image is the brand banner — every shared link instantly
  // markets the app family.
  openGraph: {
    type: "website",
    siteName: "MyCompanionApps",
    title: "MyCompanionApps",
    description: "Where your real life and your AI companion meet.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "MyCompanionApps — where your real life and your AI companion meet.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCompanionApps",
    description: "Where your real life and your AI companion meet.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
