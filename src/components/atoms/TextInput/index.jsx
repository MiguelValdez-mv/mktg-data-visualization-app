/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { twMerge } from "@/utils/twMerge";

export function TextInput({
  error,
  startAdornment = null,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  endAdornment = null,
}) {
  return (
    <Col>
      <Row
        className={twMerge(
          "border rounded-xl text-primary p-2 items-center bg-white",
          error
            ? "border-error"
            : "border-muted hover:border-primary focus-within:border-primary"
        )}
      >
        {startAdornment && (
          <>
            {startAdornment}
            <Spacing right={2} />
          </>
        )}

        <input
          className="outline-none flex-1 bg-transparent"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />

        {endAdornment && (
          <>
            <Spacing left={2} />
            {endAdornment}
          </>
        )}
      </Row>
      <Spacing bottom={0.5} />

      {error && <Text error>{error}</Text>}
    </Col>
  );
}

TextInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
};
