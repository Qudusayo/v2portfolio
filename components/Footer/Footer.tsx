import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me in:</span>
      </div>
      <div>
        <FaLinkedinIn fill="#607B96" size={25} />
      </div>
      <div>
        <FaTwitter fill="#607B96" size={25} />
      </div>
      <div>
        <span>@qudusayo</span>
        <FaGithub fill="#607B96" size={25} />
      </div>
    </footer>
  );
}
