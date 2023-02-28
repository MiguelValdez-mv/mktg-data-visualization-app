import PropTypes from "prop-types";

import { PROP } from "@/constants";

import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughnutChart";
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
      case "DOUGHNUT":
        return DoughnutChart;
      default:
        return null;
    }
  })();

  return <Chart {...rest} />;
}

WidgetChart.propTypes = {
  type: PropTypes.string.isRequired,
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
