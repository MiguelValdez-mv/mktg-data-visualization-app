import PropTypes from "prop-types";

import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

export function Text({
  muted,
  white,
  error,
  center,
  semibold,
  bold,
  italic,
  lowercase,
  uppercase,
  capitalize,
  tiny,
  small,
  subtitle,
  title,
  caption,
  truncate,
  className,
  children,
}) {
  return (
    <span
      className={twMerge(
        "text-primary",
        muted && "text-muted",
        white && "text-white",
        error && "text-error",
        center && "text-center",
        semibold && "font-semibold",
        bold && "font-bold",
        italic && "italic",
        lowercase && "lowercase",
        uppercase && "uppercase",
        capitalize && "first-letter:capitalize",
        tiny && "text-tiny",
        small && "text-small",
        subtitle && "text-subtitle",
        title && "text-title",
        caption && "text-caption",
        truncate && "truncate",
        className
      )}
    >
      {children}
    </span>
  );
}

Text.propTypes = {
  muted: PropTypes.bool,
  white: PropTypes.bool,
  error: PropTypes.bool,
  center: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  lowercase: PropTypes.bool,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  subtitle: PropTypes.bool,
  title: PropTypes.bool,
  caption: PropTypes.bool,
  truncate: PropTypes.bool,
  className: PropTypes.string,
  children: PROP.CHILDREN.isRequired,
};
