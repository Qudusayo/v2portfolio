import { NOT_FOUND_TEXT } from "@/lib/constants";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <pre className="w-fit !leading-4 whitespace-pre-wrap">{NOT_FOUND_TEXT}</pre>
    </div>
  );
}

export default NotFound;
