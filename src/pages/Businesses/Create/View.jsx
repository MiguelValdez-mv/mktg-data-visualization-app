import PropTypes from "prop-types";

import { BusinessForm } from "@/components/app/businesses/BusinessForm";
import { Text } from "@/components/atoms/Text";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  isCreatingBusiness,
  owners,
  initialValues,
  handleBusinessCreationFormSubmit,
}) {
  return (
    <Page>
      <Header title={COPY["businesses.creation.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Surface>
          <Text subtitle bold>
            {COPY["businesses.creation.title"]}
          </Text>
          <Spacing bottom={4} />

          <BusinessForm
            initialValues={initialValues}
            onSubmit={handleBusinessCreationFormSubmit}
            owners={owners}
            isLoading={isCreatingBusiness}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isCreatingBusiness: PropTypes.bool.isRequired,
  owners: PROP.USERS,
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  handleBusinessCreationFormSubmit: PropTypes.func.isRequired,
};

export default View;
