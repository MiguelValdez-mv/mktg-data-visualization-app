import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconTrash({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...rest}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
    </svg>
  );
}

IconTrash.propTypes = {
  className: PropTypes.string,
};
