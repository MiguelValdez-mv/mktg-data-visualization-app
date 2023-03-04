import PropTypes from "prop-types";

import { PanelForm } from "@/components/app/panels/PanelForm";
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
  businesses,
  isUpdatingPanel,
  panelRegistrationDate,
  initialValues,
  disablePanelUpdateForm,
  handlePanelUpdateFormSubmit,
}) {
  return (
    <Page>
      <Header title={COPY["panels.settings.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <Surface>
          <Col className="sm:flex-row sm:justify-between">
            <Text subtitle bold>
              {COPY["panels.settings.title"]}
            </Text>
            <Spacing bottom={2} />

            <Col className="self-end sm:self-auto">
              <Text bold end>
                {COPY["panels.settings.panelRegistrationDate"]}:
              </Text>

              <Text muted bold capitalize>
                {panelRegistrationDate}
              </Text>
            </Col>
          </Col>
          <Spacing bottom={4} />

          <PanelForm
            action="update"
            initialValues={initialValues}
            onSubmit={handlePanelUpdateFormSubmit}
            businesses={businesses}
            isLoading={isUpdatingPanel}
            disabledForm={disablePanelUpdateForm}
          />
        </Surface>
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  businesses: PROP.BUSINESSES,
  isUpdatingPanel: PropTypes.bool.isRequired,
  panelRegistrationDate: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialValues: PropTypes.object.isRequired,
  disablePanelUpdateForm: PropTypes.bool.isRequired,
  handlePanelUpdateFormSubmit: PropTypes.func.isRequired,
};

export default View;
