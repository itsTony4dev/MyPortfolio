import type { Metadata } from "next";
import {
  DM_Mono,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { ChatWidgetLazy } from "@/components/layout/ChatWidgetLazy";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = DM_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tonyayda.dev"),
  title: {
    default: "Tony Ayda — Backend Software Engineer",
    template: "%s | Tony Ayda",
  },
  description:
    "Backend software engineer specializing in Node.js, TypeScript, PostgreSQL, and real-time systems. Based in Lebanon.",
  keywords: [
    "Tony Ayda",
    "Backend Engineer",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Software Engineer",
    "Lebanon",
  ],
  authors: [{ name: "Tony Ayda", url: "https://tonyayda.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tonyayda.dev",
    siteName: "Tony Ayda",
    title: "Tony Ayda — Software Engineer",
    description:
      "Backend-focused software engineer specializing in Node.js, TypeScript, PostgreSQL, and real-time systems.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tony Ayda Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tony Ayda — Backend Software Engineer",
    description:
      "Backend software engineer specializing in Node.js, TypeScript, PostgreSQL, and real-time systems.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${code.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-bg text-text antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidgetLazy />
      </body>
    </html>
  );
}
