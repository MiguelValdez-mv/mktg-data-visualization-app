import PropTypes from "prop-types";

import { IconSpinner } from "@/assets/svgs/IconSpinner";
import { twMerge } from "@/utils/twMerge";

export function Spinner({ primary, className, ...rest }) {
  return (
    <IconSpinner
      className={twMerge("animate-spin", primary && "text-primary", className)}
      {...rest}
    />
  );
}

Spinner.propTypes = {
  primary: PropTypes.bool,
  className: PropTypes.string,
};
