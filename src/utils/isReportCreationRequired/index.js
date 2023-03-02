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
          filter.fieldName !== oldWidget.filter[currIdx].fieldName ||
          filter.operator !== oldWidget.filter[currIdx].operator ||
          filter.operand !== oldWidget.filter[currIdx].operand
      ),
  ].includes(true);
};
