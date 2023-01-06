import { COPY } from "@/copy";

const useActions = () => {
  const title = COPY["pages.users.details.title"];
  const pathname = `${COPY["pages.users.title"]}/${title}`;

  return {
    title,
    pathname,
  };
};

export default useActions;
