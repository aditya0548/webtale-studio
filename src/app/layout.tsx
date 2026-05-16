import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import { IntroProvider } from "@/components/providers/IntroProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Webtale Studio",
  description: "Cinematic Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <body
        className={`${inter.className} bg-black text-white antialiased`}
      >
        <MotionConfig reducedMotion="user">
          <IntroProvider>
            <SmoothScrollProvider>
              <CustomCursor />
              <Navbar />
              {children}
              <Footer />
            </SmoothScrollProvider>
          </IntroProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
