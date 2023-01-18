/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { Label } from "@/components/atoms/Label";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { twMerge } from "@/utils/twMerge";

export function TextInput({
  label,
  id,
  error,
  startAdornment = null,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete = "off",
  endAdornment = null,
}) {
  return (
    <Col>
      {label && (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Spacing bottom={1} />
        </>
      )}

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
          className="w-full border-0 p-0 focus:ring-0"
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />

        {endAdornment && (
          <>
            <Spacing left={2} />
            {endAdornment}
          </>
        )}
      </Row>

      {error && (
        <>
          <Spacing top={1} />
          <Text error>{error}</Text>
        </>
      )}
    </Col>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  startAdornment: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  endAdornment: PropTypes.node,
};
