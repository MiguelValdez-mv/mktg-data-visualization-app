/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { PanelNavbar } from "@/components/app/panels/PanelNavbar";
import { WidgetMenu } from "@/components/app/widgets/WidgetMenu";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  widgetMenuIsOpen,
  currConnectionType,
  setCurrConnectionType,
  isLoading,
  panel,
  selectors,
  metrics,
  dimensions,
  widgetFormInitialValues,
  handleWidgetFormSubmit,
  toggleWidgetMenu,
}) {
  return (
    <Page>
      <Header title={COPY["panels.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <PanelNavbar panel={panel} openWidgetMenu={toggleWidgetMenu} />

        <WidgetMenu
          isOpen={widgetMenuIsOpen}
          close={toggleWidgetMenu}
          currConnectionType={currConnectionType}
          setCurrConnectionType={setCurrConnectionType}
          selectors={selectors}
          metrics={metrics}
          dimensions={dimensions}
          widgetFormInitialValues={widgetFormInitialValues}
          handleWidgetFormSubmit={handleWidgetFormSubmit}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  widgetMenuIsOpen: PropTypes.bool.isRequired,
  currConnectionType: PropTypes.string,
  setCurrConnectionType: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  panel: PROP.PANEL,
  selectors: PropTypes.array,
  metrics: PropTypes.array,
  dimensions: PropTypes.array,
  widgetFormInitialValues: PropTypes.object,
  handleWidgetFormSubmit: PropTypes.func,
  toggleWidgetMenu: PropTypes.func.isRequired,
};

export default View;
