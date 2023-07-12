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
    <div className="absolute right-0 top-0 w-full h-full flex md:flex-col">
      <section className="basis-1/4">{sideBar}</section>
      <section className="basis-3/4 box-border border-l border-l-borderColor flex flex-col">
        <div className="border-b border-b-borderColor md:hidden">
          <div className="flex items-center w-fit p-2 border-r border-r-borderColor text-textColor">
            <span className="mr-8">{navTitle}</span>{" "}
            <IoClose style={{ cursor: "pointer" }} onClick={resetEntries} />
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </section>
    </div>
  );
}
