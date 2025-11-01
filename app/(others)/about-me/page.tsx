"use client";

import { lazy, Suspense } from "react";
import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoMail, IoCall } from "react-icons/io5";
import { RiTerminalBoxFill, RiGamepadFill, RiUser4Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "@/extras/head";
import { CONTACT } from "@/lib/constants";

// Lazy load heavy components
const LineNumberEditor = lazy(() => import("@/components/LineNumberEditor"));

export default function About() {
  return (
    <>
      <Head>
        <title>About - Qudusayo</title>
        <meta
          name="description"
          content="Hi all. I am Qudusayo, a front-end developer. I am proficient in JavaScript and TypeScript. I have experience working with React, Next.js, Node.js.  I am open to learning new technologies and working on new projects."
        />
      </Head>
      <div>
        <BoxLayout sideBar={<FlexSideBar />} navTitle="personal-info">
          <Suspense fallback={<div className="text-theme-foreground">Loading...</div>}>
            <LineNumberEditor />
          </Suspense>
        </BoxLayout>
      </div>
    </>
  );
}

const FlexSideBar = () => {
  return (
    <div className="flex h-full">
      <div className="flex-col items-center gap-6 pt-6 md:w-20 w-full md:flex hidden">
        <IconContext.Provider value={{ color: "#607B96", size: "24" }}>
          <RiTerminalBoxFill />
          <RiUser4Fill fill="#FFF" />
          <RiGamepadFill />
        </IconContext.Provider>
      </div>
      <div className="flex-1 md:border-l border-theme-stroke border-l-0">
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
                <a
                  key={0}
                  className="flex items-center gap-2 text-foreground py-2 px-2"
                  href={`mailto:${CONTACT.EMAIL}`}
                >
                  <IconContext.Provider value={{ color: "#607b96" }}>
                    <IoMail />
                  </IconContext.Provider>
                  <span className="text-[#607b96]">{CONTACT.EMAIL}</span>
                </a>,
                <a
                  key={1}
                  className="flex items-center gap-2 text-foreground py-2 px-2"
                  href={`tel:${CONTACT.PHONE}`}
                >
                  <IconContext.Provider value={{ color: "#607b96" }}>
                    <IoCall />
                  </IconContext.Provider>
                  <span className="text-[#607b96]">{CONTACT.PHONE}</span>
                </a>,
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};
