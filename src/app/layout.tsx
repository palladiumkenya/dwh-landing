import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmSans = IBM_Plex_Sans({
    variable: "--font-geist-sans", // You can keep this variable name for compatibility
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Optional: define specific weights
    display: "swap",
});

const ibmMono = IBM_Plex_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
  title: "NASCOP Data Insights",
  description: "NASCOP Data Warehouse Reimagined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmSans.variable} ${ibmMono.variable} antialiased`}
      >
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
