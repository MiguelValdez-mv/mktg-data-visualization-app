import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import { PROP } from "@/constants";

export function Text({
  white,
  muted,
  center,
  semibold,
  bold,
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
        "text-slate-700",
        white && "text-white",
        muted && "text-slate-400",
        center && "text-center",
        semibold && "font-semibold",
        bold && "font-bold",
        tiny && "text-xs",
        small && "text-sm",
        subtitle && "text-2xl",
        title && "text-3xl",
        caption && "text-4xl",
        truncate && "truncate",
        className
      )}
    >
      {children}
    </span>
  );
}

Text.propTypes = {
  white: PropTypes.bool,
  muted: PropTypes.bool,
  center: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
  subtitle: PropTypes.bool,
  title: PropTypes.bool,
  caption: PropTypes.bool,
  truncate: PropTypes.bool,
  className: PropTypes.string,
  children: PROP.children().isRequired,
};
