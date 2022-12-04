import { InputUnstyled } from "@mui/base";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Input = forwardRef(({ placeholder }, ref) => (
  <InputUnstyled
    ref={ref}
    placeholder={placeholder}
    slotProps={{
      input: {
        className:
          "border border-third rounded-xl text-secondary p-2 hover:border-primary focus:outline-primary",
      },
    }}
  />
));

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.displayName = "Input";
