import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconMenu({ className, ...rest }) {
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
        d="M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12.032a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 17.064a1 1 0 100 2h18a1 1 0 000-2H3z"
      />
    </svg>
  );
}

IconMenu.propTypes = {
  className: PropTypes.string,
};
