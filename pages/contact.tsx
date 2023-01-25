import { useState } from "react";
import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoCaretForward, IoMail, IoCall, IoOpenOutline } from "react-icons/io5";

import styles from "@/styles/Contact.module.scss";
import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";

export default function contact() {
  return (
    <div>
      <BoxLayout navTitle="contacts" sideBar={<SideBar />} />
    </div>
  );
}

const SideBar = () => {
  const [firstDrawerOpen, setFirstDrawerOpen] = useState(true);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(true);

  return (
    <div className={sidebarStyles.SideBar}>
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
          <span>contacts</span>
        </div>
        <ul className={sidebarStyles.SideBarDropdownContent}>
          <li>
            <a>
              <IoMail fill="#607b96" />
              <span>qqudusayo@gmail.com</span>
            </a>
          </li>
          <li>
            <a>
              <IoCall fill="#607b96" />
              <span>+2347042467656</span>
            </a>
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
          <span>find-me-also-in</span>
        </div>

        {secondDrawerOpen && (
          <ul className={sidebarStyles.SideBarDropdownContent}>
            <li>
              <a>
                <IoOpenOutline fill="#607b96" />
                <span>Discord Profile</span>
              </a>
            </li>
            <li>
              <a>
                <IoOpenOutline fill="#607b96" />
                <span>Stackoverflow Profile</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
