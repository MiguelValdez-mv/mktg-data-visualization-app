import PropTypes from "prop-types";

import { GoogleAnalyticsLogo } from "@/assets/svgs/GoogleAnalyticsLogo";
import { IconClose } from "@/assets/svgs/IconClose";
import { IconSquareFacebook } from "@/assets/svgs/IconSquareFacebook";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Col } from "@/components/layout/Col";
import { Spacing } from "@/components/layout/Spacing";
import { CONNECTION_TYPES } from "@/constants";
import { COPY } from "@/copy";
import { twMerge } from "@/utils/twMerge";

import { WidgetForm } from "../WidgetForm";

export function WidgetMenu({
  isOpen,
  close,
  connectionType,
  setConnectionType,
  ...rest
}) {
  return (
    <Col
      className={twMerge(
        "fixed top-0 right-0 z-50 w-full max-w-lg h-screen bg-tertiary p-5 drop-shadow-surface ease-in-out duration-300",
        isOpen ? "translate-x-0 " : "translate-x-full"
      )}
    >
      <IconButton className="self-end" onClick={close} primary>
        <IconClose />
      </IconButton>
      <Spacing bottom={2} />

      {connectionType ? (
        <>
          <Text subtitle bold>
            {COPY[`widgetMenu.${connectionType.toLowerCase()}`]}
          </Text>
          <Spacing bottom={4} />

          <WidgetForm connectionType={connectionType} {...rest} />
        </>
      ) : (
        <>
          <Text subtitle bold>
            {COPY["widgetMenu.selectConnectionType"]}
          </Text>
          <Spacing bottom={4} />

          <Button
            className="p-4"
            variant="surface"
            onClick={() => setConnectionType(CONNECTION_TYPES.GOOGLE_ANALYTICS)}
            startIcon={<GoogleAnalyticsLogo />}
          >
            {COPY["widgetMenu.google_analytics"]}
          </Button>
          <Spacing bottom={2} />

          <Button
            className="p-4"
            variant="surface"
            onClick={() => setConnectionType(CONNECTION_TYPES.FACEBOOK_ADS)}
            startIcon={<IconSquareFacebook className="text-primary" />}
          >
            {COPY["widgetMenu.facebook_ads"]}
          </Button>
        </>
      )}
    </Col>
  );
}

WidgetMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  connectionType: PropTypes.string,
  setConnectionType: PropTypes.func.isRequired,
};
