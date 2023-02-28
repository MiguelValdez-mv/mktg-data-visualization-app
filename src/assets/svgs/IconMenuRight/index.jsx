import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconMenuRight({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      fill="none"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM11 11a1 1 0 100 2h8a1 1 0 100-2h-8z"
      />
    </svg>
  );
}

IconMenuRight.propTypes = {
  className: PropTypes.string,
};
