import PropTypes from "prop-types";

import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Label({ className, htmlFor, children }) {
  return (
    <label
      className={twMerge("text-primary font-bold", className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  children: PROP.CHILDREN.isRequired,
};
