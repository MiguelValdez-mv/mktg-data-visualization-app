import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconChartDonut({ className, ...rest }) {
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
      <path d="M10 3.2A9 9 0 1020.8 14a1 1 0 00-1-1H16a4.1 4.1 0 11-5-5V4a.9.9 0 00-1-.8" />
      <path d="M15 3.5A9 9 0 0120.5 9H16a9 9 0 00-1-1V3.5" />
    </svg>
  );
}

IconChartDonut.propTypes = {
  className: PropTypes.string,
};
