import {
  RiFolder3Fill,
  RiArrowRightSLine,
  RiMarkdownFill,
} from "react-icons/ri";

import styles from "./Dropdown.module.scss";
import { useState } from "react";

export const Dropdown = ({
  title,
  entries,
  folderFill,
  active = false,
}: {
  active?: boolean;
  title: string;
  entries?: string[];
  folderFill: string;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.Dropdown}>
      <nav
        className={styles.DropdownNav}
        onClick={() => setIsActive((active) => !active)}
      >
        <RiArrowRightSLine
          className={
            isActive
              ? styles.DropdownNavTitleActive
              : styles.DropdownNavTitleInactive
          }
        />
        <div className={styles.DropdownNavTitle}>
          <RiFolder3Fill fill={folderFill} />
          <span className={active ? styles.active : ""}>{title}</span>
        </div>
      </nav>
      {entries?.length && isActive ? (
        <div className={styles.DropdownEntries}>
          <ul>
            {entries?.map((entry) => (
              <li key={entry}>
                <RiMarkdownFill /> <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
