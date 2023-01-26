import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import React, { useEffect, useState } from "react";

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
import Head from "next/head";

export default function Projects() {
  const [filters, setFilters] = useState<string[]>([]);

  const filter = (filt: string) => {
    if (filters.includes(filt)) {
      return setFilters((valv) => [
        ...valv.filter((targetFilt) => targetFilt !== filt),
      ]);
    } else {
      return setFilters((filts) => [...filts, filt]);
    }
  };

  return (
    <>
      <Head>
        <title>Qudusayo - Projects</title>
        <meta name="description" content="Works from Qudusayo" />
      </Head>
      <div>
        <BoxLayout
          sideBar={<SideBar filters={filters} filter={filter} />}
          navTitle={filters.length ? filters.join("; ") : "Projects"}
          resetEntries={() => setFilters([])}
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
    </>
  );
}

const SideBar = ({
  filter,
  filters,
}: {
  filter: (filt: string) => void;
  filters: string[];
}) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) setDrawerOpen(false);
  }, []);

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
            {[
              {
                icon: <SiReact size={20} />,
                name: "React",
              },
              {
                icon: <SiHtml5 size={20} />,
                name: "HTML5",
              },
              {
                icon: <SiOpensourceinitiative size={20} />,
                name: "OpenSource",
              },
              {
                icon: <SiNextdotjs size={20} />,
                name: "NextJs",
              },
              {
                icon: <SiTypescript size={20} />,
                name: "Typescript",
              },
              {
                icon: <SiEthereum size={20} />,
                name: "Blockchain",
              },
            ].map((stack, index) => (
              <li key={index}>
                <div>
                  <input
                    id={`entry1${index}`}
                    type="checkbox"
                    checked={filters.includes(stack.name)}
                    onChange={() => filter(stack.name)}
                  />
                  <label htmlFor={`entry1${index}`}>
                    {stack.icon}
                    <span>{stack.name}</span>
                  </label>
                </div>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};
