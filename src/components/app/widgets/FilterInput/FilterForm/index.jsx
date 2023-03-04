/* eslint-disable react/forbid-prop-types */
import { Formik } from "formik";
import PropTypes from "prop-types";

import { Form } from "@/components/atoms/Form";
import { Text } from "@/components/atoms/Text";
import { ToggleMenuIcon } from "@/components/atoms/ToggleMenuIcon";
import { Button } from "@/components/atoms/buttons/Button";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { ResponsiveMenu } from "@/components/layout/ResponsiveMenu";
import { Spacing } from "@/components/layout/Spacing";
import { OPERATORS, FORM_SCHEMES } from "@/constants";
import { COPY } from "@/copy";

export function FilterForm({
  initialValues,
  action = "create",
  onSubmit,
  fields,
}) {
  const createFilter = action === "create";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_SCHEMES.WIDGET_FILTER}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit}>
          <ResponsiveMenu
            title={COPY["filterForm.field.modal.title"]}
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon isOpen={isOpen} />}
              >
                <Text className="truncate">{values.field.copy.spanish}</Text>
              </Button>
            )}
            nested
          >
            {(close) =>
              fields.map((field) => (
                <MenuOption
                  key={field.name}
                  onClick={() => setFieldValue("field", field)}
                  close={close}
                >
                  <Text className="text-inherit truncate">
                    {field.copy.spanish}
                  </Text>
                </MenuOption>
              ))
            }
          </ResponsiveMenu>
          <Spacing bottom={2} />

          <ResponsiveMenu
            title={COPY["filterForm.operator.modal.title"]}
            trigger={(isOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon isOpen={isOpen} />}
              >
                {COPY[`filterForm.operator.${values.operator.toLowerCase()}`]}
              </Button>
            )}
            nested
          >
            {(close) =>
              Object.values(OPERATORS).map((operator) => (
                <MenuOption
                  key={operator}
                  onClick={() => setFieldValue("operator", operator)}
                  close={close}
                >
                  {COPY[`filterForm.operator.${operator.toLowerCase()}`]}
                </MenuOption>
              ))
            }
          </ResponsiveMenu>
          <Spacing bottom={2} />

          <TextInput
            id="operand"
            placeholder={COPY["filterForm.operand"]}
            value={values.operand}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.operand && errors.operand}
          />
          <Spacing bottom={4} />

          <Button className="sm:self-end" type="submit" spacing>
            {COPY[`filterForm.${createFilter ? "add" : "save"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

FilterForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
};
