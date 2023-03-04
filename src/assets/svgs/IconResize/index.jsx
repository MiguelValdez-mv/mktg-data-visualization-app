import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconResize({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M304 96h112v112M405.77 106.2L111.98 400.02M208 416H96V304"
      />
    </svg>
  );
}

IconResize.propTypes = {
  className: PropTypes.string,
};
