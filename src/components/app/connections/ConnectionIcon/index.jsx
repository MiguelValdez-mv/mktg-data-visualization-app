import PropTypes from "prop-types";

import { GoogleAnalyticsLogo } from "@/assets/svgs/GoogleAnalyticsLogo";
import { IconSquareFacebook } from "@/assets/svgs/IconSquareFacebook";
import { CONNECTION_TYPES } from "@/constants";

export function ConnectionIcon({ type }) {
  switch (type) {
    case CONNECTION_TYPES.GOOGLE_ANALYTICS:
      return <GoogleAnalyticsLogo />;
    case CONNECTION_TYPES.FACEBOOK_ADS:
      return <IconSquareFacebook className="text-primary" />;
    default:
      throw new Error("Invalid connection type");
  }
}

ConnectionIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(CONNECTION_TYPES)).isRequired,
};
