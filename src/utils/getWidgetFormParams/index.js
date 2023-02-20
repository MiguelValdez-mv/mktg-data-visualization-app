import { CHARTS, TIMESPANS } from "@/constants";

export const getWidgetFormParams = ({
  currConnectionType,
  connectionsMetadata,
}) => {
  if (!currConnectionType) return {};

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
  };

  const handleSubmit = () => {};

  return {
    metrics,
    dimensions,
    selectors,
    initialValues,
    handleSubmit,
  };
};
