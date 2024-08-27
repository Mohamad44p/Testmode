import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollButton from "@/components/ScrollButton";
import Navbar from "@/components/Navbar";
import { Lenis } from "@/components/Lenis";
import AnimatedFooter from "@/components/Footer";
import PreloaderWrapper from "@/components/preloader/PreloaderWrapper";
import TransitionLayout from "@/components/TransitionLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";


// Load the custom font
const neueMachina = localFont({
  src: "./Neue Machina Inktrap Medium.ttf",
  variable: "--font-neue-machina",
});

export const metadata: Metadata = {
  title: "Be Found Online",
  description: "Be Found Online is a digital marketing agency in Palestine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Lenis>
      <html lang="en">
        <body className={`${neueMachina.variable}`}>
          <PreloaderWrapper>
            <TransitionLayout>
              <Navbar />
              <ScrollButton />
              <main className="">{children}</main>
              <section data-color="black">
                <AnimatedFooter />
              </section>
            </TransitionLayout>
          </PreloaderWrapper>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </Lenis>
  );
}
