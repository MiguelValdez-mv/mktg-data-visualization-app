import React from "react";
import ReactDOM from "react-dom/client";

import { message } from "@/constants";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>{message}</h1>
  </React.StrictMode>
);
