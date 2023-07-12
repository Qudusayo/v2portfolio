"use client";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-full">
          <Navbar />
          <section className=" flex-1 relative md:overflow-auto md:mt-14">
            {children}
          </section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
