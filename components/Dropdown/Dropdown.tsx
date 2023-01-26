import {
  RiFolder3Fill,
  RiArrowRightSLine,
  RiMarkdownFill,
} from "react-icons/ri";
import useCollapse from "react-collapsed";

import styles from "./Dropdown.module.scss";

export const Dropdown = ({
  title,
  entries,
  folderFill,
  isActive = false,
}: {
  isActive?: boolean;
  title: string;
  entries?: string[];
  folderFill: string;
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className={styles.Dropdown}>
      <nav className={styles.DropdownNav} {...getToggleProps()}>
        <RiArrowRightSLine
          className={
            isExpanded
              ? styles.DropdownNavTitleActive
              : styles.DropdownNavTitleInactive
          }
        />
        <div className={styles.DropdownNavTitle}>
          <RiFolder3Fill fill={folderFill} />
          <span className={isActive ? styles.active : ""}>{title}</span>
        </div>
      </nav>
      {entries?.length ? (
        <div className={styles.DropdownEntries} {...getCollapseProps()}>
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
