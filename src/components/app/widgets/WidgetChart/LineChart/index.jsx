import PropTypes from "prop-types";
import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { PROP } from "@/constants";

export function LineChart({ data, width, height }) {
  return (
    <RLineChart
      data={data}
      width={width}
      height={height}
      className="self-center"
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="dimension" />
      <YAxis />

      <Tooltip />

      <Line type="monotone" dataKey="metric" stroke="#344767" />
    </RLineChart>
  );
}

LineChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
