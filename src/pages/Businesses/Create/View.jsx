import PropTypes from "prop-types";

import { BusinessForm } from "@/components/app/businesses/BusinessForm";
import { Text } from "@/components/atoms/Text";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";
import { COPY } from "@/copy";

function View({ initialValues, handleBusinessCreationFormSubmit }) {
  return (
    <Page>
      <Header title={COPY["businesses.creation.title"]} />
      <Spacing bottom={8} />

      <Content>
        <Surface>
          <Text subtitle bold>
            {COPY["businesses.creation.title"]}
          </Text>
          <Spacing bottom={4} />

          <BusinessForm
            initialValues={initialValues}
            onSubmit={handleBusinessCreationFormSubmit}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  initialValues: PropTypes.object.isRequired, // eslint-disable-line
  handleBusinessCreationFormSubmit: PropTypes.func.isRequired,
};

export default View;
