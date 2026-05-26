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
  // We use a dedicated /og-image.png at the recommended 1200×630 OG ratio
  // (1.91:1) rather than the page banner — the page banner is cropped to
  // 3:1 which gets letterboxed or center-cropped by social platforms.
  // Every shared link now renders cleanly at the size each platform reserves.
  openGraph: {
    type: "website",
    siteName: "MyCompanionApps",
    title: "MyCompanionApps",
    description: "Where your real life and your AI companion meet.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
      <head><meta name="p:domain_verify" content="1849040e58f1fd56cee76fc2e7b37f08" /></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
