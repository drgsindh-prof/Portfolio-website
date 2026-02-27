import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prof. (Dr.) Gurinder Singh | Group Vice Chancellor, Amity Universities",
  description:
    "Prof. (Dr.) Gurinder Singh - The Visionary Architect of Global Education. Group Vice Chancellor of Amity Universities with 28+ years transforming Indian higher education through global partnerships and cutting-edge research.",
  keywords: [
    "Gurinder Singh",
    "Amity University",
    "Group Vice Chancellor",
    "Global Education",
    "International Business",
    "Higher Education Leader",
    "AIBS",
  ],
  authors: [{ name: "Prof. (Dr.) Gurinder Singh" }],
  openGraph: {
    title: "Prof. (Dr.) Gurinder Singh | Group Vice Chancellor",
    description: "The Visionary Architect of Global Education",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0A0A0F] text-white`}
      >
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
