import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me in:</span>
      </div>
      <div>
        <a
          aria-label="Qudusayo linkedin profile"
          href="https://www.linkedin.com/in/qudusayo/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Qudusayo twitter profile"
          href="https://twitter.com/qudusayo"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Qudusayo github profile"
          href="https://github.com/qudusayo/"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.githubUsername}>@qudusayo</span>
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
