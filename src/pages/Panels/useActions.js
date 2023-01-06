import { COPY } from "@/copy";

const useActions = () => {
  const title = COPY["pages.panels.title"];

  return {
    title,
    pathname: title,
  };
};

export default useActions;
