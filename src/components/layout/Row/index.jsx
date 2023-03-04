import PropTypes from "prop-types";

import { Box } from "@/components/atoms/Box";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Row({ className, children, ...rest }) {
  return (
    <Box className={twMerge("flex flex-row", className)} {...rest}>
      {children}
    </Box>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};
