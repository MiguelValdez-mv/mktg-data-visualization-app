import PropTypes from "prop-types";
import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export function LineChart({ data }) {
  return (
    <RLineChart width={500} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dimensionValue" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="metricValue" stroke="#82ca9d" />
    </RLineChart>
  );
}

LineChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};
