import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconChartLineVariant({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z" />
    </svg>
  );
}

IconChartLineVariant.propTypes = {
  className: PropTypes.string,
};
