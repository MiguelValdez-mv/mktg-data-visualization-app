import PropTypes from "prop-types";
import { forwardRef } from "react";

import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export const IconButton = forwardRef(
  ({ muted, primary, hoverable = true, className, onClick, children }, ref) => (
    <button
      ref={ref}
      className={twMerge(
        muted && "text-muted",
        primary && "text-primary",
        hoverable && "hover:opacity-50",
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
);

IconButton.propTypes = {
  muted: PropTypes.bool,
  primary: PropTypes.bool,
  hoverable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PROP.CHILDREN.isRequired,
};
