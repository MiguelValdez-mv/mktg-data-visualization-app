import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconTable({ className, ...rest }) {
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
        fillRule="evenodd"
        d="M8 2h4.5a.5.5 0 01.5.5V5H8V2zM7 5V2H2.5a.5.5 0 00-.5.5V5h5zM2 6v3h5V6H2zm6 0h5v3H8V6zm0 4h5v2.5a.5.5 0 01-.5.5H8v-3zm-6 2.5V10h5v3H2.5a.5.5 0 01-.5-.5zm-1-10A1.5 1.5 0 012.5 1h10A1.5 1.5 0 0114 2.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

IconTable.propTypes = {
  className: PropTypes.string,
};
