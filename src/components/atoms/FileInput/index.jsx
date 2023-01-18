import PropTypes from "prop-types";

import { Label } from "@/components/atoms/Label";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";

export function FileInput({ label, id, onChange, accept, multiple }) {
  return (
    <Col>
      {label && (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Spacing bottom={1} />
        </>
      )}

      <input
        className="focus:outline-none file:bg-transparent file:rounded-xl file:border file:border-solid file:border-muted file:text-primary file:p-2 file:mr-2 text-muted"
        type="file"
        id={id}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
      />
    </Col>
  );
}

FileInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
};
