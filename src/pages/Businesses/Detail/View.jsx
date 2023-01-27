import PropTypes from "prop-types";

import { BusinessForm } from "@/components/app/businesses/BusinessForm";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  isUpdatingBusiness,
  owners,
  businessRegistrationDate,
  initialValues,
  handleBusinessUpdateFormSubmit,
}) {
  return (
    <Page>
      <Header title={COPY["businesses.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Surface>
          <Col className="sm:flex-row sm:justify-between">
            <Text subtitle bold>
              {COPY["businesses.detail.title"]}
            </Text>
            <Spacing bottom={2} />

            <Col className="self-end sm:self-auto">
              <Text bold end>
                {COPY["businesses.detail.businessRegistrationDate"]}:
              </Text>

              <Text muted bold capitalize>
                {businessRegistrationDate}
              </Text>
            </Col>
          </Col>
          <Spacing bottom={4} />

          <BusinessForm
            action="update"
            initialValues={initialValues}
            onSubmit={handleBusinessUpdateFormSubmit}
            owners={owners}
            isLoading={isUpdatingBusiness}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isUpdatingBusiness: PropTypes.bool.isRequired,
  owners: PROP.USERS.isRequired,
  businessRegistrationDate: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  handleBusinessUpdateFormSubmit: PropTypes.func.isRequired,
};

export default View;
