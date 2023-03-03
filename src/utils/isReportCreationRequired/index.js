export const isReportCreationRequired = (newWidget, oldWidget) => {
  if (!oldWidget) return true;

  return [
    newWidget.selector._id !== oldWidget.selector._id,
    newWidget.metricName !== oldWidget.metricName,
    newWidget.dimensionName !== oldWidget.dimensionName,
    newWidget.timespan.amount !== oldWidget.timespan.amount,
    newWidget.timespan.unit !== oldWidget.timespan.unit,
    newWidget.filters.length !== oldWidget.filters.length ||
      newWidget.filters.some(
        (filter, currIdx) =>
          filter.fieldName !== oldWidget.filters[currIdx].fieldName ||
          filter.operator !== oldWidget.filters[currIdx].operator ||
          filter.operand !== oldWidget.filters[currIdx].operand
      ),
  ].includes(true);
};
