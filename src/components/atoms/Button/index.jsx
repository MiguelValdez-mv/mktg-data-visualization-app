/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";

import { Spinner } from "@/components/atoms/Spinner";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { twMerge } from "@/utils/twMerge";

const baseStyles = {
  solid: "text-white bg-gradient-to-r from-primary to-secondary",
  outline: "text-cyan border border-cyan",
};

export function Button({
  variant = "solid",
  disabled,
  type = "button",
  isLoading,
  children,
}) {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center rounded-xl font-bold p-2 active:drop-shadow-xl",
        baseStyles[variant],
        disabled && "opacity-25"
      )}
      type={type}
      disabled={disabled}
    >
      {isLoading && (
        <>
          <Spinner />
          <Spacing right={1} />
        </>
      )}

      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["solid", "outline"]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PROP.CHILDREN.isRequired,
};
