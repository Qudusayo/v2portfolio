import styles from "./BoxLayout.module.scss";
import { IoClose } from "react-icons/io5";

interface BoxLayoutTypes {
  navTitle: string;
  sideBar?: React.ReactNode;
  children?: React.ReactNode;
  resetEntries?: () => void;
}

export default function BoxLayout({
  navTitle,
  sideBar,
  children,
  resetEntries,
}: BoxLayoutTypes) {
  return (
    <div className={styles.BoxLayout}>
      <section className={styles.BoxLayoutSideBar}>{sideBar}</section>
      <section className={styles.BoxLayoutContent}>
        <div className={styles.BoxLayoutContentNav}>
          <div>
            <span>{navTitle}</span>{" "}
            <IoClose style={{ cursor: "pointer" }} onClick={resetEntries} />
          </div>
        </div>
        <div className={styles.BoxLayoutContentChildren}>{children}</div>
      </section>
    </div>
  );
}
