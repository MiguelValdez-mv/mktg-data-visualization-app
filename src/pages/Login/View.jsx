import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

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

function View({ redirectToSocialNetwork }) {
  return (
    <Col className="h-screen justify-around items-center">
      <Text caption bold>
        {COPY["pages.login.welcome"]}
      </Text>

      <Surface className="py-20">
        <Spacing horizontal={6} bottom={4}>
          <OpenTechLogo />
        </Spacing>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={FORM_VALIDATION_SCHEMES.AUTH_SEND_OTP}
        >
          <Form className="flex flex-col">
            <Field
              name="email"
              placeholder={COPY["forms.labels.email"]}
              component={Input}
            />
            <Spacing bottom={2} />

            <Button type="submit">{COPY["pages.login.cta"]}</Button>
          </Form>
        </Formik>
      </Surface>

      <Col className="items-center">
        <Row>
          <ButtonIcon
            className="w-6 h-6"
            onClick={redirectToSocialNetwork(LINKS.FACEBOOK)}
            icon={IconSquareFacebook}
            muted
          />
          <Spacing right={1} />

          <ButtonIcon
            className="w-6 h-6"
            onClick={redirectToSocialNetwork(LINKS.INSTAGRAM)}
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

          <OpenTechDarkLogo width={100} />
        </Row>
      </Col>
    </Col>
  );
}

View.propTypes = {
  redirectToSocialNetwork: PropTypes.func.isRequired,
};

export default View;
