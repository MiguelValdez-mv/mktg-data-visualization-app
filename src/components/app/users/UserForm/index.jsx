/* eslint-disable react/forbid-prop-types */
import { Formik } from "formik";
import PropTypes from "prop-types";

import { Form } from "@/components/atoms/Form";
import { Text } from "@/components/atoms/Text";
import { ToggleMenuIcon } from "@/components/atoms/ToggleMenuIcon";
import { Button } from "@/components/atoms/buttons/Button";
import { AvatarInput } from "@/components/atoms/inputs/AvatarInput";
import { Checkbox } from "@/components/atoms/inputs/Checkbox";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Spacing } from "@/components/layout/Spacing";
import { USER_ROLES } from "@/constants";
import { COPY } from "@/copy";

export function UserForm({
  initialValues,
  validationSchema,
  onSubmit,
  action = "create",
  isLoading,
}) {
  const createUser = action === "create";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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
        dirty,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            label={COPY["userForm.name"]}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
          />
          <Spacing bottom={2} />

          <TextInput
            id="email"
            label={COPY["userForm.email"]}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <Spacing bottom={2} />

          <Text bold>{COPY["userForm.role"]}</Text>
          <Spacing bottom={1} />

          <Menu
            trigger={(menuIsOpen) => (
              <Button
                className="justify-between font-normal"
                variant="outline-primary"
                endIcon={<ToggleMenuIcon menuIsOpen={menuIsOpen} />}
              >
                {COPY[`userForm.role.${values.role.toLowerCase()}`]}
              </Button>
            )}
          >
            {(closeMenu) =>
              Object.values(USER_ROLES).map((opt) => (
                <MenuOption
                  key={opt}
                  onClick={() => setFieldValue("role", opt)}
                  closeMenu={closeMenu}
                >
                  {COPY[`userForm.role.${opt.toLowerCase()}`]}
                </MenuOption>
              ))
            }
          </Menu>
          <Spacing bottom={2} />

          <AvatarInput
            id="avatar"
            label={COPY["userForm.avatar"]}
            avatar={values.avatar}
            name={values.name}
            onChange={(e) => setFieldValue("avatar", e.currentTarget.files[0])}
          />
          <Spacing bottom={2} />

          {createUser && (
            <>
              <Checkbox
                id="notifyRegistration"
                label={COPY["userForm.notifyRegistration"]}
                checked={values.notifyRegistration}
                onChange={handleChange}
              />
              <Spacing bottom={2} />
            </>
          )}

          <Button
            className="sm:self-end"
            type="submit"
            isLoading={isLoading}
            disabled={createUser ? isLoading : isLoading || !dirty}
          >
            {COPY[`userForm.${createUser ? "add" : "save"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

UserForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  action: PropTypes.oneOf(["create", "update"]),
  isLoading: PropTypes.bool,
};
