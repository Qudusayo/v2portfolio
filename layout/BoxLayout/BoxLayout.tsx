import { IoClose } from "react-icons/io5";

interface BoxLayoutTypes {
  navTitle: string;
  sideBar?: React.ReactNode;
  children?: React.ReactNode;
  resetEntries?: () => void;
}

export default function BoxLayout({
  navTitle,
  sideBar,
  children,
  resetEntries,
}: BoxLayoutTypes) {
  return (
    <div className="absolute right-0 top-0 w-full h-full flex flex-col md:flex-row">
      <section className="md:basis-1/4">{sideBar}</section>
      <section className="md:basis-3/4 basis-full box-border md:border-l border-l-theme-stroke flex flex-col">
        <div className="border-b border-b-theme-stroke hidden md:block">
          <div className="flex items-center w-fit p-2 border-r border-r-theme-stroke text-textColor">
            <span className="mr-8">{navTitle}</span>{" "}
            <IoClose style={{ cursor: "pointer" }} onClick={resetEntries} />
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </section>
    </div>
  );
}
