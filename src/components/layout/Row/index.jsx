import PropTypes from "prop-types";

import { Box } from "@/components/atoms/Box";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Row({ className, children }) {
  return <Box className={twMerge("flex flex-row", className)}>{children}</Box>;
}

Row.propTypes = {
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};
