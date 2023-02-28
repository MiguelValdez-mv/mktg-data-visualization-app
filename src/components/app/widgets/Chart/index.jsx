import PropTypes from "prop-types";

import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughnutChart";
import { LineChart } from "./LineChart";
import { NumberChart } from "./NumberChart";

export function Chart({ type, data }) {
  switch (type) {
    case "NUMBER": {
      const [{ metricValue }] = data;
      return <NumberChart value={metricValue} />;
    }
    case "LINE":
      return <LineChart data={data} />;
    case "BAR":
      return <BarChart />;
    case "DOUGHNUT":
      return <DoughnutChart />;
    default:
      return null;
  }
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};
