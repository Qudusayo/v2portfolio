import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function simplifyContentfulResponse(response: any) {
  const assetMap = new Map();
  response.includes?.Asset?.forEach((asset: any) => {
    assetMap.set(asset.sys.id, `https:${asset.fields.file.url}`);
  });

  return (response.items || []).map((item: any) => {
    const { title, githubUrl, demoUrl, preview, description, categories } =
      item.fields || {};
    const imageUrl = preview ? assetMap.get(preview.sys.id) : null;

    return {
      name: title,
      mainType: "react",
      previewLink: demoUrl,
      githubUrl,
      previewImg: imageUrl,
      description: description,
      category: categories,
    };
  });
}
