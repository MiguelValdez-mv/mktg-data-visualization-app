import PropTypes from "prop-types";
import { Fragment } from "react";

import { IconBxErrorCircle } from "@/assets/svgs/IconBxErrorCircle";
import { IconClose } from "@/assets/svgs/IconClose";
import { ConnectionIcon } from "@/components/app/connections/ConnectionIcon";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/buttons/Button";
import { IconButton } from "@/components/atoms/buttons/IconButton";
import { Col } from "@/components/layout/Col";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { CONNECTION_TYPES } from "@/constants";
import { COPY } from "@/copy";
import { twMerge } from "@/utils/twMerge";

import { WidgetForm } from "../WidgetForm";

export function WidgetMenu({
  isOpen,
  close,
  currConnectionType,
  setCurrConnectionType,
  widgetFormParams,
}) {
  let content = null;

  if (currConnectionType) {
    const {
      action,
      selectors,
      metrics,
      dimensions,
      initialValues,
      handleSubmit,
    } = widgetFormParams;

    content = selectors?.length ? (
      <>
        <Row>
          <ConnectionIcon type={currConnectionType} />
          <Spacing right={2} />

          <Text subtitle bold>
            {COPY[`widgetMenu.${currConnectionType.toLowerCase()}`]}
          </Text>
        </Row>
        <Spacing bottom={4} />

        <WidgetForm
          connectionType={currConnectionType}
          action={action}
          selectors={selectors}
          metrics={metrics}
          dimensions={dimensions}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </>
    ) : (
      <Col className="items-center">
        <IconBxErrorCircle className="text-primary" />
        <Spacing bottom={2} />

        <Text subtitle bold>
          {COPY["widgetMenu.noConnections"]}
        </Text>
        <Spacing bottom={4} />

        <Link to="/connections/create-connection">
          <Button variant="outline-primary">
            {COPY["widgetMenu.addConnection"]}
          </Button>
        </Link>
      </Col>
    );
  } else {
    content = (
      <>
        <Text subtitle bold>
          {COPY["widgetMenu.selectConnectionType"]}
        </Text>
        <Spacing bottom={4} />

        {Object.values(CONNECTION_TYPES).map((type) => (
          <Fragment key={type}>
            <Button
              className="p-4"
              variant="surface"
              onClick={() => setCurrConnectionType(type)}
              startIcon={<ConnectionIcon type={type} />}
            >
              {COPY[`widgetMenu.${type.toLowerCase()}`]}
            </Button>

            <Spacing bottom={2} />
          </Fragment>
        ))}
      </>
    );
  }

  return (
    <Col
      className={twMerge(
        "fixed top-0 right-0 z-50 w-full max-w-xl h-screen bg-white p-5 drop-shadow-surface ease-in-out duration-300 overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <IconButton className="self-end" onClick={close} primary>
        <IconClose />
      </IconButton>
      <Spacing bottom={2} />

      {content}
    </Col>
  );
}

WidgetMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  currConnectionType: PropTypes.string,
  setCurrConnectionType: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  widgetFormParams: PropTypes.object.isRequired,
};
