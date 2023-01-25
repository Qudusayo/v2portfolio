import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import React, { useState } from "react";

import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import { IoCaretForward } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiEthereum,
  SiOpensourceinitiative,
} from "react-icons/si";
import Card from "@/components/Card/Card";
import styles from "@/styles/Projects.module.scss";

import projects from "@/extras/projects";

export default function Projects() {
  return (
    <div>
      <BoxLayout
        sideBar={<SideBar />}
        navTitle="Blockchain; React; Opensource; Typescript; NextJs"
      >
        <div className={styles.ProjectPreviews}>
          {React.Children.toArray(
            projects.map((project, index) => {
              return (
                <div className={styles.ProjectPreviewsBlock}>
                  <div className={styles.ProjectPreviewsBlockHeader}>
                    <span>Project {index + 1} </span>
                    <span>{`// _${project.name}`}</span>
                  </div>
                  <Card
                    previewLink={project.previewLink}
                    mainType={project.mainType}
                    previewImg={project.previewImg}
                  />
                </div>
              );
            })
          )}
        </div>
      </BoxLayout>
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
                  <SiReact size={20} />
                  <span>React</span>
                </label>
              </div>
              <div>
                <input id="entry2" type="checkbox" />
                <label htmlFor="entry2">
                  <SiHtml5 size={20} />
                  <span>HTML5</span>
                </label>
              </div>
              <div>
                <input id="entry3" type="checkbox" />
                <label htmlFor="entry3">
                  <SiOpensourceinitiative size={20} />
                  <span>OpenSource</span>
                </label>
              </div>
              <div>
                <input id="entry4" type="checkbox" />
                <label htmlFor="entry4">
                  <SiNextdotjs size={20} />
                  <span>NextJS</span>
                </label>
              </div>
              <div>
                <input id="entry5" type="checkbox" />
                <label htmlFor="entry5">
                  <SiTypescript size={20} />
                  <span>Typescript</span>
                </label>
              </div>
              <div>
                <input id="entry6" type="checkbox" />
                <label htmlFor="entry6">
                  <SiEthereum size={20} />
                  <span>Blockchain</span>
                </label>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
