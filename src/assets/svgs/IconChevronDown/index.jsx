import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconChevronDown({ className, ...rest }) {
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
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
  );
}

IconChevronDown.propTypes = {
  className: PropTypes.string,
};
