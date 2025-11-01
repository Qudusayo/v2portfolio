import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fira-code',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
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
