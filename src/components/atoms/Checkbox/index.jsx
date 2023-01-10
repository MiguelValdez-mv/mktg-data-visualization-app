import PropTypes from "prop-types";

import { Label } from "@/components/atoms/Label";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { twMerge } from "@/utils/twMerge";

export function Checkbox({ id, className, checked, onChange, label }) {
  return (
    <Row className="items-center">
      <input
        id={id}
        className={twMerge("w-4 h-4 accent-primary ", className)}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      {label && (
        <>
          <Spacing left={1} />
          <Label htmlFor={id}>{label}</Label>
        </>
      )}
    </Row>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
