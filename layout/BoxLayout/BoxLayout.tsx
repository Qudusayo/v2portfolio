import styles from "./BoxLayout.module.scss";
import { IoClose } from "react-icons/io5";

interface BoxLayoutTypes {
  navTitle: string;
  sideBar?: React.ReactNode;
}

export default function BoxLayout({ navTitle, sideBar }: BoxLayoutTypes) {
  return (
    <div className={styles.BoxLayout}>
      <section className={styles.BoxLayoutSideBar}>{sideBar}</section>
      <section className={styles.BoxLayoutContent}>
        <div className={styles.BoxLayoutContentNav}>
          <div>
            <span>{navTitle}</span> <IoClose />
          </div>
        </div>
      </section>
    </div>
  );
}
