/* eslint-disable react/no-unstable-nested-components */
import { Formik } from "formik";

import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
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
import { USER_ROLES } from "@/constants";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header title={COPY["pages.users.create.title"]} />
      <Spacing bottom={10} />

      <Surface className="p-8">
        <Formik
          initialValues={{
            name: "",
            email: "",
            role: USER_ROLES.ADMIN,
            notifyRegistration: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <TextInput
                id="name"
                label={COPY["pages.users.create.name"]}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
              <Spacing bottom={2} />

              <TextInput
                id="email"
                label={COPY["pages.users.create.email"]}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <Spacing bottom={2} />

              <Text bold>{COPY["pages.users.create.role"]}</Text>
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
                        `pages.users.create.role.${values.role.toLowerCase()}`
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
                      {COPY[`pages.users.create.role.${opt.toLowerCase()}`]}
                    </MenuOption>
                  ))
                }
              </Menu>
              <Spacing bottom={2} />

              <Checkbox
                id="notifyRegistration"
                label={COPY["pages.users.create.notifyRegistration"]}
                checked={values.notifyRegistration}
                onChange={handleChange}
              />
              <Spacing bottom={4} />

              <Button className="self-end" type="submit">
                {COPY["pages.users.create.cta"]}
              </Button>
            </Form>
          )}
        </Formik>
      </Surface>
    </Page>
  );
}

export default View;
