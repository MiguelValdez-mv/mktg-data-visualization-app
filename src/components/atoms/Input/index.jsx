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
          "border border-slate-400 rounded-xl text-slate-700 p-2 hover:border-sky-900 focus:outline-sky-900",
      },
    }}
  />
));

Input.propTypes = {
  placeholder: PropTypes.string,
};

Input.displayName = "Input";
