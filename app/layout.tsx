"use client";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          href="https://soltip-widget.vercel.app/static/css/main.971b4cf2.css"
        />
      </Head>

      <body>
        <div className="flex flex-col h-full overflow-hidden bg-theme-background border border-theme-stroke rounded relative">
          <Navbar />
          <section className=" flex-1 relative overflow-auto mt-14 md:mt-0">
            {children}
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
