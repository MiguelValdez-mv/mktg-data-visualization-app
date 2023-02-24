import { CHARTS, TIMESPANS } from "@/constants";

import { isDimensionRequired } from "../isDimensionRequired";

export const getWidgetFormParams = ({
  panelId,
  currConnectionType,
  connectionsMetadata,
  createWidget,
}) => {
  if (!currConnectionType) return {};

  const action = "create";

  const {
    metrics,
    dimensions,
    selectors = [],
  } = connectionsMetadata[currConnectionType];

  const [defaultSelector] = selectors;
  const [defaultMetric] = metrics;
  const [defaultChart] = CHARTS;
  const [defaultDimension] = dimensions;
  const [defaultTimespan] = TIMESPANS;

  const initialValues = {
    selector: defaultSelector,
    metric: defaultMetric,
    chart: defaultChart,
    dimension: defaultDimension,
    timespan: defaultTimespan,
    title: "",
    filters: [],
  };

  const handleSubmit = (values) => {
    const params = {
      panelId,
      selector: values.selector,
      metricName: values.metric.name,
      chartType: values.chart.type,
      dimensionName: isDimensionRequired(values.chart.type)
        ? values.dimension.name
        : "",
      timespan: {
        amount: values.timespan.amount,
        unit: values.timespan.unit,
      },
      title: values.title,
      filters: values.filters.map(({ field, operator, operand }) => ({
        fieldName: field.name,
        operator,
        operand,
      })),
    };

    createWidget(params);
  };

  return {
    action,
    metrics,
    dimensions,
    selectors,
    initialValues,
    handleSubmit,
  };
};
