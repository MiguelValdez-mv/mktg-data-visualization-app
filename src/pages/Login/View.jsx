import { Formik } from "formik";
import PropTypes from "prop-types";

import { IconArrowLeft } from "@/assets/svgs/IconArrowLeft";
import { IconSquareFacebook } from "@/assets/svgs/IconSquareFacebook";
import { IconSquareInstagram } from "@/assets/svgs/IconSquareInstagram";
import { OpenTechDarkLogo } from "@/assets/svgs/OpenTechDarkLogo";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { Button } from "@/components/atoms/Button";
import { Form } from "@/components/atoms/Form";
import { IconButton } from "@/components/atoms/IconButton";
import { Text } from "@/components/atoms/Text";
import { TextInput } from "@/components/atoms/TextInput";
import { Col } from "@/components/layout/Col";
import { Page } from "@/components/layout/Page";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { LINKS, FORM_VALIDATION_SCHEMES } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  otpCreationIsSuccessful,
  changeEmail,
  handleOtpCreationFormSubmit,
  handleOtpValidationFormSubmit,
  redirectTo,
}) {
  return (
    <Page className="h-screen justify-around items-center">
      <Text caption bold>
        {COPY["pages.login.welcome"]}
      </Text>

      <Surface className="py-20">
        <OpenTechLogo className="w-auto h-auto px-10" />
        <Spacing bottom={4} />

        {!otpCreationIsSuccessful ? (
          <Formik
            key="otp-creation"
            initialValues={{ email: "" }}
            validationSchema={FORM_VALIDATION_SCHEMES.OTP_CREATION}
            onSubmit={handleOtpCreationFormSubmit}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit}>
                <TextInput
                  id="email"
                  placeholder={COPY["pages.login.email"]}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
                />
                <Spacing bottom={2} />

                <Button type="submit" isLoading={isLoading}>
                  {COPY["pages.login.continue"]}
                </Button>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            key="otp-validation"
            initialValues={{ otp: "" }}
            validationSchema={FORM_VALIDATION_SCHEMES.OTP_VALIDATION}
            onSubmit={handleOtpValidationFormSubmit}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit}>
                <TextInput
                  id="otp"
                  placeholder={COPY["pages.login.otp"]}
                  value={values.otp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.otp && errors.otp}
                />
                <Spacing bottom={2} />

                <Button type="submit" isLoading={isLoading}>
                  {COPY["pages.login.cta"]}
                </Button>
                <Spacing bottom={2} />

                <Button
                  variant="outline"
                  onClick={changeEmail}
                  startIcon={<IconArrowLeft />}
                >
                  {COPY["pages.login.changeEmail"]}
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Surface>

      <Col className="items-center">
        <Row>
          <IconButton onClick={redirectTo(LINKS.FACEBOOK)} muted>
            <IconSquareFacebook />
          </IconButton>
          <Spacing right={1} />

          <IconButton onClick={redirectTo(LINKS.INSTAGRAM)} muted>
            <IconSquareInstagram />
          </IconButton>
        </Row>
        <Spacing bottom={2} />

        <Row>
          <Text className="whitespace-nowrap" muted small>
            {COPY["pages.login.productCreatedBy"]}
          </Text>
          <Spacing right={1} />

          <IconButton onClick={redirectTo(LINKS.OFFICIAL_WEBSITE)} muted>
            <OpenTechDarkLogo className="w-24 h-auto" />
          </IconButton>
        </Row>
      </Col>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  otpCreationIsSuccessful: PropTypes.bool.isRequired,
  changeEmail: PropTypes.func.isRequired,
  handleOtpCreationFormSubmit: PropTypes.func.isRequired,
  handleOtpValidationFormSubmit: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
};

export default View;
