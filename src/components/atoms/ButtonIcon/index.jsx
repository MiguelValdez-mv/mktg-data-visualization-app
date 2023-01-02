import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function ButtonIcon({
  containerClassName,
  onClick,
  icon: Icon,
  muted,
  hoverable = true,
  className,
  ...rest
}) {
  return (
    <button className={containerClassName} onClick={onClick} type="button">
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
  containerClassName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  hoverable: PropTypes.bool,
  className: PropTypes.string,
};
