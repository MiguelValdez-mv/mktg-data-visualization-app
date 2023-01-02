import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  theme: {
    colors: ["primary", "secondary", "third", "cyan"],
  },
  classGroups: {
    "font-family": [{ font: ["poppins"] }],
    "font-size": [{ text: ["tiny", "small", "subtitle", "title", "caption"] }],
  },
});
