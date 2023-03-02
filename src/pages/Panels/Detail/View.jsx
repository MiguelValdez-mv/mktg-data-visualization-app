import PropTypes from "prop-types";
import RGridLayout, { WidthProvider } from "react-grid-layout";

import { IconBxsWidget } from "@/assets/svgs/IconBxsWidget";
import { PanelNavbar } from "@/components/app/panels/PanelNavbar";
import { Widget } from "@/components/app/widgets/Widget";
import { WidgetMenu } from "@/components/app/widgets/WidgetMenu";
import { Col } from "@/components/layout/Col";
import { Content } from "@/components/layout/Content";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { Spacing } from "@/components/layout/Spacing";
import { NoDataYet } from "@/components/molecules/NoDataYet";
import { PROP } from "@/constants";
import { COPY } from "@/copy";
import { twMerge } from "@/utils/twMerge";

const GridLayout = WidthProvider(RGridLayout);

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

      <Content
        className={twMerge(!widgets.length && "h-full")}
        isLoading={isLoading}
      >
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

        {widgets.length ? (
          <Col className="overflow-y-auto">
            <GridLayout
              className="layout overflow-hidden min-w-[768px]"
              layout={layout}
              onLayoutChange={onLayoutChange}
            >
              {widgets.map((widget, idx) => (
                <Widget
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  widget={widget}
                  onClickEditOpt={() => onClickEditWidgetOpt(idx)}
                  onClickDeleteOpt={() => onClickDeleteWidgetOpt(idx)}
                />
              ))}
            </GridLayout>
          </Col>
        ) : (
          <NoDataYet
            className="h-full"
            icon={<IconBxsWidget className="text-muted w-24 h-24" />}
            msg={COPY["panels.detail.noWidgets"]}
          />
        )}
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
