import { VscGithubAlt } from "react-icons/vsc";
import {
  SiReact,
  SiOpensourceinitiative,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import styles from "./Card.module.scss";
import Image from "next/legacy/image";
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
  typescript: {
    icon: <SiTypescript size={25} fill="#007acc" />,
    bg: "#ffffff",
  },
  contribution: {
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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1E2D3D" offset="20%" />
      <stop stop-color="#607B96" offset="50%" />
      <stop stop-color="#1E2D3D" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1E2D3D" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Card({
  alt,
  previewImg,
  mainType,
  previewLink,
  description,
  githubUrl,
}: {
  alt: string;
  previewImg: string;
  mainType: keyof BannerIconsTypes;
  previewLink?: string;
  description: string;
  githubUrl?: string;
}) {
  return (
    <div className={styles.Card}>
      <Image
        src={previewImg}
        width={200}
        height={130}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        layout="responsive"
        objectFit="cover"
        alt={alt}
      />
      <div className={styles.CardContent}>
        <p>{description}</p>
        <div className={styles.CardContentLinks}>
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer"
            aria-label={alt + " preview"}
            className={styles.btn}
          >
            view-project
          </a>
          {githubUrl ? (
            <a
              aria-label={alt + " github link"}
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <VscGithubAlt fill="#607B96" size={25} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
