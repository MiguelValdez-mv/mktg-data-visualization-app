/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { CONNECTION_TYPES } from "@/constants";

import { FacebookAdsWidgetForm } from "./FacebookAdsWidgetForm";
import { GoogleAnalyticsWidgetForm } from "./GoogleAnalyticsWidgetForm";

export function WidgetForm({
  connectionType,
  action,
  selectors,
  metrics,
  dimensions,
  initialValues,
  handleSubmit,
}) {
  const Form = (() => {
    switch (connectionType) {
      case CONNECTION_TYPES.GOOGLE_ANALYTICS:
        return GoogleAnalyticsWidgetForm;
      case CONNECTION_TYPES.FACEBOOK_ADS:
        return FacebookAdsWidgetForm;
      default:
        return null;
    }
  })();

  return (
    <Form
      action={action}
      selectors={selectors}
      metrics={metrics}
      dimensions={dimensions}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
}

WidgetForm.propTypes = {
  connectionType: PropTypes.oneOf(Object.values(CONNECTION_TYPES)).isRequired,
  action: PropTypes.oneOf(["create", "update"]),
  selectors: PropTypes.array.isRequired,
  metrics: PropTypes.array.isRequired,
  dimensions: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
