import { COPY } from "@/copy";

const useActions = () => {
  const title = "Panel name";
  const pathname = `${COPY["pages.panels.title"]}/${title}`;

  return {
    title,
    pathname,
  };
};

export default useActions;
