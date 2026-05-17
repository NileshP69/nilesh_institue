import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shri Amar Computer Institution, Lalgaon | Best Computer Institute",
  description: "Empowering Rural Education Through Technology. Shri Amar Computer Institution, Lalgaon runs under Shri Amar Shiksha Kalyan Samiti. Offering courses like PGDCA, DCA, and Basic Computer.",
  keywords: "Computer Institute, Lalgaon, Rewa, PGDCA, DCA, CPCT, Shri Amar Computer Institution, Education",
  openGraph: {
    title: "Shri Amar Computer Institution, Lalgaon",
    description: "Empowering Rural Education Through Technology. Offering top-tier computer education.",
    url: "https://shriamarcomputer.com",
    siteName: "Shri Amar Computer Institution",
    locale: "en_IN",
    type: "website",
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
      className={`${inter.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[88px]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
