import {
  RiFolder3Fill,
  RiArrowRightSLine,
  RiMarkdownFill,
} from "react-icons/ri";
import { useCollapse } from "react-collapsed";

import { cn } from "@/lib/utils";

export const Dropdown = ({
  title,
  entries,
  folderFill,
  isActive = false,
}: {
  isActive?: boolean;
  title: string;
  entries?: string[];
  folderFill: string;
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="flex flex-col items-start text-white py-2 px-2">
      <nav 
        className="flex items-center gap-2 w-full" 
        {...getToggleProps()}
      >
        <RiArrowRightSLine
          className={cn(
            "transition-all duration-200 ease-linear",
            isExpanded ? "rotate-90" : "rotate-0"
          )}
        />
        <div className="flex items-center gap-2">
          <RiFolder3Fill fill={folderFill} />
          <span className={cn("p-0", isActive && "text-white")}>{title}</span>
        </div>
      </nav>
      {entries?.length ? (
        <div
          className="w-full m-0"
          {...getCollapseProps({ style: { padding: 0 } })}
        >
          <ul className="pl-6">
            {entries?.map((entry) => (
              <li
                key={entry}
                className="flex items-center gap-2 p-0 pt-2 text-foreground"
              >
                <RiMarkdownFill /> <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
