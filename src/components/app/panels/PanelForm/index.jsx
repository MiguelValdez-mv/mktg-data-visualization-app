import { Formik } from "formik";
import PropTypes from "prop-types";

import { IconBxErrorCircle } from "@/assets/svgs/IconBxErrorCircle";
import { Form } from "@/components/atoms/Form";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { TextInput } from "@/components/atoms/inputs/TextInput";
import { Col } from "@/components/layout/Col";
import { Modal } from "@/components/layout/Modal";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { ProfileCard } from "@/components/molecules/ProfileCard";
import { FORM_SCHEMES, PROP } from "@/constants";
import { COPY } from "@/copy";

export function PanelForm({
  action = "create",
  initialValues,
  onSubmit,
  businesses = [],
  isLoading,
  disabledForm,
}) {
  const createPanel = action === "create";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FORM_SCHEMES.PANEL}
      onSubmit={onSubmit}
      enableReinitialize
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
            label={COPY["panelForm.name"]}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
            disabled={disabledForm}
          />
          <Spacing bottom={2} />

          <TextInput
            id="description"
            label={COPY["panelForm.description"]}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && errors.description}
            disabled={disabledForm}
          />
          <Spacing bottom={2} />

          <Text bold>{COPY["panelForm.business"]}</Text>
          <Spacing bottom={1} />

          {businesses.length ? (
            <Col className="sm:flex-row sm:justify-between sm:items-center">
              <ProfileCard {...values.business} />

              {!disabledForm && (
                <>
                  <Spacing top={1} />
                  <Modal
                    title={COPY["panelForm.business.modal.title"]}
                    trigger={
                      <Button variant="outline-primary" spacing>
                        {COPY["panelForm.business.change"]}
                      </Button>
                    }
                    fullScreenOnMobile
                  >
                    {(close) =>
                      businesses.map((business) => (
                        <ProfileCard
                          key={business._id}
                          onClick={() => {
                            setFieldValue("business", business);
                            close();
                          }}
                          pressable
                          {...business}
                        />
                      ))
                    }
                  </Modal>
                </>
              )}
            </Col>
          ) : (
            <Col className="justify-between sm:items-center sm:flex-row">
              <Row>
                <IconBxErrorCircle className="text-primary" />
                <Spacing right={1} />

                <Text>{COPY["panelForm.business.noBusinesses"]}</Text>
              </Row>
              <Spacing bottom={1} />

              <Link to="/businesses/create-business">
                <Button className="w-full sm:w-auto" variant="outline-primary">
                  {COPY["panelForm.business.addBusiness"]}
                </Button>
              </Link>
            </Col>
          )}

          {touched.owner && !!errors.owner && (
            <>
              <Spacing top={1} />
              <Text error>{errors.owner}</Text>
            </>
          )}
          <Spacing bottom={4} />

          {!disabledForm && (
            <Button
              className="sm:self-end"
              type="submit"
              isLoading={isLoading}
              disabled={createPanel ? isLoading : isLoading || !dirty}
              spacing
            >
              {COPY[`panelForm.${createPanel ? "add" : "save"}`]}
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
}

PanelForm.propTypes = {
  action: PropTypes.oneOf(["create", "update"]),
  // eslint-disable-next-line react/forbid-prop-types
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  businesses: PROP.BUSINESSES,
  isLoading: PropTypes.bool,
  disabledForm: PropTypes.bool,
};
