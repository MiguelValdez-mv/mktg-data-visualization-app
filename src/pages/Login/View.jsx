import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { IconArrowLeft } from "@/assets/svgs/IconArrowLeft";
import { IconSquareFacebook } from "@/assets/svgs/IconSquareFacebook";
import { IconSquareInstagram } from "@/assets/svgs/IconSquareInstagram";
import { OpenTechDarkLogo } from "@/assets/svgs/OpenTechDarkLogo";
import { OpenTechLogo } from "@/assets/svgs/OpenTechLogo";
import { Button } from "@/components/atoms/Button";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Input } from "@/components/atoms/Input";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
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
    <Col className="h-screen justify-around items-center">
      <Text caption bold>
        {COPY["pages.login.welcome"]}
      </Text>

      <Surface className="py-20">
        <Spacing horizontal={6} bottom={4}>
          <OpenTechLogo />
        </Spacing>

        {!otpCreationIsSuccessful ? (
          <Formik
            key="otp-creation"
            initialValues={{ email: "" }}
            validationSchema={FORM_VALIDATION_SCHEMES.OTP_CREATION}
            onSubmit={handleOtpCreationFormSubmit}
          >
            <Form className="flex flex-col">
              <Field
                name="email"
                placeholder={COPY["forms.labels.email"]}
                component={Input}
              />
              <Spacing bottom={2} />

              <Button type="submit" isLoading={isLoading}>
                {COPY["pages.login.continue"]}
              </Button>
            </Form>
          </Formik>
        ) : (
          <Formik
            key="otp-validation"
            initialValues={{ otp: "" }}
            validationSchema={FORM_VALIDATION_SCHEMES.OTP_VALIDATION}
            onSubmit={handleOtpValidationFormSubmit}
          >
            <Form className="flex flex-col">
              <Field
                name="otp"
                placeholder={COPY["forms.labels.otp"]}
                component={Input}
              />
              <Spacing bottom={2} />

              <Button type="submit" isLoading={isLoading}>
                {COPY["pages.login.cta"]}
              </Button>
              <Spacing bottom={2} />

              <Button
                variant="outline"
                onClick={changeEmail}
                renderLeft={
                  <>
                    <IconArrowLeft />
                    <Spacing right={1} />
                  </>
                }
              >
                {COPY["pages.login.changeEmail"]}
              </Button>
            </Form>
          </Formik>
        )}
      </Surface>

      <Col className="items-center">
        <Row>
          <ButtonIcon
            className="w-6 h-6"
            onClick={redirectTo(LINKS.FACEBOOK)}
            icon={IconSquareFacebook}
            muted
          />
          <Spacing right={1} />

          <ButtonIcon
            className="w-6 h-6"
            onClick={redirectTo(LINKS.INSTAGRAM)}
            icon={IconSquareInstagram}
            muted
          />
        </Row>
        <Spacing bottom={2} />

        <Row>
          <Text className="whitespace-nowrap" muted small>
            {COPY["pages.login.productCreatedBy"]}
          </Text>
          <Spacing right={1} />

          <ButtonIcon
            className="w-24"
            onClick={redirectTo(LINKS.OFFICIAL_WEBSITE)}
            icon={OpenTechDarkLogo}
            muted
          />
        </Row>
      </Col>
    </Col>
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
