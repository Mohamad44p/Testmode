import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollButton from "@/components/ScrollButton";
import Navbar from "@/components/Navbar";
import { Lenis } from "@/components/Lenis";
import AnimatedFooter from "@/components/Footer";
import PreloaderWrapper from "@/components/preloader/PreloaderWrapper";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <PreloaderWrapper>
            <Navbar />
            <ScrollButton />
              <main>{children}</main>
            <section data-color="black">
              <AnimatedFooter />
            </section>
          </PreloaderWrapper>
        </body>
      </html>
    </Lenis>
  );
}
