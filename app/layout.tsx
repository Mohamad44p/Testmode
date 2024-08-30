import type { Metadata } from "next";
import "./globals.css";
import ScrollButton from "@/components/ScrollButton";
import Navbar from "@/components/Navbar";
import { Lenis } from "@/components/Lenis";
import AnimatedFooter from "@/components/Footer";
import PreloaderWrapper from "@/components/preloader/PreloaderWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import PageTransition from "@/components/Transition";

const neueMachina = localFont({
  src: "../public/fonts/Neue Machina Inktrap Medium.ttf",
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
    <html lang="en">
      <body className={`${neueMachina.variable}`}>
        <Lenis>
          <PreloaderWrapper>
            <PageTransition>
              <Navbar />
              <ScrollButton />
              <main className="">{children}</main>
              <section data-color="black">
                <AnimatedFooter />
              </section>
            </PageTransition>
          </PreloaderWrapper>
        </Lenis>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
