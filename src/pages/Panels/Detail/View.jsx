import PropTypes from "prop-types";

import { PanelNavbar } from "@/components/app/panels/PanelNavbar";
import { WidgetList } from "@/components/app/widgets/WidgetList";
import { WidgetMenu } from "@/components/app/widgets/WidgetMenu";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

function View({
  isLoading,
  panel,
  widgets,
  layout,
  onLayoutChange,
  widgetMenuIsOpen,
  currConnectionType,
  setCurrConnectionType,
  widgetFormParams,
  isCreatingReport,
  toggleWidgetMenu,
  onClickEditWidgetOpt,
  onClickDeleteWidgetOpt,
}) {
  return (
    <Page>
      <Header title={COPY["panels.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <PanelNavbar
          panel={panel}
          openWidgetMenu={toggleWidgetMenu}
          isLoading={isCreatingReport}
        />

        <WidgetMenu
          isOpen={widgetMenuIsOpen}
          close={toggleWidgetMenu}
          currConnectionType={currConnectionType}
          setCurrConnectionType={setCurrConnectionType}
          widgetFormParams={widgetFormParams}
        />
        <Spacing bottom={4} />

        <WidgetList
          widgets={widgets}
          layout={layout}
          onLayoutChange={onLayoutChange}
          onClickEditOpt={onClickEditWidgetOpt}
          onClickDeleteOpt={onClickDeleteWidgetOpt}
        />
      </Content>
    </Page>
  );
}

View.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  panel: PROP.PANEL,
  widgets: PROP.WIDGETS.isRequired,
  layout: PROP.LAYOUT.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  widgetMenuIsOpen: PropTypes.bool.isRequired,
  currConnectionType: PropTypes.string,
  setCurrConnectionType: PropTypes.func.isRequired,
  isCreatingReport: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  widgetFormParams: PropTypes.object.isRequired,
  toggleWidgetMenu: PropTypes.func.isRequired,
  onClickEditWidgetOpt: PropTypes.func.isRequired,
  onClickDeleteWidgetOpt: PropTypes.func.isRequired,
};

export default View;
