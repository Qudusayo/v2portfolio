import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me in:</span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/qudusayo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/qudusayo" target="_blank" rel="noreferrer">
          <FaTwitter fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a href="https://github.com/qudusayo/" target="_blank" rel="noreferrer">
          <span className={styles.githubUsername}>@qudusayo</span>
          <FaGithub fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
