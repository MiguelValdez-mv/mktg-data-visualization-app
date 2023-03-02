import PropTypes from "prop-types";

import { IconResize } from "@/assets/svgs/IconResize";
import { Text } from "@/components/atoms/Text";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { PROP } from "@/constants";
import { COPY } from "@/copy";

import { AreaChart } from "./AreaChart";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { NumberChart } from "./NumberChart";

export function WidgetChart({ type, ...rest }) {
  const Chart = (() => {
    switch (type) {
      case "NUMBER":
        return NumberChart;
      case "LINE":
        return LineChart;
      case "BAR":
        return BarChart;
      case "AREA":
        return AreaChart;
      default:
        return null;
    }
  })();

  return rest.width < 100 ? (
    <Col className="flex-1 justify-center items-center">
      <IconResize className="text-primary" />
      <Spacing bottom={1} />

      <Text center tiny>
        {COPY["widgetChart.veryLimitedSpace"]}
      </Text>
    </Col>
  ) : (
    <Chart {...rest} />
  );
}

WidgetChart.propTypes = {
  type: PropTypes.string.isRequired,
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
