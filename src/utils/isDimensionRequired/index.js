export const isDimensionRequired = (chartType) =>
  ["LINE", "VERTICAL_BAR", "HORIZONTAL_BAR", "DOUGHNUT"].includes(chartType);
