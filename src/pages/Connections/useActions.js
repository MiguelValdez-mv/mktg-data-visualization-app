import { COPY } from "@/copy";

const useActions = () => {
  const title = COPY["pages.connections.title"];

  return {
    title,
    pathname: title,
  };
};

export default useActions;
