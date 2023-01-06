import { COPY } from "@/copy";

const useActions = () => {
  const title = COPY["pages.users.title"];

  return {
    title,
    pathname: title,
  };
};

export default useActions;
