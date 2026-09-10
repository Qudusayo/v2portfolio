import { VscGithubAlt } from "react-icons/vsc";
import Image from "next/legacy/image";
interface BannerIconsTypes {
  [key: string]: {
    icon: React.ReactElement;
    bg: string;
  };
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#314158" offset="20%" />
      <stop stop-color="#607B96" offset="50%" />
      <stop stop-color="#314158" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#314158" />
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
    <div className="border border-primitive-slate-800 bg-primitive-slate-950 rounded-md grow flex flex-col">
      <Image
        src={previewImg}
        width={200}
        height={133}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        layout="responsive"
        objectFit="cover"
        alt={alt}
      />
      <div className="p-4 border-t border-primitive-slate-800 h-max grow flex flex-col gap-4">
        <p className="text-foreground text-sm line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer"
            aria-label={alt + " preview"}
            className="text-sm bg-primitive-slate-600 text-theme-heading-foreground px-4 py-2 rounded-md"
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
