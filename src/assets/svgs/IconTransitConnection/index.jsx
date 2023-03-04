import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconTransitConnection({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <path d="M18 11h-3.18C14.4 9.84 13.3 9 12 9c-1.3 0-2.4.84-2.82 2H6c-.33 0-2-.1-2-2V8c0-1.83 1.54-2 2-2h10.18C16.6 7.16 17.7 8 19 8a3 3 0 003-3 3 3 0 00-3-3c-1.3 0-2.4.84-2.82 2H6C4.39 4 2 5.06 2 8v1c0 2.94 2.39 4 4 4h3.18c.42 1.16 1.52 2 2.82 2 1.3 0 2.4-.84 2.82-2H18c.33 0 2 .1 2 2v1c0 1.83-1.54 2-2 2H7.82C7.4 16.84 6.3 16 5 16a3 3 0 00-3 3 3 3 0 003 3c1.3 0 2.4-.84 2.82-2H18c1.61 0 4-1.07 4-4v-1c0-2.93-2.39-4-4-4m1-7a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1M5 20a1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1 1 1 0 01-1 1z" />
    </svg>
  );
}

IconTransitConnection.propTypes = {
  className: PropTypes.string,
};
