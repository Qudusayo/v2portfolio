import React from "react";
import styles from "./Sidebar.module.scss";

import { IoCaretForward } from "react-icons/io5";
import useCollapse from "react-collapsed";

export default function Sidebar({
  contents,
}: {
  contents?: {
    title: string;
    content: Array<React.ReactElement>;
  }[];
}) {
  // useEffect(() => {
  //   if (window.innerWidth <= 700) {
  //     setFirstDrawerOpen(false);
  //     setSecondDrawerOpen(false);
  //   }
  // }, []);

  return (
    <div className={styles.SideBar}>
      {contents?.map((content, index) => (
        <Drawer
          isFirstDrawer={contents.length > 1 && index === 0}
          key={index}
          title={content.title}
          entries={content.content}
        />
      ))}
    </div>
  );
}

const Drawer = ({
  title,
  entries,
  isFirstDrawer = false,
}: {
  title: string;
  isFirstDrawer?: boolean;
  entries: Array<React.ReactElement>;
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  });

  return (
    <nav
      className={[
        styles.SideBarDropdown,
        !isExpanded && isFirstDrawer && styles.firstDrawerOpen,
      ].join(" ")}
    >
      <div className={styles.SideBarDropdownHeader} {...getToggleProps()}>
        <IoCaretForward
          className={
            isExpanded ? styles.DrawerControlOpen : styles.DrawerControlClose
          }
        />{" "}
        <span>{title}</span>
      </div>
      <ul className={styles.SideBarDropdownContent} {...getCollapseProps()}>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </nav>
  );
};
