import { Formik } from "formik";
import PropTypes from "prop-types";

import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { FileInput } from "@/components/atoms/FileInput";
import { Form } from "@/components/atoms/Form";
import { Text } from "@/components/atoms/Text";
import { TextInput } from "@/components/atoms/TextInput";
import { ToggleMenuIcon } from "@/components/atoms/ToggleMenuIcon";
import { Header } from "@/components/layout/Header";
import { Menu } from "@/components/layout/Menu";
import { MenuOption } from "@/components/layout/Menu/MenuOption";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { USER_ROLES, FORM_VALIDATION_SCHEMES } from "@/constants";
import { COPY } from "@/copy";

function View({ isLoading, handleUserCreationFormSubmit }) {
  return (
    <Page>
      <Header title={COPY["pages.users.creation.title"]} />
      <Spacing bottom={4} />

      <Surface>
        <Formik
          initialValues={{
            name: "",
            email: "",
            role: USER_ROLES.ADMIN,
            avatar: null,
            notifyRegistration: false,
          }}
          validationSchema={FORM_VALIDATION_SCHEMES.USER_CREATION}
          onSubmit={handleUserCreationFormSubmit}
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
              <TextInput
                id="name"
                label={COPY["pages.users.creation.name"]}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
              />
              <Spacing bottom={2} />

              <TextInput
                id="email"
                label={COPY["pages.users.creation.email"]}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />
              <Spacing bottom={2} />

              <Text bold>{COPY["pages.users.creation.role"]}</Text>
              <Spacing bottom={1} />

              <Menu
                trigger={(menuIsOpen) => (
                  <Button
                    className="justify-between border-muted text-primary font-normal"
                    variant="outline"
                    endIcon={<ToggleMenuIcon menuIsOpen={menuIsOpen} />}
                  >
                    {
                      COPY[
                        `pages.users.creation.role.${values.role.toLowerCase()}`
                      ]
                    }
                  </Button>
                )}
              >
                {(closeMenu) =>
                  Object.values(USER_ROLES).map((opt) => (
                    <MenuOption
                      key={opt}
                      onClick={() => {
                        setFieldValue("role", opt);
                        closeMenu();
                      }}
                    >
                      {COPY[`pages.users.creation.role.${opt.toLowerCase()}`]}
                    </MenuOption>
                  ))
                }
              </Menu>
              <Spacing bottom={2} />

              <FileInput
                id="avatar"
                label={COPY["pages.users.creation.avatar"]}
                onChange={(e) =>
                  setFieldValue("avatar", e.currentTarget.files[0])
                }
                accept=".jpg, .jpeg, .png"
              />
              <Spacing bottom={2} />

              <Checkbox
                id="notifyRegistration"
                label={COPY["pages.users.creation.notifyRegistration"]}
                checked={values.notifyRegistration}
                onChange={handleChange}
              />
              <Spacing bottom={4} />

              <Button
                className="sm:self-end"
                type="submit"
                isLoading={isLoading}
              >
                {COPY["pages.users.creation.cta"]}
              </Button>
            </Form>
          )}
        </Formik>
      </Surface>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleUserCreationFormSubmit: PropTypes.func.isRequired,
};

export default View;
