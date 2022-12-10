import PropTypes from "prop-types";

import { Col } from "@/components/layout/Col";

export function Input({
  field: { name, value, onChange, onBlur },
  placeholder,
}) {
  return (
    <Col className="flex flex-row border border-third rounded-xl text-secondary p-2 hover:border-primary focus-within:border-primary">
      <input
        className="outline-none"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
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
  placeholder: PropTypes.string,
};
