/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import { forwardRef } from "react";

import { Spinner } from "@/components/atoms/Spinner";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

const baseStyles = {
  solid: "text-white bg-gradient-to-r from-primary to-secondary",
  outline: "border border-cyan text-cyan",
  "outline-primary": "border border-muted text-primary",
  ghost: "text-primary hover:text-white hover:bg-primary",
};

export const Button = forwardRef(
  (
    {
      variant = "solid",
      disabled,
      spacing,
      className,
      type = "button",
      onClick,
      isLoading,
      startIcon = null,
      children,
      endIcon = null,
    },
    ref
  ) => (
    <button
      ref={ref}
      className={twMerge(
        "flex justify-center items-center rounded-xl font-bold p-2 outline-none active:drop-shadow-surface",
        baseStyles[variant],
        disabled && "opacity-25",
        spacing && "px-7",
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading || startIcon ? (
        <>
          {isLoading ? <Spinner /> : startIcon}
          <Spacing right={2} />
        </>
      ) : null}

      {children}

      {endIcon && (
        <>
          <Spacing left={2} />
          {endIcon}
        </>
      )}
    </button>
  )
);

Button.propTypes = {
  variant: PropTypes.oneOf(["solid", "outline", "outline-primary", "ghost"]),
  disabled: PropTypes.bool,
  spacing: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  startIcon: PropTypes.node,
  children: PROP.CHILDREN.isRequired,
  endIcon: PropTypes.node,
};
