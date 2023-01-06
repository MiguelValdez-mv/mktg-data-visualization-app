import { COPY } from "@/copy";

const useActions = () => {
  const title = COPY["pages.businesses.title"];

  return {
    title,
    pathname: title,
  };
};

export default useActions;
