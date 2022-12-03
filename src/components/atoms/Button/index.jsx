import { ButtonUnstyled } from "@mui/base";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { PROP } from "@/constants";

const baseStyles = {
  solid: "text-white bg-gradient-to-r from-sky-900 to-gray-900",
  outline: "text-cyan-400 border border-cyan-400",
};

export const Button = forwardRef(
  ({ variant = "solid", disabled, children }, ref) => (
    <ButtonUnstyled
      ref={ref}
      slotProps={{
        root: {
          className: twMerge(
            "rounded-xl font-bold p-2 active:drop-shadow-xl",
            baseStyles[variant],
            disabled && "opacity-25"
          ),
        },
      }}
      disabled={disabled}
    >
      {children}
    </ButtonUnstyled>
  )
);

Button.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["solid", "outline"]),
  children: PROP.children().isRequired,
};

Button.displayName = "Button";
