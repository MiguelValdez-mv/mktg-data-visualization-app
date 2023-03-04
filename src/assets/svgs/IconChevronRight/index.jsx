import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconChevronRight({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
      />
    </svg>
  );
}

IconChevronRight.propTypes = {
  className: PropTypes.string,
};
