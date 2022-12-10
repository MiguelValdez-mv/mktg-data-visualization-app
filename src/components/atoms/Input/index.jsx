/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { twMerge } from "@/utils/twMerge";

export function Input({
  field: { name, value, onChange, onBlur },
  form: { touched, errors },
  placeholder,
}) {
  const error = touched[name] && errors[name];

  return (
    <Col>
      <Col
        className={twMerge(
          "border rounded-xl text-secondary p-2",
          error
            ? "border-error"
            : "border-third hover:border-primary focus-within:border-primary"
        )}
      >
        <input
          className="outline-none"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </Col>
      <Spacing bottom={0.5} />

      {error && <Text error>{error}</Text>}
    </Col>
  );
}

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  placeholder: PropTypes.string,
};
