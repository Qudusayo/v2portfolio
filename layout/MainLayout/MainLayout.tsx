import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import styles from "./MainLayout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <section className={styles.MainLayoutSection}>{children}</section>
      <Footer />
    </div>
  );
}
