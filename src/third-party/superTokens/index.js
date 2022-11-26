import SuperTokens from "supertokens-web-js";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import Session from "supertokens-web-js/recipe/session";

export const startSuperTokens = () => {
  SuperTokens.init({
    appInfo: {
      apiDomain: "http://localhost:8080",
      apiBasePath: "/auth",
      appName: "Marketing data visualization",
    },
    recipeList: [Session.init(), Passwordless.init()],
  });
};
