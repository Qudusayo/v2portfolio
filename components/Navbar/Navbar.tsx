"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const route = usePathname();

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(false);
  }, [route]);

  return (
    <nav
      className={[styles.Navbar, visibility && styles.NavbarAvtive].join(" ")}
    >
      <div>
        <Link href={"/"}>Qudusayo</Link>
        <div className={styles.hamburger}>
          <label htmlFor="checkbox" className={styles.hamburgerControls}>
            <span
              className={[
                styles.hamburger_bars,
                visibility && styles.hamburger_bars_active,
              ].join(" ")}
            ></span>
            <span
              className={[
                styles.hamburger_bars,
                visibility && styles.hamburger_bars_active,
              ].join(" ")}
            ></span>
            <span
              className={[
                styles.hamburger_bars,
                visibility && styles.hamburger_bars_active,
              ].join(" ")}
            ></span>
          </label>
          <input
            id="checkbox"
            type="checkbox"
            aria-hidden="true"
            tabIndex={-1}
            className={styles.hamburger_check}
            defaultChecked={visibility}
            onChange={() => setVisibility((visibility) => !visibility)}
          />
        </div>
      </div>
      <div>
        <ul
          className={[
            styles.NavbarLinks,
            visibility ? styles.visibleNav : styles.inVisibleNav,
          ].join(" ")}
        >
          <li className={route === "/" ? styles.activeRoute : styles.link}>
            <Link href={"/"}>_hello</Link>
          </li>
          <li
            className={route === "/about-me" ? styles.activeRoute : styles.link}
          >
            <Link href={"/about-me"}>_about-me</Link>
          </li>
          <li
            className={route === "/projects" ? styles.activeRoute : styles.link}
          >
            <Link href={"/projects"}>_projects</Link>
          </li>
          <li
            className={
              route === "/contact-me" ? styles.activeRoute : styles.link
            }
          >
            <Link href={"/contact-me"}>_contact-me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
