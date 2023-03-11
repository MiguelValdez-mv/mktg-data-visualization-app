import PropTypes from "prop-types";
import { ResponsiveContainer } from "recharts";

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
import { TableChart } from "./TableChart";

export function WidgetChart({ type, ...rest }) {
  if (rest?.width < 100) {
    return (
      <Col className="flex-1 justify-center items-center">
        <IconResize className="text-primary" />
        <Spacing bottom={1} />

        <Text center tiny>
          {COPY["widgetChart.veryLimitedSpace"]}
        </Text>
      </Col>
    );
  }

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
      case "TABLE":
        return TableChart;
      default:
        throw new Error("Invalid chart type");
    }
  })();

  if (rest.isLargeScreen) {
    return <Chart {...rest} />;
  }

  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <Chart {...rest} />
    </ResponsiveContainer>
  );
}

WidgetChart.propTypes = {
  type: PropTypes.string.isRequired,
  isLargeScreen: PropTypes.bool.isRequired,
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
