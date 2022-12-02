import { Input as AntDesignInput } from "antd";
import PropTypes from "prop-types";

export function Input({ placeholder }) {
  return (
    <AntDesignInput
      className="font-poppins text-slate-600 p-2 rounded-lg"
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
};
