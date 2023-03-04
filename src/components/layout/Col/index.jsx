import PropTypes from "prop-types";

import { Box } from "@/components/atoms/Box";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Col({ className, children, ...rest }) {
  return (
    <Box className={twMerge("flex flex-col", className)} {...rest}>
      {children}
    </Box>
  );
}

Col.propTypes = {
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};
