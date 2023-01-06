import { COPY } from "@/copy";

const useActions = () => {
  const title = COPY["pages.businesses.details.title"];
  const pathname = `${COPY["pages.businesses.title"]}/${title}`;

  return {
    title,
    pathname,
  };
};

export default useActions;
