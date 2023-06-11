"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useEffect, useState } from "react";
import { IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { Dropdown } from "@/components/Dropdown/Dropdown";

import Head from "next/head";
import useCollapse from "react-collapsed";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>Qudusayo - About</title>
        <meta name="description" content="About Qudusayo" />
      </Head>
      <div>
        <BoxLayout sideBar={<FlexSideBar />} navTitle="personal-info">
          <div className={styles.About}>
            <div className={styles.AboutInfo}>
              <pre className={styles.code}>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>{"/**"}</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m Ayoola Abdulqudus,</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>a Frontend Developer. Right now </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>I&apos;m working as a Freelancer focused on </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Frontend Development. I know my ways on </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Back-end but what I really like doing </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>the most is Front-end development. </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Currently, my main area of focus has been </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>NextJs for full stack development.</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>Besides that, my skills include </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>HTML, CSS, Javascript, MongoDB, EVM </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>and some basic back-end (Node). </code>
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

const FlexSideBar = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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
        <Sidebar
          contents={[
            {
              title: "personal-info",
              content: [
                <Dropdown
                  key={0}
                  folderFill="#E99287"
                  title="bio"
                  entries={["biography"]}
                  isActive={true}
                />,
                <Dropdown
                  key={1}
                  folderFill="#43D9AD"
                  title="interests"
                  entries={["hobbies"]}
                />,
                <Dropdown
                  key={2}
                  folderFill="#3A49A4"
                  title="education"
                  entries={["high-school", "university"]}
                />,
              ],
            },
            {
              title: "contacts",
              content: [
                <a key={0} href="mailto:qqudusayo@gmail.com">
                  <IoMail fill="#607b96" />
                  <span>qqudusayo@gmail.com</span>
                </a>,
                <a key={1} href="tel:+2347016412041">
                  <IoCall fill="#607b96" />
                  <span>+(234)701-6412-041</span>
                </a>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
