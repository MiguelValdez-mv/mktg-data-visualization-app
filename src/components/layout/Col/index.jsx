import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import { Box } from "@/components/atoms/Box";
import { PROP } from "@/constants";

export function Col({ className, children }) {
  return <Box className={twMerge("flex flex-col", className)}>{children}</Box>;
}

Col.propTypes = {
  className: PropTypes.string,
  children: PROP.children().isRequired,
};
