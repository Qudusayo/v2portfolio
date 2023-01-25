import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useEffect, useState } from "react";
import { IoCaretForward, IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { Dropdown } from "@/components/Dropdown/Dropdown";

export default function about() {
  return (
    <div>
      <BoxLayout sideBar={<SideBar />} navTitle="personal-info" />
    </div>
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
              <Dropdown folderFill="#E99287" title="bio" />
            </li>
            <li>
              <Dropdown folderFill="#43D9AD" title="interests" />
            </li>
            <li>
              <Dropdown folderFill="#3A49A4" title="education" />
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
