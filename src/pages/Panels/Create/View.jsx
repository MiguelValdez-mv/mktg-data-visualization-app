import PropTypes from "prop-types";

import { PanelForm } from "@/components/app/panels/PanelForm";
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
  isCreatingPanel,
  businesses,
  initialValues,
  handlePanelCreationFormSubmit,
}) {
  return (
    <Page>
      <Header title={COPY["panels.creation.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Surface>
          <Text subtitle bold>
            {COPY["panels.creation.title"]}
          </Text>
          <Spacing bottom={4} />

          <PanelForm
            initialValues={initialValues}
            onSubmit={handlePanelCreationFormSubmit}
            businesses={businesses}
            isLoading={isCreatingPanel}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isCreatingPanel: PropTypes.bool.isRequired,
  businesses: PROP.BUSINESSES,
  // eslint-disable-next-line react/forbid-prop-types
  initialValues: PropTypes.object.isRequired,
  handlePanelCreationFormSubmit: PropTypes.func.isRequired,
};

export default View;
