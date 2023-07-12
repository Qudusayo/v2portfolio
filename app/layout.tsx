"use client";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.MainLayout}>
          <Navbar />
          <section className={styles.MainLayoutSection}>{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
