import { Field } from "formik";
import PropTypes from "prop-types";

import { Input } from "@/components/atoms/Input";

export function CustomField({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ form: { touched, errors }, field: { value, onChange, onBlur } }) => (
        <Input
          error={touched[name] && errors[name]}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
      )}
    </Field>
  );
}

CustomField.propTypes = {
  name: PropTypes.string.isRequired,
};
