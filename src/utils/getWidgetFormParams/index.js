import { CHARTS, TIMESPANS } from "@/constants";

import { isDimensionRequired } from "../isDimensionRequired";

const getInitialValues = ({ selectors, metrics, dimensions, currWidget }) => {
  if (currWidget) {
    const {
      selector,
      metricName,
      chartType,
      dimensionName,
      timespan,
      title = "",
      filters = [],
    } = currWidget;

    return {
      selector,
      metric: metrics.find((m) => m.name === metricName),
      chart: CHARTS.find((c) => c.type === chartType),
      dimension: dimensionName
        ? dimensions.find((d) => d.name === dimensionName)
        : "",
      timespan: TIMESPANS.find(
        (t) => t.amount === timespan.amount && t.unit === timespan.unit
      ),
      title,
      filters: filters.map(({ fieldName, operator, operand }) => ({
        field: dimensions.find((d) => d.name === fieldName),
        operator,
        operand,
      })),
    };
  }

  const [defaultSelector] = selectors;
  const [defaultMetric] = metrics;
  const [defaultChart] = CHARTS;
  const [defaultDimension] = dimensions;
  const [defaultTimespan] = TIMESPANS;

  return {
    selector: defaultSelector,
    metric: defaultMetric,
    chart: defaultChart,
    dimension: defaultDimension,
    timespan: defaultTimespan,
    title: "",
    filters: [],
  };
};

export const getWidgetFormParams = ({
  panelId,
  currConnectionType,
  connectionsMetadata,
  onSubmit,
  currWidget,
}) => {
  if (!currConnectionType) return {};

  const action = currWidget ? "update" : "create";

  const {
    metrics,
    dimensions,
    selectors = [],
  } = connectionsMetadata[currConnectionType];

  const initialValues = getInitialValues({
    selectors,
    metrics,
    dimensions,
    currWidget,
  });

  const handleSubmit = ({
    selector,
    metric,
    chart,
    dimension,
    timespan,
    title,
    filters,
  }) => {
    const { name: metricName } = metric;
    const { type: chartType } = chart;
    const { name: dimensionName } = dimension;
    const { amount, unit } = timespan;

    const params = {
      panelId,
      selector,
      metricName,
      chartType,
      dimensionName: isDimensionRequired(chartType) ? dimensionName : "",
      timespan: {
        amount,
        unit,
      },
      title,
      filters: filters.map(
        ({ field: { name: fieldName }, operator, operand }) => ({
          fieldName,
          operator,
          operand,
        })
      ),
    };

    onSubmit(params, action);
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
