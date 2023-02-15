import { Formik } from "formik";
import PropTypes from "prop-types";

import { Form } from "@/components/atoms/Form";
import { Button } from "@/components/atoms/buttons/Button";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { Spacing } from "@/components/layout/Spacing";
import { COPY } from "@/copy";

export function GoogleAnalyticsWidgetForm({
  action = "create",
  initialValues,
  onSubmit,
  isLoading,
}) {
  const createWidget = action === "create";

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        dirty,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="title"
            label={COPY["googleAnalyticsWidgetForm.title"]}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && errors.title}
          />
          <Spacing bottom={4} />

          <Button
            className="sm:self-end"
            type="submit"
            isLoading={isLoading}
            disabled={createWidget ? isLoading : isLoading || !dirty}
            spacing
          >
            {COPY[`googleAnalyticsWidgetForm.${createWidget ? "add" : "save"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

GoogleAnalyticsWidgetForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
