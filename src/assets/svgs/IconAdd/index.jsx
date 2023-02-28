import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconAdd({ className, ...rest }) {
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
        d="M256 112v288M400 256H112"
      />
    </svg>
  );
}

IconAdd.propTypes = {
  className: PropTypes.string,
};
