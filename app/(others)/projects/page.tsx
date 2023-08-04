"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import React, { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiEthereum,
  SiNodedotjs,
  SiOpensourceinitiative,
} from "react-icons/si";
import Card from "@/components/Card/Card";

import projects from "@/extras/projects";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ProjectTypes } from "@/types";
import Head from "./head";

export default function Projects() {
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredList, setFilteredList] = useState<ProjectTypes[]>([]);

  const filter = (filt: string) => {
    if (filters.includes(filt)) {
      return setFilters((valv) => [
        ...valv.filter((targetFilt) => targetFilt !== filt),
      ]);
    } else {
      return setFilters((filts) => [...filts, filt]);
    }
  };

  useEffect(() => {
    if (filters.length) {
      let filtedProjects = projects.filter((project) => {
        let vals = project.category.filter((projectCategory) => {
          if (filters.includes(projectCategory)) return true;
        });
        if (vals.length) return true;
      });
      setFilteredList(filtedProjects);
    } else {
      setFilteredList(projects);
    }
  }, [filters]);

  return (
    <>
      <Head />
      <div>
        <BoxLayout
          sideBar={
            <Sidebar
              contents={[
                {
                  title: "projects",
                  content: [
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
                      name: "Contribution",
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
                      icon: <SiNodedotjs size={20} />,
                      name: "NodeJs",
                    },
                    {
                      icon: <SiEthereum size={20} />,
                      name: "Blockchain",
                    },
                  ].map((stack, index) => (
                    <div key={index}>
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
                  )),
                },
              ]}
            />
          }
          navTitle={filters.length ? filters.join("; ") : "Projects"}
          resetEntries={() => setFilters([])}
        >
          <div className="grid grid-cols-3 gap-x-4 gap-y-12 w-full pt-6 px-8 pb-12 grid-rows-[mansory] box-border h-full overflow-y-scroll lg:grid-cols-2 md:block">
            {React.Children.toArray(
              filteredList.map((project, index) => {
                return (
                  <div>
                    <div className=" mb-4 text-sm">
                      <span className="text-[#5565e8]">{`//`}</span>
                      <span className="text-textColor">{`_${project.name}`}</span>
                    </div>
                    <Card
                      alt={project.name}
                      previewLink={project.previewLink}
                      mainType={project.mainType}
                      previewImg={project.previewImg}
                      description={project.description}
                      githubUrl={project.githubUrl}
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
