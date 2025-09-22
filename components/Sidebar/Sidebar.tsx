"use client";

import React, { useEffect, useMemo, useState } from "react";
import { IoCaretForward } from "react-icons/io5";
import { useCollapse } from "react-collapsed";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar({
  contents,
}: {
  contents?: {
    title: string;
    content: Array<React.ReactElement>;
  }[];
}) {
  const route = usePathname();

  return (
    <div className="h-full">
      <div className="text-white py-6 px-4 hidden">{"_" + route.slice(1)}</div>
      {contents?.map((content, index) => (
        <Drawer
          isFirstDrawer={index === 0}
          isLastDrawer={index === contents.length - 1}
          key={index}
          title={content.title}
          entries={content.content}
        />
      ))}
    </div>
  );
}

const Drawer = ({
  title,
  entries,
  isFirstDrawer = false,
  isLastDrawer = false,
}: {
  title: string;
  isFirstDrawer?: boolean;
  isLastDrawer?: boolean;
  entries: Array<React.ReactElement>;
}) => {
  const initialExpanded = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth >= 768;
  }, []);
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  useEffect(() => {
    const handleResize = () => {
      const shouldExpand = window.innerWidth >= 768;
      setIsExpanded((current) => (current === shouldExpand ? current : shouldExpand));
    };
    // Sync once on mount in case of hydration mismatch
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    defaultExpanded: initialExpanded,
  });

  return (
    <nav className={cn("mb-0", !isExpanded && isFirstDrawer && "border-b-0")}>
      <div
        className={cn(
          "border border-[#314158] border-x-0 py-2 px-4 flex items-center gap-2 cursor-pointer text-foreground",
          isExpanded && "text-white",
          isFirstDrawer && "border-t-0",
          !isExpanded && !isLastDrawer && "border-b-0"
        )}
        {...getToggleProps({ onClick: () => setIsExpanded((x) => !x) })}
      >
        <IoCaretForward
          className={cn(
            "transition-all duration-200",
            isExpanded ? "rotate-90" : "rotate-0"
          )}
        />
        <span>{title}</span>
      </div>
      <ul className="p-2" {...getCollapseProps()}>
        {entries.map((entry, index) => (
          <li key={index} className="block">
            {entry}
          </li>
        ))}
      </ul>
    </nav>
  );
};
