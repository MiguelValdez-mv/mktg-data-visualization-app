import PropTypes from "prop-types";

import { Label } from "@/components/atoms/Label";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { twMerge } from "@/utils/twMerge";

export function Checkbox({ id, className, checked, onChange, onClick, label }) {
  return (
    <Row className="items-center">
      <input
        id={id}
        className={twMerge(
          "w-4 h-4 rounded border-muted text-primary focus:ring-primary focus:ring-transparent",
          className
        )}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
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
  onClick: PropTypes.func,
  label: PropTypes.string,
};
