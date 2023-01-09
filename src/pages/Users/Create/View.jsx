import { Formik } from "formik";

import { IconAdd } from "@/assets/svgs/IconAdd";
import { Button } from "@/components/atoms/Button";
import { Form } from "@/components/atoms/Form";
import { TextInput } from "@/components/atoms/TextInput";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";

function View() {
  return (
    <Page>
      <Header title={COPY["pages.users.create.title"]} />
      <Spacing bottom={10} />

      <Surface>
        <Formik initialValues={{ name: "", email: "" }}>
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <Form onSubmit={handleSubmit}>
              <TextInput
                name="name"
                label={COPY["pages.users.create.name"]}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
              <Spacing bottom={2} />

              <TextInput
                name="email"
                label={COPY["pages.users.create.email"]}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <Spacing bottom={2} />

              <Button
                className="self-end"
                type="submit"
                startIcon={<IconAdd />}
              >
                {COPY["pages.users.create.title"]}
              </Button>
            </Form>
          )}
        </Formik>
      </Surface>
    </Page>
  );
}

export default View;
