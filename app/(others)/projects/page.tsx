"use client";

import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import React, { useEffect, useState, Children } from "react";
import { SiNextdotjs, SiTypescript, SiReact, SiEthereum } from "react-icons/si";
import { RiRobot2Fill } from "react-icons/ri";
import Card from "@/components/Card/Card";

import projects from "@/app/(others)/projects/projects";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ProjectTypes } from "@/types";
import Head from "@/extras/head";

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
      <Head>
        <title>Qudusayo - Projects</title>
        <meta
          name="description"
          content="Check out what I've been working on."
        />
      </Head>
      <div>
        <BoxLayout
          sideBar={
            <Sidebar
              contents={[
                {
                  title: "projects",
                  content: [
                    {
                      icon: <RiRobot2Fill size={20} />,
                      name: "AI",
                    },
                    {
                      icon: <SiEthereum size={20} />,
                      name: "Blockchain",
                    },
                    {
                      icon: <SiNextdotjs size={20} />,
                      name: "NextJs",
                    },
                    {
                      icon: <SiReact size={20} />,
                      name: "React",
                    },

                    {
                      icon: <SiTypescript size={20} />,
                      name: "Typescript",
                    },
                  ].map((stack, index) => (
                    <div key={index}>
                      <label
                        htmlFor={`entry1${index}`}
                        className="select-none cursor-pointer flex items-center gap-4 text-foreground p-2"
                      >
                        <input
                          type="checkbox"
                          id={`entry1${index}`}
                          className="opacity-0 absolute size-4 cursor-pointer"
                          checked={filters.includes(stack.name)}
                          onChange={() => filter(stack.name)}
                        />
                        <div className="bg-transparent border rounded-sm border-theme-stroke w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2">
                          <svg
                            className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                            version="1.1"
                            viewBox="0 0 17 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="none" fillRule="evenodd">
                              <g
                                transform="translate(-9 -11)"
                                fill="#ffffff"
                                fillRule="nonzero"
                              >
                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="flex items-center gap-2">
                          {stack.icon}
                          <span className="text-white">{stack.name}</span>
                        </div>
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
          <div className="grid md:grid-cols-3 gap-6 w-full pt-6 md:px-8 px-4 pb-12 box-border overflow-y-scroll lg:grid-cols-3 grid-cols-1">
            {Children.toArray(
              filteredList.map((project) => {
                return (
                  <div
                    className="box-content h-full flex flex-col"
                    key={project.name}
                  >
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
