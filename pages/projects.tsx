import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { useState } from "react";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { IoCaretForward } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiOpensourceinitiative,
} from "react-icons/si";

export default function projects() {
  return (
    <div>
      <BoxLayout sideBar={<SideBar />} navTitle="React; Vue" />
    </div>
  );
}

const SideBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <div className={sidebarStyles.SideBar}>
      <nav className={sidebarStyles.SideBarDropdown}>
        <div
          className={sidebarStyles.SideBarDropdownHeader}
          onClick={() =>
            setDrawerOpen((firstDrawerStatus) => !firstDrawerStatus)
          }
        >
          <IoCaretForward
            className={
              drawerOpen
                ? sidebarStyles.DrawerControlOpen
                : sidebarStyles.DrawerControlClose
            }
          />{" "}
          <span>projects</span>
        </div>
        {drawerOpen && (
          <ul className={sidebarStyles.SideBarDropdownContent}>
            <li>
              <div>
                <input id="entry1" type="checkbox" />
                <label htmlFor="entry1">
                  <SiReact size={25} />
                  <span>React</span>
                </label>
              </div>
              <div>
                <input id="entry2" type="checkbox" />
                <label htmlFor="entry2">
                  <SiHtml5 size={25} />
                  <span>HTML5</span>
                </label>
              </div>
              <div>
                <input id="entry3" type="checkbox" />
                <label htmlFor="entry3">
                  <SiOpensourceinitiative size={25} />
                  <span>OpenSource</span>
                </label>
              </div>
              <div>
                <input id="entry4" type="checkbox" />
                <label htmlFor="entry4">
                  <SiNextdotjs size={25} />
                  <span>NextJS</span>
                </label>
              </div>
              <div>
                <input id="entry5" type="checkbox" />
                <label htmlFor="entry5">
                  <SiTypescript size={25} />
                  <span>Typescript</span>
                </label>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
