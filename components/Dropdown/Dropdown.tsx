import { RiFolder3Fill, RiArrowRightSLine } from "react-icons/ri";

import styles from "./Dropdown.module.scss";

export const Dropdown = ({
  title,
  folderFill,
}: {
  title: string;
  folderFill: string;
}) => {
  return (
    <div className={styles.Dropdown}>
      <nav className={styles.DropdownNav}>
        <RiArrowRightSLine />
        <div className={styles.DropdownNavTitle}>
          <RiFolder3Fill fill={folderFill} />
          {title}
        </div>
      </nav>
    </div>
  );
};
