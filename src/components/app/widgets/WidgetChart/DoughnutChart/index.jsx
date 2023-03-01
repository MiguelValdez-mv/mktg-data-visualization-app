import PropTypes from "prop-types";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

import { PROP } from "@/constants";

import { COLORS } from "./colors";

export function DoughnutChart({ data, width, height }) {
  return (
    <PieChart width={width} height={height} className="self-center">
      <Pie
        data={data}
        dataKey="metric"
        nameKey="dimension"
        cx="50%"
        cy="50%"
        label
      >
        {data.map((entry, idx) => (
          <Cell key={entry} fill={COLORS[idx % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}

DoughnutChart.propTypes = {
  data: PROP.CHART_DATA.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
