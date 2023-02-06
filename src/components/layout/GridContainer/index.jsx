import PropTypes from "prop-types";

import { Box } from "@/components/atoms/Box";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function GridContainer({ className, children }) {
  return <Box className={twMerge("grid", className)}>{children}</Box>;
}

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};
