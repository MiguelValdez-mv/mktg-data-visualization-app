import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconStatsChart({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z" />
    </svg>
  );
}

IconStatsChart.propTypes = {
  className: PropTypes.string,
};
