import { CHARTS, TIMESPANS } from "@/constants";

import { isDimensionRequired } from "../isDimensionRequired";

const getInitialValues = ({ selectors, metrics, dimensions }) => {
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
  createWidget,
  toggleWidgetMenu,
}) => {
  if (!currConnectionType) return {};

  const action = "create";

  const {
    metrics,
    dimensions,
    selectors = [],
  } = connectionsMetadata[currConnectionType];

  const initialValues = getInitialValues({ selectors, metrics, dimensions });

  const handleSubmit = ({
    selector,
    metric,
    chart,
    dimension,
    timespan,
    title,
    filters,
  }) => {
    toggleWidgetMenu();

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

    if (action === "create") {
      const defaultLayout = {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
      };

      createWidget({ ...params, layout: defaultLayout });
    }
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
