import supertokens from "supertokens-web-js";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import Session from "supertokens-web-js/recipe/session";

import { LINKS } from "@/constants";

export const startSupertokens = () => {
  supertokens.init({
    appInfo: {
      apiDomain: LINKS.API,
      apiBasePath: "/auth",
      appName: "Marketing data visualization",
    },
    recipeList: [Session.init(), Passwordless.init()],
  });
};
