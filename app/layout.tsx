import type { Metadata } from "next";
import "./globals.css";
import ScrollButton from "@/components/ScrollButton";
import { Lenis } from "@/components/Lenis";
import AnimatedFooter from "@/components/Footer";
import localFont from "next/font/local";
import PageTransition from "@/components/Transition";
import NavBarTest1 from "@/components/Heders/NavbarTest";

const neueMachina = localFont({
  src: "../public/fonts/Neue Machina Inktrap Medium.ttf",
  variable: "--font-neue-machina",
});

export const metadata: Metadata = {
  title: "Be Found Online",
  description: "Be Found Online is a digital marketing agency in Palestine.",
  icons: "/BeFoundLogo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://websiteadmin.befoundonline.ps/wp-content/plugins/elementor/assets/css/frontend.min.css" />
      </head>
      <body className={`${neueMachina.variable}`}>
        <Lenis>
          <PageTransition>
            <NavBarTest1 />
            <ScrollButton />
            <main>{children}</main>
            <section data-color="black">
              <AnimatedFooter />
            </section>
          </PageTransition>
        </Lenis>
      </body>
    </html>
  );
}
