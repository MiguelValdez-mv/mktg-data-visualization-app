import PropTypes from "prop-types";
import {
  AreaChart as RAreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

import { PROP } from "@/constants";

export function AreaChart({ data, width, height }) {
  return (
    <RAreaChart data={data} width={width} height={height}>
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="dimension" />
      <YAxis />

      <Tooltip />

      <Area type="monotone" dataKey="metric" fill="#344767" stroke="#344767" />
    </RAreaChart>
  );
}

AreaChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
