import { Field } from "formik";
import PropTypes from "prop-types";

import { TextInput } from "@/components/atoms/TextInput";

export function CustomField({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ form: { touched, errors }, field: { value, onChange, onBlur } }) => (
        <TextInput
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
