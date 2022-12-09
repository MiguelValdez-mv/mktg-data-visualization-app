import PropTypes from "prop-types";

import { IconSpinner } from "@/assets/svgs/IconSpinner";
import { twMerge } from "@/utils/twMerge";

export function Spinner({ className, ...rest }) {
  return (
    <IconSpinner className={twMerge("animate-spin", className)} {...rest} />
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
};
