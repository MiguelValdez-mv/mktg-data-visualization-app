import PropTypes from "prop-types";

import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function IconButton({
  muted,
  hoverable = true,
  className,
  onClick,
  children,
}) {
  return (
    <button
      className={twMerge(
        muted && "text-muted",
        hoverable && "hover:opacity-50",
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  muted: PropTypes.bool,
  hoverable: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PROP.CHILDREN.isRequired,
};
