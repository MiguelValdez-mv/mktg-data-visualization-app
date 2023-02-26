/* eslint-disable react/no-array-index-key, react/forbid-prop-types */
import PropTypes from "prop-types";
import RGridLayout, { WidthProvider } from "react-grid-layout";

import { PanelNavbar } from "@/components/app/panels/PanelNavbar";
import { Widget } from "@/components/app/widgets/Widget";
import { WidgetMenu } from "@/components/app/widgets/WidgetMenu";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { NoDataYet } from "@/components/molecules/NoDataYet";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

const GridLayout = WidthProvider(RGridLayout);

function View({
  isLoading,
  panel,
  widgets,
  layout,
  setLayout,
  widgetMenuIsOpen,
  currConnectionType,
  setCurrConnectionType,
  widgetFormParams,
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
          widgetFormParams={widgetFormParams}
        />
        <Spacing bottom={4} />

        {widgets.length ? (
          <GridLayout
            className="layout"
            layout={layout}
            onLayoutChange={setLayout}
          >
            {widgets.map((widget, idx) => (
              <div key={idx}>
                <Widget widget={widget} />
              </div>
            ))}
          </GridLayout>
        ) : (
          <NoDataYet />
        )}
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  panel: PROP.PANEL,
  widgets: PROP.WIDGETS,
  layout: PropTypes.array.isRequired,
  setLayout: PropTypes.func.isRequired,
  widgetMenuIsOpen: PropTypes.bool.isRequired,
  currConnectionType: PropTypes.string,
  setCurrConnectionType: PropTypes.func.isRequired,
  widgetFormParams: PropTypes.object.isRequired,
  toggleWidgetMenu: PropTypes.func.isRequired,
};

export default View;
