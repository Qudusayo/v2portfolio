import DefaultTags from "./default-tags";

export default function Head({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <DefaultTags />
      {children}
    </>
  );
}
