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
  ghost: "text-primary hover:text-white hover:bg-primary",
};

export const Button = forwardRef(
  (
    {
      variant = "solid",
      disabled,
      className,
      type = "button",
      onClick,
      isLoading,
      renderLeft = null,
      children,
      renderRight = null,
    },
    ref
  ) => (
    <button
      ref={ref}
      className={twMerge(
        "flex justify-center items-center rounded-xl font-bold p-2 active:drop-shadow-xl",
        baseStyles[variant],
        disabled && "opacity-25",
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <Spinner />
          <Spacing right={2} />
        </>
      ) : (
        renderLeft
      )}

      {children}

      {renderRight}
    </button>
  )
);

Button.propTypes = {
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  renderLeft: PropTypes.node,
  children: PROP.CHILDREN.isRequired,
  renderRight: PropTypes.node,
};
