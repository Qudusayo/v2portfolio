import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

export default function Navbar() {
  const { route } = useRouter();

  console.log(route);
  return (
    <nav className={styles.Navbar}>
      <div>
        <Link href={"/"}>Qudusayo</Link>
      </div>
      <div>
        <ul className={styles.NavbarLinks}>
          <li className={route === "/" ? styles.activeRoute : styles.link}>
            <Link href={"/"}>_hello</Link>
          </li>
          <li className={route === "/about" ? styles.activeRoute : styles.link}>
            <Link href={"/about"}>_about-me</Link>
          </li>
          <li
            className={route === "/projects" ? styles.activeRoute : styles.link}
          >
            <Link href={"/projects"}>_projects</Link>
          </li>
          <li
            className={route === "/contact" ? styles.activeRoute : styles.link}
          >
            <Link href={"/contact"}>_contact-me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
