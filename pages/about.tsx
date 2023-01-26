import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useEffect, useState } from "react";
import { IoCaretForward, IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { Dropdown } from "@/components/Dropdown/Dropdown";

import styles from "@/styles/About.module.scss";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Qudusayo - About</title>
        <meta name="description" content="About Qudusayo" />
      </Head>
      <div>
        <BoxLayout sideBar={<SideBar />} navTitle="personal-info">
          <div className={styles.About}>
            <div className={styles.AboutInfo}>
              <pre className={styles.code}>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>{"/**"}</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>About me</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Lorem ipsum dolor sit amet </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>consectetur adipisicing elit.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Labore incidunt minima omnis ea </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>suscipit necessitatibus itaque!</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>ipsam autem temporibus culpa</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>oluptates quibusdam commodi,</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>laboriosam assumenda inventore</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code> ipsa saepe excepturi dolorum </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>*/</code>
                </span>
              </pre>
            </div>
            <div className={styles.AboutCodePreview}></div>
          </div>
        </BoxLayout>
      </div>
    </>
  );
}

const SideBar = () => {
  const [firstDrawerOpen, setFirstDrawerOpen] = useState(true);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setFirstDrawerOpen(false);
      setSecondDrawerOpen(false);
    }
  }, []);

  return (
    <div
      className={[sidebarStyles.SideBar, sidebarStyles.SideBarFlex].join(" ")}
    >
      <div className={sidebarStyles.SideBarFlexLeft}>
        <RiTerminalBoxFill fill="#607B96" size={20} />
        <RiGamepadFill fill="#607B96" size={20} />
        <RiUser4Fill fill="#607B96" size={20} />
      </div>
      <div className={sidebarStyles.SideBarFlexRight}>
        <nav
          className={[
            sidebarStyles.SideBarDropdown,
            !firstDrawerOpen && sidebarStyles.firstDrawerOpen,
          ].join(" ")}
        >
          <div
            className={sidebarStyles.SideBarDropdownHeader}
            onClick={() =>
              setFirstDrawerOpen((firstDrawerStatus) => !firstDrawerStatus)
            }
          >
            <IoCaretForward
              className={
                firstDrawerOpen
                  ? sidebarStyles.DrawerControlOpen
                  : sidebarStyles.DrawerControlClose
              }
            />{" "}
            <span>personal-info</span>
          </div>
          <ul className={sidebarStyles.SideBarDropdownContent}>
            <li>
              <Dropdown
                folderFill="#E99287"
                title="bio"
                entries={["biography"]}
                active={true}
              />
            </li>
            <li>
              <Dropdown
                folderFill="#43D9AD"
                title="interests"
                entries={["hobbies"]}
              />
            </li>
            <li>
              <Dropdown
                folderFill="#3A49A4"
                title="education"
                entries={["high-school", "university"]}
              />
            </li>
          </ul>
        </nav>
        <nav className={sidebarStyles.SideBarDropdown}>
          <div
            className={sidebarStyles.SideBarDropdownHeader}
            onClick={() =>
              setSecondDrawerOpen((secondDrawerStatus) => !secondDrawerStatus)
            }
          >
            <IoCaretForward
              className={
                secondDrawerOpen
                  ? sidebarStyles.DrawerControlOpen
                  : sidebarStyles.DrawerControlClose
              }
            />{" "}
            <span>contacts</span>
          </div>

          {secondDrawerOpen && (
            <ul className={sidebarStyles.SideBarDropdownContent}>
              <li>
                <a href="mailto:qqudusayo@gmail.com">
                  <IoMail fill="#607b96" />
                  <span>qqudusayo@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+2347042467656">
                  <IoCall fill="#607b96" />
                  <span>+2347042467656</span>
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};
