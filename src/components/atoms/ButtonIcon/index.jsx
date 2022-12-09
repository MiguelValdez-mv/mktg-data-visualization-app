import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function ButtonIcon({
  onClick,
  icon: Icon,
  muted,
  hoverable = true,
  className,
  ...rest
}) {
  return (
    <button type="button" onClick={onClick}>
      <Icon
        className={twMerge(
          muted && "fill-third",
          hoverable && "hover:opacity-50",
          className
        )}
        {...rest}
      />
    </button>
  );
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  hoverable: PropTypes.bool,
  className: PropTypes.string,
};
