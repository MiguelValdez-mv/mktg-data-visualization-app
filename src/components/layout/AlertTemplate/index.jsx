import PropTypes from "prop-types";

import { IconBxErrorCircle } from "@/assets/svgs/IconBxErrorCircle";
import { IconCheckCircle } from "@/assets/svgs/IconCheckCircle";
import { IconClose } from "@/assets/svgs/IconClose";
import { IconInfoCircle } from "@/assets/svgs/IconInfoCircle";
import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { Text } from "@/components/atoms/Text";
import { Row } from "@/components/layout/Row";
import { Spacing } from "@/components/layout/Spacing";
import { Surface } from "@/components/layout/Surface";

export function AlertTemplate({ options, message, close }) {
  const renderIcon = () => {
    switch (options.type) {
      case "info":
        return <IconInfoCircle className="text-info" />;
      case "success":
        return <IconCheckCircle className="text-success" />;
      case "error":
        return <IconBxErrorCircle className="text-error" />;
      default:
        return null;
    }
  };

  return (
    <Surface className="flex-row m-2 pointer-events-auto">
      <Row className="items-center">
        {renderIcon()}
        <Spacing right={1} />

        <Text bold small>
          {message}
        </Text>
      </Row>
      <Spacing right={4} />

      <ButtonIcon className="self-start" onClick={close} muted>
        <IconClose className="w-auto h-auto" />
      </ButtonIcon>
    </Surface>
  );
}

AlertTemplate.propTypes = {
  options: PropTypes.shape({
    type: PropTypes.oneOf(["info", "success", "error"]),
  }),
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
