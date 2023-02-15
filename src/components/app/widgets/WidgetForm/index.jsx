import PropTypes from "prop-types";

import { CONNECTION_TYPES } from "@/constants";

import { FacebookAdsWidgetForm } from "./FacebookAdsWidgetForm";
import { GoogleAnalyticsWidgetForm } from "./GoogleAnalyticsWidgetForm";

export function WidgetForm({ connectionType, ...rest }) {
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

  return <Form {...rest} />;
}

WidgetForm.propTypes = {
  connectionType: PropTypes.oneOf(Object.values(CONNECTION_TYPES)).isRequired,
};
