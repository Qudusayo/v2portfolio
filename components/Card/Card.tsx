import { VscGithubAlt } from "react-icons/vsc";
import { SiReact, SiOpensourceinitiative, SiNextdotjs } from "react-icons/si";

import styles from "./Card.module.scss";
interface BannerIconsTypes {
  [key: string]: {
    icon: React.ReactElement;
    bg: string;
  };
}

const BannerIcons: BannerIconsTypes = {
  react: {
    icon: <SiReact size={15} fill="#000000" />,
    bg: "#86E1F9",
  },
  opensource: {
    icon: (
      <SiOpensourceinitiative
        size={15}
        fill="#69BE28"
        stroke="#69BE28"
        strokeWidth={0.75}
        scale={2}
      />
    ),
    bg: "#FFFFFF",
  },
  next: {
    icon: <SiNextdotjs size={15} fill="#000000" />,
    bg: "#FFFFFF",
  },
};

export default function Card({
  previewImg,
  mainType,
  previewLink,
}: {
  previewImg: string;
  mainType: keyof BannerIconsTypes;
  previewLink?: string;
}) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardBanner}>
        <img src={previewImg} />
        <div
          style={{ backgroundColor: BannerIcons[mainType].bg }}
          className={styles.CardBannerIcon}
        >
          {BannerIcons[mainType].icon}
        </div>
      </div>
      <div className={styles.CardContent}>
        <p>Duis aute irure dolor in velit esse cillum dolore.</p>
        <div className={styles.CardContentLinks}>
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            view-project
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <VscGithubAlt fill="#607B96" size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
