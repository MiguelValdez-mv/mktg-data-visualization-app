/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { LineChart } from "./LineChart";
import { NumberChart } from "./NumberChart";

export function Chart({ type, metricValues }) {
  switch (type) {
    case "NUMBER": {
      const [metricValue] = metricValues;
      return <NumberChart value={metricValue} />;
    }
    case "LINE":
      return <LineChart />;
    case "VERTICAL_BAR":
      return null;
    case "HORIZONTAL_BAR":
      return null;
    case "DOUGHNUT":
      return null;
    default:
      return null;
  }
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
  metricValues: PropTypes.array.isRequired,
};
