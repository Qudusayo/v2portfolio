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
    <div className="border border-[#1e2d3d] rounded-md flex-grow">
      <Image
        src={previewImg}
        width={200}
        height={130}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        layout="responsive"
        objectFit="cover"
        alt={alt}
        className="rounded-t-md"
      />
      <div className="p-4 pt-0">
        <p className="text-textColor text-[.95em]">{description}</p>
        <div className="flex items-center justify-between mt-6">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer"
            aria-label={alt + " preview"}
            className="text-[.95em] bg-[#1c2b3a] text-white px-4 py-2 rounded-md"
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
