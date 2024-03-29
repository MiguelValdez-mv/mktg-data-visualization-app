import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconAreaChart({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      fill="none"
      viewBox="0 0 15 15"
      height="1em"
      width="1em"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M1 0H0v15h15v-.494V2.5a.5.5 0 10-1 0c0 2.18-.485 3.832-1.173 4.92C12.137 8.514 11.277 9 10.5 9c-.32 0-.642-.158-1.005-.492C9.13 8.17 8.782 7.71 8.4 7.2l-.016-.021c-.363-.485-.761-1.015-1.201-1.421C6.733 5.342 6.179 5 5.5 5c-1.298 0-2.178.98-2.707 2.172C2.256 8.38 2 9.954 2 11.5v.197c0 .842-.37 1.636-1 2.177V0z"
      />
    </svg>
  );
}

IconAreaChart.propTypes = {
  className: PropTypes.string,
};
