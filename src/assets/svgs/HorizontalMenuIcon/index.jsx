import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function HorizontalMenuIcon({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...rest}
    >
      <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  );
}

HorizontalMenuIcon.propTypes = {
  className: PropTypes.string,
};
