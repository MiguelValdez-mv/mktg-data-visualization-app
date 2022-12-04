import { ButtonUnstyled } from "@mui/base";
import PropTypes from "prop-types";
import { forwardRef } from "react";

import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

const baseStyles = {
  solid: "text-white bg-gradient-to-r from-primary to-secondary",
  outline: "text-cyan border border-cyan",
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
