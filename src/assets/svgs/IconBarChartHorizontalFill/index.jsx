import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconBarChartHorizontalFill({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 3v4H3V3h9zm4 14v4H3v-4h13zm6-7v4H3v-4h19z" />
    </svg>
  );
}

IconBarChartHorizontalFill.propTypes = {
  className: PropTypes.string,
};
