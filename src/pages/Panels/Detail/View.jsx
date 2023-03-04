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
  widgets,
  widgetMenuIsOpen,
  currConnectionType,
  setCurrConnectionType,
  panel,
  isCreatingReport,
  isSavingChanges,
  toggleWidgetMenu,
  onClickEditWidgetOpt,
  onClickDeleteWidgetOpt,
  onLayoutChange,
  saveChanges,
  widgetFormParams,
  isLoading,
  layout,
  isPanelChanged,
}) {
  return (
    <Page>
      <Header title={COPY["panels.detail.title"]} />
      <Spacing bottom={8} />

      <Content isLoading={isLoading}>
        <PanelNavbar
          panel={panel}
          saveChanges={saveChanges}
          openWidgetMenu={toggleWidgetMenu}
          isLoading={isCreatingReport || isSavingChanges}
          isPanelChanged={isPanelChanged}
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
  widgets: PROP.WIDGETS.isRequired,
  widgetMenuIsOpen: PropTypes.bool.isRequired,
  currConnectionType: PropTypes.string,
  setCurrConnectionType: PropTypes.func.isRequired,
  panel: PROP.PANEL,
  isCreatingReport: PropTypes.bool.isRequired,
  isSavingChanges: PropTypes.bool.isRequired,
  toggleWidgetMenu: PropTypes.func.isRequired,
  onClickEditWidgetOpt: PropTypes.func.isRequired,
  onClickDeleteWidgetOpt: PropTypes.func.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  widgetFormParams: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  layout: PROP.LAYOUT.isRequired,
  isPanelChanged: PropTypes.bool.isRequired,
};

export default View;
