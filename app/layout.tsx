import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YWGNHS7MP7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YWGNHS7MP7');

          // Engagement time goes to the right page (Nov 2026 fix). Next.js changes pages without
          // reloading, and GA4 attaches the time spent on a page to the NEXT event it sends — on a
          // plain link that was the next page's page_view, so a tip's time was credited to the tips
          // list. Just before each page change, send a small page_leave event that still carries the
          // page being left; the time lands there and the next page starts from zero.
          (function () {
            var lastHref = location.href, lastTitle = document.title;
            function leave() {
              gtag('event', 'page_leave', { page_location: lastHref, page_title: lastTitle });
            }
            var push = history.pushState;
            history.pushState = function (state, unused, url) {
              var next = url == null ? location.href : new URL(String(url), location.href).href;
              if (next.split('#')[0] !== location.href.split('#')[0]) { lastHref = location.href; lastTitle = document.title; leave(); }
              var result = push.apply(this, arguments);
              lastHref = location.href;
              return result;
            };
            var replace = history.replaceState;
            history.replaceState = function () {
              var result = replace.apply(this, arguments);
              lastHref = location.href;
              return result;
            };
            // Back / forward: the address has already changed, so use the page we were on.
            window.addEventListener('popstate', function () {
              if (location.href.split('#')[0] !== lastHref.split('#')[0]) leave();
              lastHref = location.href;
            }, true);
            // Keep the title current once the new page has set it.
            new MutationObserver(function () { if (location.href === lastHref) lastTitle = document.title; })
              .observe(document.querySelector('head') || document.documentElement, { subtree: true, childList: true, characterData: true });
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
