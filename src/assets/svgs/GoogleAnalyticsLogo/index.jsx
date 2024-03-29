import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function GoogleAnalyticsLogo({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      style={{
        enableBackground: "new 0 0 500 500",
      }}
      xmlSpace="preserve"
      {...rest}
    >
      <path
        d="M475.8 437.2c0 34-27.6 62.7-61.6 62.7h-7.4c-31.9-4.3-55.3-32.9-54.2-64.8V65.3C351.5 33.4 374.9 5.8 406.8.5c34-4.3 64.8 20.2 69.1 54.2v382.5z"
        style={{
          fill: "#f9ab00",
        }}
      />
      <path
        d="M85.8 376.7c34 0 61.6 27.6 61.6 61.6s-27.6 61.6-61.6 61.6-61.6-27.6-61.6-61.6c-1.1-34 27.6-61.6 61.6-61.6zm162.6-188.1c-34 2.1-60.6 30.8-60.6 64.8v166.8c0 44.6 20.2 72.3 48.9 78.6 34 6.4 65.9-14.9 73.3-48.9 1.1-4.3 1.1-8.5 1.1-12.8v-186c0-34-27.6-62.7-61.6-62.7h-1.1z"
        style={{
          fill: "#e37400",
        }}
      />
    </svg>
  );
}

GoogleAnalyticsLogo.propTypes = {
  className: PropTypes.string,
};
