export const isDimensionRequired = (chartType) =>
  ["LINE", "BAR", "AREA", "TABLE"].includes(chartType);
