import PropTypes from "prop-types";
import {
  BarChart as RBarChat,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

import { PROP } from "@/constants";

export function BarChart({ data, width, height }) {
  return (
    <RBarChat data={data} width={width} height={height} className="self-center">
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="dimension" />
      <YAxis />

      <Tooltip />

      <Bar dataKey="metric" fill="#344767" />
    </RBarChat>
  );
}

BarChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
