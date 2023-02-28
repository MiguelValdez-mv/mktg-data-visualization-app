import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconArrowLeft({ className, ...rest }) {
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
        d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
      />
    </svg>
  );
}

IconArrowLeft.propTypes = {
  className: PropTypes.string,
};
