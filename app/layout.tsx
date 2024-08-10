import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollButton from "@/components/ScrollButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ScrollButton />
        <main>{children}</main>
        <section data-color="black">
          <Footer />
        </section>
      </body>
    </html>
  );
}
