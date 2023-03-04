import PropTypes from "prop-types";
import RGridLayout, { WidthProvider } from "react-grid-layout";

import { IconBxsWidget } from "@/assets/svgs/IconBxsWidget";
import { Col } from "@/components/layout/Col";
import { NoDataYet } from "@/components/molecules/NoDataYet";
import { PROP, BREAKPOINTS } from "@/constants";
import { COPY } from "@/copy";
import { useDimensions } from "@/hooks/useDimensions";

import { WidgetListItem } from "../WidgetListItem";

const GridLayout = WidthProvider(RGridLayout);

export function WidgetList({
  widgets,
  layout,
  onLayoutChange,
  onClickEditOpt,
  onClickDeleteOpt,
}) {
  const { isLargeScreen } = useDimensions({ breakpoint: BREAKPOINTS.SMALL });

  if (!widgets.length) {
    return (
      <NoDataYet
        className="h-full"
        icon={<IconBxsWidget className="text-muted w-24 h-24" />}
        msg={COPY["widgetList.noWidgets"]}
      />
    );
  }

  const listRender = widgets.map((widget, idx) => (
    <WidgetListItem
      // eslint-disable-next-line react/no-array-index-key
      key={`widget_${idx.toString()}`}
      widget={widget}
      onClickEditOpt={() => onClickEditOpt(idx)}
      onClickDeleteOpt={() => onClickDeleteOpt(idx)}
      isLargeScreen={isLargeScreen}
    />
  ));

  if (isLargeScreen) {
    return (
      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={onLayoutChange}
      >
        {listRender}
      </GridLayout>
    );
  }

  return <Col>{listRender}</Col>;
}

WidgetList.propTypes = {
  widgets: PROP.WIDGETS.isRequired,
  layout: PROP.LAYOUT.isRequired,
  onLayoutChange: PropTypes.func.isRequired,
  onClickEditOpt: PropTypes.func.isRequired,
  onClickDeleteOpt: PropTypes.func.isRequired,
};
