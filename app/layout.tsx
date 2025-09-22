"use client";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import Head from "next/head";
import WorkInProgressCover from "@/components/cover";

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
        <WorkInProgressCover />
        <div
          id="soltip-widget"
          owner-data="EFzmBNRFz8cDpUrN8vMjh7jQexiWQr5E7LTzH9vokLMN"
        ></div>
        <div className="flex flex-col h-full overflow-hidden bg-theme-background border border-theme-stroke rounded relative">
          <Navbar />
          <section className=" flex-1 relative overflow-auto mt-14 md:mt-0">
            {children}
          </section>
          <Footer />
        </div>
      </body>
      <Script
        src="https://soltip-widget.vercel.app/static/js/soltip-widget.js"
        id="soltip-widget"
        data-config="{'owner-data': 'EFzmBNRFz8cDpUrN8vMjh7jQexiWQr5E7LTzH9vokLMN', 'config': {'targetElementId': 'soltip-widget'}}"
      />
    </html>
  );
}
