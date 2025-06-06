import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  display: "swap",
});
const higuen = localFont({
  src: "../fonts/higuen-serif.otf",
  variable: "--higuen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayson Orbita",
  description: "Online Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${higuen.variable} ${montserrat.className} antialiased text-neutral-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
