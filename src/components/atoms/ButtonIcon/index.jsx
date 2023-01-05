import PropTypes from "prop-types";

import { twMerge } from "@/utils/twMerge";

export function ButtonIcon({
  className,
  onClick,
  icon: Icon,
  muted,
  hoverable = true,
  iconClassName,
  ...rest
}) {
  return (
    <button className={className} onClick={onClick} type="button">
      <Icon
        className={twMerge(
          muted && "text-muted",
          hoverable && "hover:opacity-50",
          iconClassName
        )}
        {...rest}
      />
    </button>
  );
}

ButtonIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  muted: PropTypes.bool,
  hoverable: PropTypes.bool,
  iconClassName: PropTypes.string,
};
