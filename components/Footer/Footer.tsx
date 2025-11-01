import { CONTACT } from "@/lib/constants";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="sticky top-0 z-[100000] flex items-end border-t border-theme-stroke text-[#8CA5B5]">
      <div className="flex items-center justify-center py-3 px-4 h-full">
        <span>find me in:</span>
      </div>
      <div className="flex items-center justify-center border-l border-theme-stroke ml-auto md:ml-0">
        <a
          aria-label="Qudusayo LinkedIn profile"
          href={CONTACT.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-4"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div className="flex items-center justify-center border-x border-theme-stroke">
        <a
          aria-label="Qudusayo X profile"
          href={CONTACT.X}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-4"
        >
          <RiTwitterXFill fill="#607B96" size={25} />
        </a>
      </div>
      <div className="md:ml-auto ml-0 flex items-center justify-center md:border-l border-theme-stroke">
        <a
          aria-label="Qudusayo github profile"
          href={CONTACT.GITHUB}
          target="_blank"
          rel="noreferrer"
          title="Qudusayo Github profile"
          className="flex items-center justify-center p-4"
        >
          <span className="mr-2 hidden md:block">@qudusayo</span>
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
