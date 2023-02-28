import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconDocumentList({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.5 15.5v-10a2 2 0 00-2-2h-8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2zM9.5 7.5h5M6.5 7.5h1M9.5 10.5h5M6.5 10.5h1M9.5 13.5h5M6.5 13.5h1" />
      </g>
    </svg>
  );
}

IconDocumentList.propTypes = {
  className: PropTypes.string,
};
