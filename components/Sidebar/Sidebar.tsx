import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";

import { IoCaretForward } from "react-icons/io5";
import useCollapse from "react-collapsed";
import { usePathname } from "next/navigation";

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

  const route = usePathname();

  return (
    <div className={styles.SideBar}>
      <div className={styles.SideBarMobileTitle}>{"_" + route.slice(1)}</div>
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
  const [isExpanded, setisExpanded] = useState<boolean>(false);
  const [hasDisabledAnimation, setHasDisabledAnimation] =
    useState<boolean>(true);
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    hasDisabledAnimation,

    onExpandStart() {
      setHasDisabledAnimation(false);
    },

    onCollapseStart() {
      setHasDisabledAnimation(false);
    },
  });

  useEffect(() => {
    if (window.innerWidth > 700) {
      setisExpanded(true);
    }
  }, []);

  return (
    <nav
      className={[
        styles.SideBarDropdown,
        !isExpanded && isFirstDrawer && styles.firstDrawerOpen,
      ].join(" ")}
    >
      <div
        className={styles.SideBarDropdownHeader}
        {...getToggleProps({ onClick: () => setisExpanded((x) => !x) })}
      >
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
