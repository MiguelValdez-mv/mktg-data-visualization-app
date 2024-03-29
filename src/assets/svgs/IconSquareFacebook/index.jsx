import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function IconSquareFacebook({ className, ...rest }) {
  return (
    <svg
      className={twMerge("min-w-fit w-6 h-6", className)}
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      <path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
    </svg>
  );
}

IconSquareFacebook.propTypes = {
  className: PropTypes.string,
};
